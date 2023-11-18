import React, {useState, useEffect, useContext} from 'react';

import Style from '../styles/author.module.css';
import {Banner, NFTCardTwo} from '../collectionPage/collectionIndex';
import {Brand, Title} from '../components/componentIndex';
import image from '../img';
import {AuthorProfileCard, AuthorTaps, AuthorNFTCardBox} from '../authorPage/authorIndex';
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard';
import { useRouter } from 'next/router';

import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const author = () => {
  const followerArray = [  
    {
        background: image.creatorbackground1,
        user: image.user3,
        seller: "0udkdnkdlwq46qw6dfsdf4sd6f6646f"
    },
    {
        background: image.creatorbackground2,
        user: image.user4,
        seller: "0udkdnkdlwq46qw6dfsdf4sd6f6646f"
    },
    {
        background: image.creatorbackground3,
        user: image.user1,
        seller: "0udkdnkdlwq46qw6dfsdf4sd6f6646f"
    },
    {
        background: image.creatorbackground4,
        user: image.user10,
        seller: "0udkdnkdlwq46qw6dfsdf4sd6f6646f"
    },
    {
        background: image.creatorbackground5,
        user: image.user7,
        seller: "0udkdnkdlwq46qw6dfsdf4sd6f6646f"
    },
    {
        background: image.creatorbackground7,
        user: image.user2,
        seller: "0udkdnkdlwq46qw6dfsdf4sd6f6646f"
    },
    {
        background: image.creatorbackground8,
        user: image.user3,
        seller: "0udkdnkdlwq46qw6dfsdf4sd6f6646f"
    },

    ]


    const [collectibles, setCollectibles] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);

    const {fetchMyNFTsOrListedNFTs, currentAccount} = useContext(NFTMarketplaceContext);

    const router = useRouter();
    const { address } = router.query;

    const [nfts, setNfts] = useState([]);
    const [myNFTs, setMyNFTs] = useState([]);
  
    useEffect(()=> {
      fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
        setNfts(items);
      })
    }, []);

    useEffect(()=> {
      fetchMyNFTsOrListedNFTs("fetchMyNfts").then((items) => {
        setMyNFTs(items);
      })
    }, []);

  return (
    <div className={Style.author}>
        <Banner bannerImage={image.creatorbackground3}/>
        <AuthorProfileCard currentAccount={currentAccount}/>
        <AuthorTaps setCollectibles={setCollectibles}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}/>
        <AuthorNFTCardBox 
        collectibles={collectibles} 
        created={created} 
        like={like} 
        follower={follower} 
        following={following}
        nfts={nfts}
        myNFTs={myNFTs}
        />
        <Title heading="Popular creators" 
        paragraph="Enjoy NFT Enjoy NFT Enjoy NFT Enjoy NFT Enjoy NFT "/>
        <div className={Style.author_box}>
          {followerArray.map((el, i)=> (
            <FollowerTabCard i={i} el={el}/>
          ))}
        </div>
        <Brand/>
    </div>
  )
}

export default author