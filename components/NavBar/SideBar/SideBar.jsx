import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {GrClose} from 'react-icons/gr';
import {TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, 
  TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, 
  TiArrowSortedUp} from 'react-icons/ti';
import { useRouter } from 'next/router';

import Style from './SideBar.module.css';
import image from '../../../img';
import Button from '../../Button/Button';


const SideBar = ({setOpenSideMenu, currentAccount, connectWallet}) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const router = useRouter();

  const discover =[
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    }
  ];
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign up",
      link: "sign-up",
    },
    {
      name: "Sign in",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    }
  ];

  const openDiscoverMenu =() => {
    if(!openDiscover){
      setOpenDiscover(true);
    }else{
      setOpenDiscover(false);
    }
  };

  const openHelpMenu=() => {
    if(!openHelp){
      setOpenHelp(true);
    }else{
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.sidebar}>
      <GrClose className={Style.sideBar_closeBtn} onclick={() => closeSideBar()}/>
      <div className={Style.sideBar_box}>
        <Image src={image.logo} alt="logo" width={150} height={150}/>
        <p>Discover the most outstanding article about NFT</p>
        <div className={Style.sideBar_social}>
          <a href='#'>
            <TiSocialFacebook/>
          </a>
          <a href='#'>
            <TiSocialTwitter/>
          </a>
          <a href='#'>
            <TiSocialLinkedin/>
          </a>
          <a href='#'>
            <TiSocialYoutube/>
          </a>
          <a href='#'>
            <TiSocialInstagram/>
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={()=>openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>
          {
            openDiscover && (
              <div className={Style.sideBar_discover}>
                {discover.map((el, i)=>(
                  <p key={i+1}>
                    <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
        <div>
          <div className={Style.sideBar_menu_box} onClick={()=>openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown/>
          </div>
          {openHelp &&(
            <div className={Style.sideBar_discover}>
              {helpCenter.map((el, i)=>(
                <p key={i+1}>
                  <Link href={{pathname: `$el.link`}}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={Style.sideBar_button}>
        {currentAccount == "" ? (
          <Button btnName="Connect" handleClick={()=> connectWallet()}/>
        ) : (
          // <a href="/uploadNFT">
            <Button btnName="Mint" handleClick={()=> router.push("/uploadNFT")}/>
          // </a>
        )}
        
        <Button btnName="Connect wallet" handleClick={() => {}}/>
      </div>
    </div>
  )
}

export default SideBar;