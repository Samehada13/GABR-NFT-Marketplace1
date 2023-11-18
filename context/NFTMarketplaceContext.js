import React, { useState, useContext, useEffect } from 'react';
import Web3Modal from 'web3modal';
import {ethers} from 'ethers';
import Router from 'next/router';
import { useRouter } from 'next/router';
import axios from 'axios';
import {create as ipfsHttpClient} from 'ipfs-http-client';


// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v3/2XKxJReFQ3KJ5RTchUsE3hMDOVC");

const projectId = "2XKxJReFQ3KJ5RTchUsE3hMDOVC";
const projectSecretKey = "d8a734b5865fd4d65b379e84c1c0a447";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString("base64")}`;
const subdomain = "https://hada-nft-marketplace.infura-ipfs.io";

const client = ipfsHttpClient({
    host: "infura-ipfs.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    }
})

import {NFTMarketplaceAddress, NFTMarketplaceABI} from './constants';

const fetchContract = (signerOrProvider) => new ethers.Contract(NFTMarketplaceAddress,
    NFTMarketplaceABI, signerOrProvider);



const connectingWithSC = async() => {
    
    try{
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    }catch (error){
        console.log("Something went wrong while connecting with smart contract");
    }
}

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
    const titleData = "Discover, collect, and sell NFTs";

    const [error, setError] = useState("");
    const [openError, setOpenError] = useState(false);

    const [currentAccount, setCurrentAccount] = useState("");
    const router = useRouter();

    const checkIfWalletConnected = async()=> {
        try{
            if(!window.ethereum) return setOpenError(true), setError("Install Metamask");

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });

            if(accounts.length){
                setCurrentAccount(accounts[0]);
            }else{
                setError("No account found");
                setOpenError(true);
            }
        }catch (error){
            setError("Something while connecting to wallet");
            setOpenError(true);
        }
    }

    useEffect(()=>{
        checkIfWalletConnected();
    }, []);

    const connectWallet = async ()=> {
        try{
            if(!window.ethereum) return (setOpenError(true), setError("Install Metamask"))

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });

            setCurrentAccount(accounts[0]);
            // window.location.reload();
        }catch (error){
            setError("Error while connecting to wallet");
            setOpenError(true);
        }
    }

    const uploadIPFS = async(file)=> {
        try{
            const added = await client.add({content: file});
            const url = `${subdomain}/ipfs/${added.path}`;
            return url;
        }catch (error){
            setError("Error uploading to IPFS");
            setOpenError(true);
        }
    }

    const createNFT = async (name, price, image, description, router) => {
        

            if(!name || !description || !price || !image) 
            return setError("Data is missing"), setOpenError(true);

            const data = JSON.stringify({name, description, image});

            try{
                const added = await client.add(data);
                const url = `https://infura-ipfs.io/ipfs/${added.path}`

                await createSale(url, price);
                router.push('/searchPage');
            }catch (error){
                setError("Error while creating NFT");
                setOpenError(true);
            }
    }

    const createSale = async (url, formInputPrice, isReselling, id)=>{
        try {
            const price = ethers.utils.parseUnits(formInputPrice, "ether");
            const contract = await connectingWithSC();

            const listingPrice = await contract.getListingPrice();

            const transaction = !isReselling ? 
            await contract.createToken(url, price, {value: listingPrice.toString(),}) :
            await contract.resellToken(id, price, {value: listingPrice.toString(),});

            await transaction.wait();

            // console.log(transaction);
            // router.push('/searchPage');
        } catch (error) {
            setError("error while creating sale");
            setOpenError(true);
        }
    }

    const fetchNFTs = async ()=> {
        try {
            // if (currentAccount){
                const provider = new ethers.providers.JsonRpcProvider(
                    "https://polygon-mumbai.g.alchemy.com/v2/5DL1iH9oYF7LZpbbDdrPQvn6DbG3giWZ"
                );
                console.log(provider);
                const contract = fetchContract(provider);
    
                const data = await contract.fetchMarketItems();
    
                const items = await Promise.all(
                    data.map(async({tokenId, seller, owner, price: unformattedPrice})=>{
                        const tokenURI = await contract.tokenURI(tokenId);
    
                        const {
                            data: {image, name, description},
                        } = await axios.get(tokenURI);
                        const price = ethers.utils.formatUnits(
                            unformattedPrice.toString(),
                            "ether"
                        );
                        return {
                            price, 
                            tokenId: tokenId.toNumber(),
                            seller, 
                            owner, 
                            image, 
                            name, 
                            description, 
                            tokenURI
                        };
                    })
                );
                console.log(items);
                return items;
            // } 
            
        } catch (error) {
            setError("Error while fetching NFTs", error);
            setOpenError(true);
            console.log(error);
        }
    };

    useEffect(()=> {
        // if (currentAccount){
            fetchNFTs();
        // }
    }, []);

    const fetchMyNFTsOrListedNFTs = async(type)=> {
        try {
            // if(currentAccount){
                const contract = await connectingWithSC();

                const data = type == "fetchItemsListed" ? await contract.fetchItemsListed() : 
                await contract.fetchMyNFTs();
    
                const items = await Promise.all(
                    data.map(async ({tokenId, seller, owner, price: unformattedPrice})=> {
                        const tokenURI = await contract.tokenURI(tokenId);
                        const {
                            data: {image, name, description},
                        }= await axios.get(tokenURI);
                        const price = ethers.utils.formatUnits(
                            unformattedPrice.toString(),
                            "ether"
                        );
                        return{
                            price, 
                            tokenId: tokenId.toNumber(),
                            seller, 
                            owner, 
                            image, 
                            name, 
                            description, 
                            tokenURI
                        }
                    })
                )
                return items;
            // }

            
        } catch (error) {
            setError("Error while fetching listed NFTs");
            setOpenError(true);
        }
    }

    useEffect(()=> {
        fetchMyNFTsOrListedNFTs();
    }, []);

    const buyNFT = async (nft) => {
        try {
            const contract = await connectingWithSC();
            const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

            const transaction = await contract.createMarketSale(nft.tokenId, {
                value: price,
            });
            await transaction.wait();
            router.push("/author");
        } catch (error) {
            setError("Error while buying NFT");
            setOpenError(true);
        }
    }

    return (
        <NFTMarketplaceContext.Provider value = {{titleData, 
        connectWallet,
        uploadIPFS, 
        createNFT,
        fetchMyNFTsOrListedNFTs, 
        buyNFT, 
        checkIfWalletConnected, 
        fetchNFTs,
        createSale,
        setOpenError,
        openError,
        error,
        currentAccount,
        }}>
            {children}
        </NFTMarketplaceContext.Provider>
    );
};