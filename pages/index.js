import React, { useState, useContext, useEffect } from 'react';

import Style from '../styles/index.module.css';
import {HeroSection, Service, BigNFTSlider, Subscribe, 
  Title, Category, Filter, NFTCard, Collection, FollowerTab, 
  AudioLive, Slider, Brand, Video, Loader, BTC} from "../components/componentIndex";
import { getTopCreators } from '../TopCreators/TopCreators';

import { NFTMarketplaceContext } from "../context/NFTMarketplaceContext";

const index = () => {
  const { checkIfWalletConnected, currentAccount } = useContext(NFTMarketplaceContext);
  useEffect(()=> {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  const creators = getTopCreators(nfts);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        // if(currentAccount){
          const items = await fetchNFTs();
          const reversedItems = items.slice().reverse();
    
          setNfts(reversedItems);
          setNftsCopy(reversedItems);
        // }

      } catch (error) {
        console.log("Error while fetching NFTs", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service/>
      <BigNFTSlider/>
      <Title heading="Futured NFTs" paragraph="Discover the most outstanding NFTs." /> 
      <Filter />
      {nfts.length == 0 ? <Loader/> : <NFTCard nftData={nfts}/>} 
      {creators.length == 0 ? <Loader/> : <FollowerTab TopCreators={creators}/>}
      {/* <Slider /> */}
      <Title heading="Crypto Price" paragraph="24hrs Range Live Update" />
      <BTC />
      {/* <Collection /> */}
      <Title heading="Browse by Category" paragraph="Explore the NFTs in the most featured category." />
      <Category />
      {/* <Subscribe /> */}
      <Brand />
      <Video />
    </div>
  );
};

export default index;
