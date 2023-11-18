import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {TiSocialFacebook, 
    TiSocialTwitter, 
    TiSocialInstagram, 
    TiSocialYoutube, 
    TiSocialLinkedin} from 'react-icons/ti'

import Style from '../styles/contactUs.module.css'
import formStyle from '../accountPage/Form/Form.module.css'
import {Button} from '../components/componentIndex'

const contactUs = () => {
  return (
    <div className={Style.contactUs}>
        <div className={Style.contactUs_box}>
            <h1>Contact</h1>
            <div className={Style.contactUs_box_box}>
                <div className={Style.contactUs_box_box_left}>
                    <div className={Style.contactUs_box_box_left_item}>
                        <h3>ADDRESS</h3>
                        <p>This is address This is address This is address This is address 
                        This is address This is address 
                        </p>
                    </div>
                    <div className={Style.contactUs_box_box_left_item}>
                        <h3>Email</h3>
                        <p>RubenB@gmail.com</p>
                    </div>
                    <div className={Style.contactUs_box_box_left_item}>
                        <h3>Phone Number</h3>
                        <p>+639999999999</p>
                    </div>
                    <div className={Style.contactUs_box_box_left_item}>
                        <h3>Socials</h3>
                        <a href="#">
                            <TiSocialFacebook/>
                        </a>
                        <a href="#">
                            <TiSocialTwitter/>
                        </a>
                        <a href="#">
                            <TiSocialInstagram/>
                        </a>
                        <a href="#">
                            <TiSocialLinkedin/>
                        </a>
                        <a href="#">
                            <TiSocialYoutube/>
                        </a>
                    </div>
                </div>
                <div className={Style.contactUs_box_box_right}>
                    <form>
                        <div className={formStyle.form_box_input}>
                            <label htmlFor='name'>Full Name</label>
                            <input type='text'
                            placeholder='Ruben Balon'
                            className={formStyle.form_box_input_userName}/>
                        </div>
                        <div className={formStyle.form_box_input}>
                            <label htmlFor='email'>Email</label>
                            <div className={formStyle.form_box_input_box}>
                                <div className={formStyle.form_box_input_box_icon}>
                                    <HiOutlineMail />
                                </div>
                            <input type='text' placeholder='Email*'/>
                            </div>
                        </div>
                        <div className={formStyle.form_box_input}>
                            <label htmlFor='description'>Message</label>
                            <textarea name='' id='' cols={30} rows={6} 
                            placeholder='Write something about yourself'></textarea>
                        </div>
                        <Button btnName="Send Message"
                        handleClick={()=> {}}
                        classStyle={Style.button}/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contactUs