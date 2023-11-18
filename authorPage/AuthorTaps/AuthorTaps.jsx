import React, {useState} from 'react';
import Image from 'next/image';
import {TiArrowSortedDown, TiArrowSortedUp, TiTick} from 'react-icons/ti';

import Style from './AuthorTaps.module.css';

const AuthorTaps = ({setCollectibles, setCreated, setLike, setFollower, setFollowing}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created by Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed"
  ]

  const openDropDownList = () => {
    if(!openList){
      setOpenList(true);
    }else{
      setOpenList(false);
    }
  }

  const openTab = (e)=>{
    const btnText = e.target.innerText;
    console.log(btnText);
    if(btnText == "Listed NFTs"){
      setCollectibles(true);
      setCreated(false);
      setFollower(false);
      setLike(false);
      setFollowing(false);
      setActiveBtn(1);
    }else if(btnText == "Owned NFTs"){
      setCollectibles(false);
      setCreated(true);
      setFollower(false);
      setLike(false);
      setFollowing(false);
      setActiveBtn(2);
    }else if(btnText == "Liked"){
      setCollectibles(false);
      setCreated(false);
      setFollower(false);
      setLike(true);
      setFollowing(false);
      setActiveBtn(3);
    }else if(btnText == "Following"){
      setCollectibles(false);
      setCreated(false);
      setFollower(false);
      setLike(false);
      setFollowing(true);
      setActiveBtn(4);
    }else if(btnText == "Followers"){
      setCollectibles(false);
      setCreated(false);
      setFollower(true);
      setLike(false);
      setFollowing(false);
      setActiveBtn(5);
    }
  }

  return (
    <div className={Style.authorTaps}>
      <div className={Style.authorTaps_box}>
        <div className={Style.authorTaps_box_left}>
          <div className={Style.authorTaps_box_left_btn}>
            <button className={`${activeBtn == 1 ? Style.active : ""}`} 
            onClick={(e)=> openTab(e)}>Listed NFTs{""}</button>
            <button className={`${activeBtn == 2 ? Style.active : ""}`} 
            onClick={(e)=> openTab(e)}>Owned NFTs{""}</button>
            <button className={`${activeBtn == 3 ? Style.active : ""}`} 
            onClick={(e)=> openTab(e)}>Liked{""}</button>
            <button className={`${activeBtn == 4 ? Style.active : ""}`} 
            onClick={(e)=> openTab(e)}>Following{""}</button>
            <button className={`${activeBtn == 5 ? Style.active : ""}`} 
            onClick={(e)=> openTab(e)}>Followers{""}</button>
          </div>
        </div>
        <div className={Style.authorTaps_box_right}>
          <div className={Style.authorTaps_box_right_para} onClick={()=> openDropDownList()}>
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
          </div>
          {openList && (
            <div className={Style.authorTaps_box_right_list}>
              {listArray.map((el, i)=>(
                <div key={i + 1} onClick={()=> setSelectedMenu(el)} 
                className={Style.authorTaps_box_right_list_item}>
                  <p>{el}</p>
                  <span>{selectedMenu == el && <TiTick/>}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthorTaps