import React from 'react';
import Image from 'next/image';

import Style from './Video.module.css';
import image from '../../img';

const Video = () => {
  return (
    <div className={Style.video}>
        <div className={Style.video_box}>
            <h1>
                <span>🎬</span>The Videos
            </h1>
            <p>
                Check out our hottest video Check out our hottest video Check out our hottest video
                Check out our hottest video Check out our hottest video Check out our hottest video
            </p>
            <div className={Style.video_box_frame}>
                <div className={Style.video_box_frame_left}>
                    <Image className={Style.video_box_frame_left_img} src={image.nftvideo} alt="Video Image" height={1080} width={1920} objectFit="Cover"/>
                </div>
                <div className={Style.video_box_frame_right}></div>
            </div>
        </div>
    </div>
  )
}

export default Video