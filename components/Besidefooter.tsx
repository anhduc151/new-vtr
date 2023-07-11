import React, { useState } from "react";
import line2 from "../public/images/Line2.png";
import Image from "next/image";
import besidelogo from "../public/images/logo1.png";
import Link from "next/link";
import emailjs from 'emailjs-com';
import validator from 'validator';
import { notification } from 'antd';



export interface BesidefooterProps { }


export default function Besidefooter(props: BesidefooterProps) {

  const [email, setEmail] = useState("")

  const openNotification = (message: string) => {
    notification.open({
      message: message,
      style: {
        fontSize: '16px',
        top: '50px',
      },
    });
  };


  const handleSendEmailer = (e: any) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      openNotification('Email invalidate!!')
    } else {
      // Gửi email bằng emailjs-com
      emailjs.send('service_e893xdc', 'template_973yes2', {
        to_email: email,
        to_name: "user",
        title: "Support of Victory",
        team: "Victory Support Team",
        message: "You can get more information in contact section of contact page or recruit page. Please direct there!",
        link: "https://gametamin.site/contact",
      }, 'gvI3GwRJ28mvTVd-B')
        .then(() => {
          openNotification('Successfully! Please check your email!')
          setEmail('')
        })
        .catch(() => {
          openNotification('Error sending email!')
          setEmail('')
        });
    }
  };
  return (
    <div className="besidefooter">
      <Image src={line2} alt="line" className="besidefooter_line_imgs" />
      <div className="beside_form">
        <div className="beside_form1">
          <Link href='/'>
            <Image src={besidelogo} alt="logo" />
          </Link>
          <div className="besideform_p">
            <p className="besideform_p_p">
              Victory is a Singapore based company <br />– a game maker studio
              specializing in designing and producing mobile games.
            </p>
          </div>
        </div>

        <div className="beside_form2">
          <h4 className="beside_form2_h4">COMPANY</h4>
          <Link href="/contact">
            <p className="beside_form2_p">Contact</p>
          </Link>
          <Link href="/terms">
            <p className="beside_form2_p">Terms</p>
          </Link>
          <Link href="/privacy">
            <p className="beside_form2_p">Privacy</p>
          </Link>
        </div>

        <div className="beside_form3">
          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => { setEmail(e.target.value) }}
            className='beside_form3_input'
          />
          <button onClick={(e) => handleSendEmailer(e)} className="beside_form3_buttons outgames_buttons" >Contact Support</button>
        </div>
      </div>
    </div>
  )
}
