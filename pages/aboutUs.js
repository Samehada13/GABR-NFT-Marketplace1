import React from 'react'
import Image from 'next/image'

import Style from '../styles/aboutUs.module.css'
import {Brand} from '../components/componentIndex'
import image from '../img'

const aboutUs = () => {
    const founderArray = [
        {name: "Ruben Balon", position: "Founder", images: image.user2},
        {name: "Ruben Balon", position: "Co-Founder", images: image.user4},
        {name: "Ruben Balon", position: "Chairman", images: image.user5},
        {name: "Ruben Balon", position: "Programmer", images: image.user7},
    ]

    const factsArray = [
        {title: "10 Million", info: "This is Info This is Info This is Info "},
        {title: "100,000", info: "This is Info This is Info This is Info "},
        {title: "100", info: "This is Info This is Info This is Info "},
    ]
  return (
    <div className={Style.aboutUs}>
        <div className={Style.aboutUs_box}>
            <div className={Style.aboutUs_box_hero}>
                <div className={Style.aboutUs_box_hero_left}>
                    <h1>About Us</h1>
                    <p>About us About us About us About us About us About us About us About us 
                    About us About us About us About us About us About us About us About us 
                    About us About us About us 
                    </p>
                </div>
                <div className={Style.aboutUs_box_hero_right}>
                    <Image src={image.hero}/>
                </div>
            </div>
            <div className={Style.aboutUs_box_title}>
                <h2>Founder</h2>
                <p>
                    This founder This founder This founder This founder This founder 
                    This founder This founder This founder This founder This founder This founder 
                </p>
            </div>
            <div className={Style.aboutUs_box_founder}>
                <div className={Style.aboutUs_box_founder_box}>
                    {founderArray.map((el, i)=>(
                        <div className={Style.aboutUs_box_founder_box_img}>
                            <Image src={el.images}
                            alt={el.name}
                            width={500}
                            height={500}
                            className={Style.aboutUs_box_founder_box_img_img}/>
                            <h3>{el.name}</h3>
                            <p>{el.position}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={Style.aboutUs_box_title}>
                <h2>Fast Fact</h2>
                <p>
                    This founder This founder This founder This founder This founder 
                    This founder This founder This founder This founder This founder This founder 
                </p>
            </div>
            <div className={Style.aboutUs_box_facts}>
                <div className={Style.aboutUs_box_facts_box}>
                    {factsArray.map((el, i)=> (
                        <div className={Style.aboutUs_box_facts_box_info}>
                            <h3>{el.title}</h3>
                            <p>{el.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Brand/>
    </div>
  )
}

export default aboutUs