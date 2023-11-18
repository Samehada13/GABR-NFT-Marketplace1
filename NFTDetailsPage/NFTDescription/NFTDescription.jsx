import React, {useState, useContext, useEffect} from 'react';
import Image from 'next/image';
import {MdVerified, MdCloudUpload, MdTimer, 
  MdReportProblem, MdOutlineDeleteSweep} from 'react-icons/md';
import { useRouter } from 'next/router';
import {BsThreeDots} from 'react-icons/bs';
import {FaWallet, FaPercentage} from 'react-icons/fa';
import {TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, 
  TiSocialInstagram,TiSocialYoutube} from 'react-icons/ti';
import {BiTransferAlt, BiDollar} from 'react-icons/bi';
import Link from 'next/link';

import Style from './NFTDescription.module.css';
import image from '../../img';
import {NFTTabs} from '../NFTDetailsPageIndex';
import {Button} from '../../components/componentIndex';

import { NFTMarketplaceContext } from '../../context/NFTMarketplaceContext';

const NFTDescription = ({nft}) => {

  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provenance, setProvenance] = useState(false);
  const [owner, setOwner] = useState(false);

  const router = useRouter();

  const historyArray = [
    image.user1,
    image.user2,
    image.user3,
    image.user4,
    image.user5,
  ]

  const provenanceArray = [
    image.user5,
    image.user8,
    image.user3,
    image.user10,
    image.user7,
  ]

  const ownerArray = [
    image.user9,
    image.user7,
    image.user3,
    image.user5,
    image.user1,
  ]

  const openSocial = ()=>{
    if(!social){
      setSocial(true);
      setNFTMenu(false);
    }else{
      setSocial(false);
    }
  }

  const openNFTMenu = ()=>{
    if(!NFTMenu){
      setNFTMenu(true);
      setSocial(false);
    }else{
      setNFTMenu(false);
    }
  }

  const openTabs =(e)=>{
    const btnText = e.target.innerText;

    if(btnText == "Bid History"){
      setHistory(true);
      setProvenance(false);
      setOwner(false);
    }else if(btnText == "Provenance"){
      setHistory(false);
      setProvenance(true);
      setOwner(false);
    }
  }

  const openOwner=()=>{
    if(!owner){
      setOwner(true);
      setHistory(false);
      setProvenance(false);
    }else{
      setOwner(false);
      setHistory(true);
    }
  }

  const {buyNFT, currentAccount} = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Words</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload className={Style.NFTDescription_box_share_box_icon}
            onClick={()=> openSocial()}/>
            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href='#'>
                  <TiSocialFacebook/> Facebook
                </a>
                <a href='#'>
                  <TiSocialTwitter/> Twitter
                </a>
                <a href='#'>
                  <TiSocialInstagram/> Instagram
                </a>
                <a href='#'>
                  <TiSocialLinkedin/> LinkedIn
                </a>
                <a href='#'>
                  <TiSocialYoutube/> Youtube
                </a>
              </div>
            )}
            <BsThreeDots className={Style.NFTDescription_box_share_box_icon} 
            onClick={()=> openNFTMenu()}/>
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href='#'>
                  <BiDollar/> Change price
                </a>
                <a href='#'>
                  <BiTransferAlt/> Transfer
                </a>
                <a href='#'>
                  <MdReportProblem/> Report Abuse
                </a>
                <a href='#'>
                  <MdOutlineDeleteSweep/> Delete item
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={Style.NFTDescription_box_profile}>
          <h1>{nft.name} #{nft.tokenId}</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image src={image.user8} 
              alt='Profile'
              width={40}
              height={40}
              className={Style.NFTDescription_box_profile_box_left_img}/>
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small><br/>
                <Link href={{pathname: "/author", query: {address: nft.seller}}}>
                <span>
                  Jon Angel <MdVerified/>
                </span>
                </Link>
              </div>
            </div>
            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image src={image.creatorbackground1} 
                alt='Profile'
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}/>
              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Collection</small><br/>
                <span>
                  Abstract <MdVerified/>
                </span>
              </div>
            </div>
          </div>
        
        <div className={Style.NFTDescription_box_profile_biding}>
          <p>
            <MdTimer/> <span>Auction ending in:</span>
          </p>
          <div className={Style.NFTDescription_box_profile_biding_box_timer}>
            <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
              <p>2</p>
              <span>Days</span>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
              <p>12</p>
              <span>Hours</span>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
              <p>56</p>
              <span>Mins</span>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
              <p>12</p>
              <span>Secs</span>
            </div>
          </div>
          <div className={Style.NFTDescription_box_profile_biding_box_price}>
            <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
              <small>Current Bid</small>
              <p>
                {nft.price} ETH <span>( = $3,000.2)</span>
              </p>
            </div>
            <span>[76 in stock]</span>
          </div>
          <div className={Style.NFTDescription_box_profile_biding_box_button}>

            {currentAccount == nft.seller.toLowerCase() ? (
              <p>
                You can't buy your own NFT
              </p>
            ) : currentAccount == nft.owner.toLowerCase() ? (
              <Button 
              icon=<FaWallet />
              btnName="List on Marketplace"
              handleClick={()=> router.push(`/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}
              classStyle={Style.button}/>
            ) : (
              <Button 
              icon=<FaWallet />
              btnName="Buy NFT"
              handleClick={()=> buyNFT(nft)}
              classStyle={Style.button}/>
            )}

              <Button 
              icon=<FaPercentage />
              btnName="Make offer"
              handleClick={()=> {}}
              classStyle={Style.button}/>
            
          </div>
          <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
            <button onClick={(e)=> openTabs(e)}>Bid History</button>
            <button onClick={(e)=> openTabs(e)}>Provenance</button>
            <button onClick={(e)=> openOwner()}>Owner</button>
          </div>
          {history && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab= {historyArray}/>
            </div>
          )}
          {provenance && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab= {provenanceArray}/>
            </div>
          )}
          {owner && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab= {ownerArray} icon=<MdVerified />/>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  )
}

export default NFTDescription