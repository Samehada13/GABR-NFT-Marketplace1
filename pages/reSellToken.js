import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Style from '../styles/reSellToken.module.css'
import formStyle from '../accountPage/Form/Form.module.css'
import {Button} from '../components/componentIndex'

import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext'

const resellToken = () => {
    const {createSale} = useContext(NFTMarketplaceContext);
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();
    const {id, tokenURI} = router.query;

    const fetchNFT = async () => {
        if (!tokenURI) return;
        const {data} = await axios.get(tokenURI);

        // setPrice(data.price);
        setImage(data.image);
    }

    useEffect(()=>{
        fetchNFT();
    }, [id]);

    const reSell = async () => {
        try {
            await createSale(tokenURI, price, true, id);
            router.push("/author");
        } catch (error) {
            console.log("Error while resell", error);
        }
        
    }
    
  return (
    <div className={Style.reSellToken}>
        <div className={Style.reSellToken_box}>
            <h1>Sell you NFT</h1>
            <div className={formStyle.form_box_input}>
                <label htmlFor='name'>Price</label>
                <input type='number'
                min={0.5}
                placeholder='Sell your NFT'
                className={formStyle.form_box_input_userName}
                onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className={Style.reSellToken_box_image}>
                {image && (
                    <Image src={image} alt='Sell NFT' width={400} height={400}/>
                )}
            </div>
            <div className={Style.reSellToken_box_btn}>
                <Button btnName="Sell NFT" handleClick={reSell}/>
            </div>
        </div>
    </div>
  )
}

export default resellToken