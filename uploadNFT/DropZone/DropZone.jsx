import React, {useState, useCallback, useContext} from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

import Style from './DropZone.module.css'
import images from '../../img'

const DropZone = ({title, heading, subHeading, name, 
  website, description, royalties, fileSize, category, 
  properties, uploadIPFS, setImage}) => {
    const [fileUrl, setFileUrl] = useState(null)

    const onDrop = useCallback(async (acceptedFile)=>{
      const url = await uploadIPFS(acceptedFile[0]);
      setFileUrl(url);
      setImage(url);
      console.log(url);
    })

    const {getRootProps, getInputProps}= useDropzone({
      onDrop,
      accept: "image/*",
      maxSize: 5000000
    })
  return (
    <div className={Style.dropZone}>
      <div className={Style.dropZone_box} {...getRootProps()}>
        <input {...getInputProps()}/>
        <div className={Style.dropZone_box_input}>
          <p>{title}</p>
          <div className={Style.dropZone_box_input_img}>
            <Image src={images.upload} alt='Upload' width={100} height={100} objectFit='contain'
            className={Style.dropZone_box_input_img_img}/>
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>
      {fileUrl && (
        <aside className={Style.dropZone_box_aside}>
          <div className={Style.dropZone_box_aside_box}>
            <Image src={fileUrl} 
            alt='NFT image'
            width={200}
            height={200}/>
            <div className={Style.dropZone_box_aside_box_preview}>
              <div className={Style.dropZone_box_aside_box_preview_one}>
                <p><samp>NFT Name:</samp>{name || ""}</p>
                <p><samp>Website:</samp>{website || ""}</p>
              </div>
              <div className={Style.dropZone_box_aside_box_preview_two}>
                <p>
                  <span>Description: </span>
                  {description || ""}
                </p>
              </div>
              <div className={Style.dropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties:</span>
                  {royalties || ""}
                </p>
                <p>
                  <span>File Size:</span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties:</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category:</span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  )
}

export default DropZone