import React, {useState, useEffect, useContext} from 'react';
import Image from 'next/image';
import {BsImage} from 'react-icons/bs';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {MdVerified, MdTimer} from 'react-icons/md';
import Link from 'next/link';

import Style from './NFTCardTwo.module.css';
import {LikeProfile} from '../../components/componentIndex';


const NFTCardTwo = ({NFTData}) => {
    const [like, setLike] = useState(false);
    const [likeInc, setLikeInc] = useState(21);

    // console.log('NFTData:', NFTData);
    // if (NFTData.length === 0) {
    //     return <div>Loading...</div>;
    //   }

    const likeNFT = ()=>{
        if(!like){
            setLike(true);
            setLikeInc(23);
        }else{
            setLike(false);
            setLikeInc(23 + 1);
        }
    }
  return (
    <div className={Style.nftCardTwo}>
        {NFTData.map((el, i)=>(
            <Link href={{pathname: "/NFTDetails", query: el}} key={i + 1}>
                <div className={Style.nftCardTwo_box} key={i + 1}>
                    <div className={Style.nftCardTwo_box_like}>
                        <div className={Style.nftCardTwo_box_like_box}>
                            <div className={Style.nftCardTwo_box_like_box_box}>
                                <BsImage className={Style.nftCardTwo_box_like_box_box_icon}/>
                                <p onClick={()=> likeNFT()}>
                                    {like ? <AiOutlineHeart/> : <AiFillHeart/>}{""}
                                    <span>{likeInc + 1}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.nftCardTwo_box_img}>
                        <Image className={Style.nftCardTwo_box_img_img} src={el.image} 
                        alt='NFT' width={500} height={500} objectFit='cover' 
                        />
                    </div>
                    <div className={Style.nftCardTwo_box_info}>
                        <div className={Style.nftCardTwo_box_info_left}>
                            <LikeProfile/>
                            <p>{el.name}</p>
                        </div>
                        <small>4{i + 1}</small>
                    </div>
                    <div className={Style.nftCardTwo_box_price}>
                        <div className={Style.nftCardTwo_box_price_box}>
                            <small>Current Bid</small>
                            <p>{el.price} ETH</p>
                        </div>
                        <p className={Style.nftCardTwo_box_price_stock}>
                            <MdTimer/><span>{i + 1} hours left</span>
                        </p>
                    </div>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default NFTCardTwo