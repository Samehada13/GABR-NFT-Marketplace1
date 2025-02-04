import React from 'react';
import Image from 'next/image';

import Style from './NFTTabs.module.css';

const NFTTabs = ({dataTab, icon}) => {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el, i)=>(
        <div className={Style.NFTTabs_box} key={i + 1}>
          <Image src={el}
          alt='Profle Image'
          width={40}
          height={40}
          className={Style.NFTTabs_box_img}/>
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer by $600 by <span>Ruben Balon</span>{icon}
            </span>
            
            <small>October 21 - 5:10 PM</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NFTTabs