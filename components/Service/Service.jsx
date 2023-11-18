import React from 'react';
import Image from 'next/image';

import Style from './Service.module.css';
import image from '../../img';

const Service = () => {
  return (
    <div className={Style.service}>
        <div className={Style.service_box}>
            <div className={Style.service_box_items}>
                <Image src={image.service1} alt="Filter and Discover" width={100} height={100}/>
                <p className={Style.service_box_items_step}>
                    <span>Step 1</span>
                </p>
                <h3>Filter & Discover</h3>
                <p>
                    Connect with wallet, Discover, buy NFTs sell your NFTs
                </p>
            </div>
            <div className={Style.service_box_items}>
                <Image src={image.service2} alt="Filter and Discover" width={100} height={100}/>
                <p className={Style.service_box_items_step}>
                    <span>Step 1</span>
                </p>
                <h3>Filter & Discover</h3>
                <p>
                    Connect with wallet, Discover, buy NFTs sell your NFTs
                </p>
            </div>
            <div className={Style.service_box_items}>
                <Image src={image.service3} alt="Connect Wallet" width={100} height={100}/>
                <p className={Style.service_box_items_step}>
                    <span>Step 1</span>
                </p>
                <h3>Connect Wallet</h3>
                <p>
                    Connect with wallet, Discover, buy NFTs sell your NFTs
                </p>
            </div>
            <div className={Style.service_box_items}>
                <Image src={image.service1} alt="Filter and Discover" width={100} height={100}/>
                <p className={Style.service_box_items_step}>
                    <span>Step 1</span>
                </p>
                <h3>Start trading</h3>
                <p>
                    Connect with wallet, Discover, buy NFTs sell your NFTs
                </p>
            </div>
        </div>
    </div>
  )
}

export default Service