import React, {useEffect, useContext, useState} from 'react'
import { useRouter } from 'next/router';

import {Button, Brand, Category} from '../components/componentIndex';
import NFTDetailsPage from '../NFTDetailsPage/NFTDetailsPage';

import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const NFTDetails = () => {
  const {currentAccount} = useContext(NFTMarketplaceContext)

  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  })

  const router = useRouter();
  useEffect(()=>{
    if (!router.isReady) return;
    setNft(router.query);
  }, [router.isReady]);

  return (
    <div>
        <NFTDetailsPage nft={nft} />
        <Category />
        <Brand />
    </div>
  )
}

export default NFTDetails