import React, {useState, useEffect} from 'react';
import {RiUserFollowFill, RiUserUnfollowFill, RiAwardLine} from 'react-icons/ri';   

import Style from './FollowerTab.module.css';
import FollowerTabCard from './FollowerTabCard/FollowerTabCard';
import image from '../../img';
import News from './News/News';

const FollowerTab = ({TopCreators}) => {
    // const CardArray = [
    //     {
    //         background: image.creatorbackground1,
    //         user: image.user1,
    //     },
    //     {
    //         background: image.creatorbackground2,
    //         user: image.user2,
    //     },
    //     {
    //         background: image.creatorbackground3,
    //         user: image.user3,
    //     },
    //     {
    //         background: image.creatorbackground4,
    //         user: image.user4,
    //     },
    //     {
    //         background: image.creatorbackground5,
    //         user: image.user5,
    //     },
    //     {
    //         background: image.creatorbackground6,
    //         user: image.user6,
    //     },
    //     {
    //         background: image.creatorbackground7,
    //         user: image.user7,
    //     },
    //     {
    //         background: image.creatorbackground8,
    //         user: image.user8,
    //     }
    // ];
    const FollowingArray = [
    {
        background: image.creatorbackground6,
        user: image.user6,
        seller: "odosjfod00023dlsmlsmfs"
    },
    {
        background: image.creatorbackground7,
        user: image.user7,
        seller: "odosjfod00023dlsmlsmfs"
    },
    {
        background: image.creatorbackground2,
        user: image.user2,
        seller: "odosjfod00023dlsmlsmfs"
    },
    {
        background: image.creatorbackground3,
        user: image.user3,
        seller: "odosjfod00023dlsmlsmfs"
    },
    {
        background: image.creatorbackground8,
        user: image.user8,
        seller: "odosjfod00023dlsmlsmfs"
    },
    {
        background: image.creatorbackground1,
        user: image.user1,
        seller: "odosjfod00023dlsmlsmfs"
    },
    ];
    const NewsArray = [
    {
        background: image.creatorbackground3,
        user: image.user3,
        seller: "odosjfod00023dlsmlsmfs"
    },
    {
        background: image.creatorbackground7,
        user: image.user7,
        seller: "odosjfod00023dlsmlsmfs"
    },
    {
        background: image.creatorbackground8,
        user: image.user8,
        seller: "odosjfod00023dlsmlsmfs"
    },
    {
        background: image.creatorbackground1,
        user: image.user1,
        seller: "odosjfod00023dlsmlsmfs"
    },
    {
        background: image.creatorbackground6,
        user: image.user6,
        seller: "odosjfod00023dlsmlsmfs"
    },
    {
        background: image.creatorbackground2,
        user: image.user2,
        seller: "odosjfod00023dlsmlsmfs"
    },
    ];

    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const openPopular = () => {
        if(!popular){
            setPopular(true);
            setFollowing(false);
            setNews(false);
        }
    }
    const openFollower = () => {
        if(!following){
            setPopular(false);
            setFollowing(true);
            setNews(false);
        }
    }
    const openNews = () => {
        if(!news){
            setPopular(false);
            setFollowing(false);
            setNews(true);
        }
    }

    // useEffect(() => {
    //     // This function initializes the CryptoHopper widget
    //     const initializeCryptoHopperWidget = () => {
    //       if (typeof window.initializeWidget === 'function') {
    //         window.initializeWidget('500', false, '0', 'f93', 'f93', 'e57300', '777', '495');
    //       }
    //     };
    
    //     // Load the CryptoHopper widget when the 'news' state is true
    //     if (news) {
    //       const script = document.createElement('script');
    //       script.src = 'https://www.cryptohopper.com/widgets/js/script';
    //       script.async = true;
    //       script.onload = initializeCryptoHopperWidget;
    
    //       document.head.appendChild(script);
    
    //       // Clean up the script when the component unmounts or when the 'news' state changes
    //       return () => {
    //         document.head.removeChild(script);
    //       };
    //     }
    //   }, [news]);       
      
  return (
    <div className={Style.followerTab}>
        <div className={Style.followerTab_title}>
            <h2>Top Creator List</h2>
            <div className={Style.followerTab_tabs}>
                <div className={Style.followerTab_tabs_btn}>
                    <button onClick={()=>openPopular()}>
                        <RiUserFollowFill/> Popular
                    </button>
                    <button onClick={()=>openFollower()}>
                        <RiUserFollowFill/> Following
                    </button>
                    <button onClick={()=>openNews()}>
                        <RiAwardLine/> News
                    </button>
                </div>
            </div>
        </div>
        {
            popular && (
                <div className={Style.followerTab_tabs_box}>
                    {TopCreators.map((el, i) => (
                        <FollowerTabCard key={i + 1} i = {i} el = {el}/>
                    ))}
                </div>
            )
        }
        {
            following && (
                <div className={Style.followerTab_tabs_box}>
                    {FollowingArray.map((el, i) => (
                        <FollowerTabCard key={i + 1} i = {i} el = {el}/>
                    ))}
                </div>
            )
        }
        {news && <News />}
        <div className={Style.followerTab_member}>
            <div className={Style.followerTab_member_box}>
                <a href='#'>Show me more</a>
                <a href='#'>Become author</a>
            </div>
        </div>
    </div>
  )
}

export default FollowerTab