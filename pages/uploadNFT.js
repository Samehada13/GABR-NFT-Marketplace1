import React, {useState, useEffect, useContext} from 'react';

import Style from '../styles/uploadNFT.module.css';
import {UploadNFT} from '../uploadNFT/UploadNFTIndex';

import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const uploadNFT = () => {

    const {uploadIPFS, createNFT} = useContext(NFTMarketplaceContext);


  return (
    <div className={Style.uploadNFT}>
        <div className={Style.uploadNFT_box}>
            <div className={Style.uploadNFT_box_heading}>
                <h1>Create an NFT</h1>
                <p>
                Once your item is minted you will not be able to change any of its information. 
                </p>
            </div>
            <div className={Style.uploadNFT_box_title}>
                <h2>Image</h2>
                <p>
                    Files supported: JPG, PNG, GIF, SVG
                    Max size: 100 MB
                </p>
            </div>
            <div className={Style.uploadNFT_box_form}>
                <UploadNFT uploadIPFS={uploadIPFS} createNFT={createNFT}/>
            </div>
        </div>
    </div>
  )
}

export default uploadNFT