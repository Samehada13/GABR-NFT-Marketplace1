import React, {useState, useEffect, useCallback} from 'react';
import Image from 'next/image';
import {AiFillFire, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {MdVerified, MdTimer} from 'react-icons/md';
import {TbArrowBigLeftLine, TbArrowBigRightLine} from 'react-icons/tb';

import Style from './BigNFTSlider.module.css';
import image from '../../img';
import Button from '../Button/Button';

const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1);

    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Ruben",
            collection: "Mosaic Art",
            price: "0.01 eth",
            like: 302,
            image: image.user1,
            nftImage: image.nftsale1,
            time:{
                days: 17,
                hours: 9,
                minutes: 48,
                seconds: 49
            }
        },
        {
            title: "Ruben NFT",
            id: 2,
            name: "Ruben",
            collection: "Ruben Collection",
            price: "1 eth",
            like: 3452,
            image: image.user2,
            nftImage: image.nftsale7,
            time:{
                days: 127,
                hours: 1,
                minutes: 18,
                seconds: 4
            }
        },
        {
            title: "Jon NFT",
            id: 3,
            name: "Jon",
            collection: "Jon Line",
            price: "0.09 eth",
            like: 1522,
            image: image.user3,
            nftImage: image.nftsale3,
            time:{
                days: 3,
                hours: 1,
                minutes: 59,
                seconds: 3
            }
        },
        {
            title: "SevenArt",
            id: 4,
            name: "Seven",
            collection: "SevenArt",
            price: "0.25 eth",
            like: 302,
            image: image.user4,
            nftImage: image.nftsale4,
            time:{
                days: 52,
                hours: 12,
                minutes: 28,
                seconds: 33
            }
        }
    ];

const inc = useCallback(()=>{
    if(idNumber + 1 < sliderData.length){
        setIdNumber(idNumber + 1);
    }
}, [idNumber, sliderData.length]);

const dec = useCallback(()=>{
    if(idNumber > 0){
        setIdNumber(idNumber - 1);
    }
}, [idNumber]);

// useEffect(() => {
//     inc();
// }, []);

  return (
    <div className={Style.bigNFTSlider}>
        <div className={Style.bigNFTSlider_box}>
            <div className={Style.bigNFTSlider_box_left}>
                <h2>{sliderData[idNumber].title}</h2>
                <div className={Style.bigNFTSlider_box_left_creator}>
                    <div className={Style.bigNFTSlider_box_left_creator_profile}>
                        <Image className={Style.bigNFTSlider_box_left_creator_profile_img} src={sliderData[idNumber].image} alt="Profile image" width={50} height={50}/>
                        <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                            <p>Creator</p>
                            <h4>{sliderData[idNumber].name}{" "}
                                <span>
                                    <MdVerified/>
                                </span>
                            </h4>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_creator_collection}>
                        <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon}/>
                        <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                            <p>Collection</p>
                            <h4>{sliderData[idNumber].collection}</h4>
                        </div>
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_left_bidding}>
                    <div className={Style.bigNFTSlider_box_left_bidding_box}>
                        <small>Current Bid</small>
                        <p>{sliderData[idNumber].price}<span> $9,102</span></p>
                    </div>
                    <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                        <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon}/>
                        <span>Auction ending in</span>
                    </p>
                    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.days}</p>
                            <span>Days</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.hours}</p>
                            <span>Hours</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.minutes}</p>
                            <span>Minutes</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.seconds}</p>
                            <span>Seconds</span>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_button}>
                        <Button btnName="Place" handleClick={()=>{}}/>
                        <Button btnName="View" handleClick={()=>{}}/>
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                    <TbArrowBigLeftLine className={Style.bigNFTSlider_box_left_sliderBtn_icon} onClick={()=>dec()}/>
                    <TbArrowBigRightLine className={Style.bigNFTSlider_box_left_sliderBtn_icon} onClick={()=>inc()}/>
                </div>
            </div>  
            <div className={Style.bigNFTSlider_box_right}>
                <div className={Style.bigNFTSlider_box_right_box}>
                    <Image src={sliderData[idNumber].nftImage} alt="NFT Image" className={Style.bigNFTSlider_box_right_box_img}/>
                    <div className={Style.bigNFTSlider_box_right_box_like}>
                        <AiFillHeart/>
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigNFTSlider