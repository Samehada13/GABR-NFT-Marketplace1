import React, {useState, useEffect, useContext} from 'react';
import {MdOutlineHttp, MdOutlineAttachFile} from 'react-icons/md';
import {FaPercent} from 'react-icons/fa';
import {AiTwotonePropertySafety} from 'react-icons/ai';
import {TiTick} from 'react-icons/ti';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Style from './UploadNFT.module.css';
import formStyle from '../accountPage/Form/Form.module.css';
import images from '../img';
import {Button} from '../components/componentIndex';
import {DropZone} from '../uploadNFT/UploadNFTIndex';

const UploadNFT = ({uploadIPFS, createNFT}) => {
  const [price, setPrice] = useState("");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState("");
  const [image, setImage] = useState(null);

  const router = useRouter();

  const categoryArray = [
    {
      image: images.nftsale5,
      category: "Abstract",
    },
    {
      image: images.nftsale1,
      category: "Sports",
    },
    {
      image: images.nftsale2,
      category: "Digital",
    },
    {
      image: images.nftsale8,
      category: "Mosaic",
    },
    {
      image: images.nftsale7,
      category: "Digital",
    },
  ]

  return (
    <div className={Style.upload}>
      <DropZone
      title="JPG, PNG, WEBN, MAX 100 MB"
      heading="Drag or Drop filr"
      subHeading="or Browse media on your device"
      itemName={name}
      website={website}
      description={description}
      royalties={royalties}
      fileSize={fileSize}
      category={category}
      properties={properties}
      setImage={setImage}
      uploadIPFS={uploadIPFS}
      />

      <div className={Style.upload_box}>
        <div className={formStyle.form_box_input}>
          <label htmlFor='nft'>Name</label>
          <input type='text'
          placeholder='Name your NFT'
          className={formStyle.form_box_input_userName}
          onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className={formStyle.form_box_input}>
          <label htmlFor='website'>Website</label>
          <div className={formStyle.form_box_input_box}>
            <div className={formStyle.form_box_input_box_icon}>
              <MdOutlineHttp/>
            </div>
            <input type='text' placeholder='website'
            onChange={(e)=> setWebsite(e.target.value)}/>
          </div>
        </div>
        <p className={formStyle.upload_box_input_para}>
          GABR will include a link to this URL on this item's detail page, 
          so that user can click learn more about it. Your are welcome to link your own webpage
          with more details.
        </p>
        <div className={formStyle.form_box_input}>
          <label htmlFor='description'>Description</label>
          <textarea name='' id='' cols={30} rows={6} 
          placeholder='Write something about yourself' 
          onChange={(e)=> setDescription(e.target.value)}></textarea>
          <p>
            The description will be included on the item's detail page 
            underneath its image. Markdown syntax is supported.
          </p>
        </div>
        <div className={formStyle.form_box_input}>
          <label htmlFor='name'>Choose collection</label>
          <p className={Style.upload_box_input_para}>
            Choose one existing collection or create new one
          </p>
          <div className={Style.upload_box_slider_div}>
            {categoryArray.map((el, i)=>(
              <div className={`${Style.upload_box_slider} ${active == i+1 ? 
                Style.active : ""}`}
                key={i + 1} onClick={()=> (setActive(i + 1), setCategory(el.category))}>
                  <div className={Style.upload_box_slider_box}>
                    <div className={Style.upload_box_slider_box_img}>
                      <Image src={el.image}
                      alt='Background Image'
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}/>
                    </div>
                    <div className={Style.upload_box_slider_box_img_icon}>
                      <TiTick/>
                    </div>
                  </div>
                  <p>Crypto Legend {el.category}</p>
                </div>
            ))}
          </div>
        </div>
        <div className={formStyle.form_box_input_social}>
            <div className={formStyle.form_box_input}>
              <label htmlFor='royalties'>Royalties</label>
              <div className={formStyle.form_box_input_box}>
                <div className={formStyle.form_box_input_box_icon}>
                  <FaPercent/>
                </div>
                <input type='text' placeholder='20%' 
                onChange={(e)=> setRoyalties(e.target.value)}/>
              </div>
            </div>
            <div className={formStyle.form_box_input}>
              <label htmlFor='size'>Size</label>
              <div className={formStyle.form_box_input_box}>
                <div className={formStyle.form_box_input_box_icon}>
                  <MdOutlineAttachFile/>
                </div>
                <input type='text' placeholder='165 MB' 
                onChange={(e)=> setFileSize(e.target.value)}/>
              </div>
            </div>
            <div className={formStyle.form_box_input}>
              <label htmlFor='properties'>Properties</label>
              <div className={formStyle.form_box_input_box}>
                <div className={formStyle.form_box_input_box_icon}>
                  <AiTwotonePropertySafety/>
                </div>
                <input type='text' placeholder='Properties' 
                onChange={(e)=> setProperties(e.target.value)}/>
              </div>
            </div>
            <div className={formStyle.form_box_input}>
              <label htmlFor='price'>Price</label>
              <div className={formStyle.form_box_input_box}>
                <div className={formStyle.form_box_input_box_icon}>
                  <AiTwotonePropertySafety/>
                </div>
                <input type='text' placeholder='Price' 
                onChange={(e)=> setPrice(e.target.value)}/>
              </div>
            </div>
        </div>
        <div className={Style.upload_box_btn}>
          <Button 
          btnName="Create" 
          handleClick={ async () => 
            createNFT(
              name, 
              price, 
              image, 
              description, 
              router, 
              // website, 
              // royalties, 
              // fileSize, 
              // category,
              // properties
              )}
          classStyle={Style.upload_box_btn_style}/>
          <Button 
          btnName="Preview" 
          handleClick={()=> {}}
          classStyle={Style.upload_box_btn_style}/>
        </div>
      </div>
    </div>
  )
}

export default UploadNFT