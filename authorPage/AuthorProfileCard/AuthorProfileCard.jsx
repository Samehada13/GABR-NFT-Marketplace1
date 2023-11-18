import React, {useState} from 'react';
import Image from 'next/image';
import {MdVerified, MdCloudUpload, MdOutlineReportProblem} from 'react-icons/md';
import {FiCopy} from 'react-icons/fi';
import {TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialYoutube, TiSocialInstagram} from 'react-icons/ti';
import {BsThreeDots} from 'react-icons/bs';

import Style from './AuthorProfileCard.module.css';
import image from '../../img';
import {Button} from '../../components/componentIndex';

const AuthorProfileCard = ({currentAccount}) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }

  const openShare = () => {
    if(!share){
      setShare(true);
      setReport(false);
    }else{
      setShare(false);
    }
  }
  const openReport = () => {
    if(!report){
      setReport(true);
      setShare(false);
    }else{
      setReport(false);
    }
  }

  return (
    <div className={Style.authorProfileCard}>
      <div className={Style.authorProfileCard_box}>
        <div className={Style.authorProfileCard_box_img}>
          <Image src={image.nft_image_1}
          className={Style.authorProfileCard_box_img_img}
          alt='NFT image'
          width={220}
          height={220}/>
        </div>
        <div className={Style.authorProfileCard_box_info}>
          <h2>Ruben Balon{""}{" "}<span><MdVerified/></span>{" "}</h2>
          <div className={Style.authorProfileCard_box_info_address}>
            <input type='text' value={currentAccount} id='myInput'/>
            <FiCopy onClick={()=> copyAddress()} className={Style.authorProfileCard_box_info_address_icon}/>
          </div>
          <p>Bicol Artist # 76 Abstract Paint Abstract Paint Abstract Paint Abstract Paint
            Abstract Paint Abstract Paint Abstract Paint Abstract Paint Abstract Paint
            </p>
            <div className={Style.authorProfileCard_box_info_social}>
              <a href='#'>
                <TiSocialFacebook/>
              </a>
              <a href='#'>
                <TiSocialTwitter/>
              </a>
              <a href='#'>
                <TiSocialYoutube/>
              </a>
              <a href='#'>
                <TiSocialLinkedin/>
              </a>
              <a href='#'>
                <TiSocialInstagram/>
              </a>
            </div>
        </div>
        <div className={Style.authorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={()=>{}}/>
          <MdCloudUpload onClick={()=> openShare()} className={Style.authorProfileCard_box_share_icon}/>
          {share && (
            <div className={Style.authorProfileCard_box_share_upload}>
              <p><span>
                <TiSocialFacebook/>
                </span>{" "}
                {""}
                Facebook
                </p>
                <p><span>
                <TiSocialTwitter/>
                </span>{" "}
                {""}
                Twitter
                </p>
                <p><span>
                <TiSocialInstagram/>
                </span>{" "}
                {""}
                Instagram
                </p>
                <p><span>
                <TiSocialLinkedin/>
                </span>{" "}
                {""}
                LinkedIn
                </p>
                <p><span>
                <TiSocialYoutube/>
                </span>{" "}
                {""}
                Youtube
                </p>
            </div>
          )}
          <BsThreeDots onClick={()=> openReport()} 
          className={Style.authorProfileCard_box_share_icon}/>
          {report && (
            <p className={Style.authorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem/>
              </span>{" "}
              {""}
              Report Abuse
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthorProfileCard