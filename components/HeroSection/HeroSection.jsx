import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Style from './HeroSection.module.css';
import {Button} from '../componentIndex';
import image from '../../img';

const Home = () => {
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, Collect, and Sell NFTs</h1>
          <p>NFT Marketplace for Graphics Artist of Bicol Region</p>
          <Button btnName="Start your search" handleClick={()=> router.push('/searchPage')}/>
        </div>
        <div className={Style.heroSection_box_right}>
          <Image src={image.hero} alt="Hero Section" width={600} height={600}/>
        </div>
      </div>
    </div>
  )
}

export default Home