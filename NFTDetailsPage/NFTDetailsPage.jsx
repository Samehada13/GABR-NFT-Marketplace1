import React from 'react'

import Style from './NFTDetailsPage.module.css'
import {NFTDescription, NFTDetailsImg, NFTTabs} from './NFTDetailsPageIndex'

const NFTDetailsPage = ({nft}) => {
  return (
    <div className={Style.nftDetailsPage}>
      <div className={Style.nftDetailsPage_box}>
        <NFTDetailsImg nft={nft}/>
        <NFTDescription nft={nft}/>
      </div>
    </div>
  )
}

export default NFTDetailsPage