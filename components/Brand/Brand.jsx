import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Style from './Brand.module.css';
import image from '../../img';
import {Button} from '../../components/componentIndex';

const Brand = () => {
    const router = useRouter();

  return (
    <div className={Style.brand}>
        <div className={Style.brand_box}>
            <div className={Style.brand_box_left}>
                <Image src={image.logo} alt="Logo" width={100} height={100}/>
                <h1>Earn free crypto</h1>
                <p>A creative website that lead and inspire.</p>
                <div className={Style.brand_box_left_btn}>
                    <Button btnName="Mint" handleClick={()=> router.push('/uploadNFT')}/>
                    <Button btnName="Discover" handleClick={()=>router.push('/searchPage')}/>
                </div>
            </div>
            <div className={Style.brand_box_right}>
                <Image src={image.earn} alt="Logo" width={800} height={600}/>
            </div>
        </div>
    </div>
  )
}

export default Brand