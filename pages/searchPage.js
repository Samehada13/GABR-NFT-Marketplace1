import React, {useState, useEffect, useContext} from 'react';

import Style from '../styles/searchPage.module.css';
import {Slider, Brand, Loader, BTC, Title, Category} from '../components/componentIndex';
import {SearchBar} from '../searchPage/searchBarIndex';
import {Filter} from '../components/componentIndex';
import {NFTCardTwo, Banner} from '../collectionPage/collectionIndex';
import images from '../img';

import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const searchPage = () => {
  const { fetchNFTs, currentAccount } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  // console.log('nfts:', nfts);

  // useEffect(()=> {
  //   try {
  //     if(currentAccount){
  //       fetchNFTs().then((items)=> {
  //         setNfts(items.reverse());
  //         setNftsCopy(items);
  //         console.log(nfts);
  //       });
  //     }      
  //   } catch (error) {
  //     console.log("Error while fetching NFTs", error)
  //   }
  // }, []);
  // useEffect(() => {
    
  //   const fetchData = async () => {
  //     try {
  //       const items = await fetchNFTs();
  //       setNfts(items);
  //       setNftsCopy(items);
  //     } catch (error) {
  //       console.log("Error while fetching NFTs", error);
  //     }
  //   };

  //   fetchData();

  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // if(currentAccount){
          const items = await fetchNFTs();
          const reversedItems = items.slice().reverse();
          console.log(items);
    
          setNfts(reversedItems);
          setNftsCopy(reversedItems);
        // }

      } catch (error) {
        console.log("Error while fetching NFTs", error);
      }
    };
  
    fetchData();
  }, []);

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({name})=> 
    name.toLowerCase().includes(value.toLowerCase()));
  

    if(filteredNFTS.length === 0){
      setNfts(nftsCopy);
    }else{
      setNfts(filteredNFTS);
    }
  }

  const onClearSearch = () => {
    if(nfts.length && nftsCopy.length){
      setNfts(nftsCopy);
    }
  }

  // const collectionArray = [
  //   image.nftsale1,
  //   image.nftsale2,
  //   image.nftsale4,
  //   image.nftsale3,
  //   image.nftsale2,
  //   image.nftsale4,
  //   image.nftsale3,
  // ]
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground8}/>
      <SearchBar onHandleSearch={onHandleSearch} onClearSearch={onClearSearch}/>
      
      <Filter/>
      {nfts.length == 0 ? <Loader/> : <NFTCardTwo NFTData={nfts}/>}
      
      <Title heading="Crypto Price" paragraph="24hrs Range Live Update" />
      <BTC />
      <Title heading="Browse by Category" paragraph="Explore the NFTs in the most featured category." />
      <Category />
      <Brand />
    </div>
  )
}

export default searchPage