import React from 'react';
import Image from 'next/image';
import {TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, 
  TiSocialInstagram,TiSocialYoutube} from 'react-icons/ti';
import {RiSendPlaneFill} from 'react-icons/ri';
import {Discover,HelpCenter} from '../NavBar/index';

import Style from "./Footer.module.css";
import image from '../../img';

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={image.logo} alt="Footer logo" width={100} height={100}/>
          <p>
            NFT marketplace for graphics artist of bicol region NFT marketplace for graphics artist of bicol region
            NFT marketplace for graphics artist of bicol region NFT marketplace for graphics artist of bicol region
            NFT marketplace for graphics artist of bicol region NFT marketplace for graphics artist of bicol region
          </p>
          <div className={Style.footer_social}>
            <a href='#'>
              <TiSocialFacebook/>
            </a>
            <a href='#'>
              <TiSocialTwitter/>
            </a>
            <a href='#'>
              <TiSocialInstagram/>
            </a>
            <a href='#'>
              <TiSocialLinkedin/>
            </a>
            <a href='#'>
              <TiSocialYoutube/>
            </a>
          </div>
        </div>
        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover/>
        </div>
        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter/>
        </div>
        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
        
          <div className={Style.subscribe_box}>
            <input type='email' placeholder='Enter your email'/>
            <RiSendPlaneFill className={Style.subscribe_box_send}/>
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              NFT marketplace for graphics artist of bicol region NFT marketplace for graphics artist of bicol region
              NFT marketplace for graphics artist of bicol region NFT marketplace for graphics artist of bicol region
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer