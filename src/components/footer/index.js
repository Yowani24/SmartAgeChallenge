import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

import mastercard from './images/Mastercard.png'
import visa from './images/Visa.png'
import discover from './images/Discover.png'
import paypal from './images/PayPal.png'
import americanexpress from './images/AmericanExpress.png'
import gia from './images/Gia.png'
import smartAgeLogo from './images/Group.png'

export default function Footer() {
    return (
        <Footer_sec>
            <div className="footer-top-content">
                <nav>
                    <ul>
                        <li><a>COLLECTIONS</a></li>
                        <li><a>CATEGORIES</a></li>
                        <li><a>STORES</a></li>
                        <li><a>OUR STORY</a></li>
                    </ul>
                </nav>

                <div className="Footer-social-media">
                    <span>
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaTwitter/>
                    </span>
                    <button>CONTACT US</button>
                </div>
            </div>

            <div className="footer-middle-content">
                <p>Singn up for our newsletter</p>
                <div className="footer-input-box">
                    <input type="text" placeholder=" Enter your email"/>
                    <button>SUBSCRIBE</button>
                </div>
                <span>
                    <p>PREIVACY POLICY</p>
                    <p>RETURNS AND EXCHANGES</p>
                    <p>TRACK ORDER</p>
                </span>
            </div>
           
            <div className="Footer-bottom-content">
                <div className="Footer-bottom-content-left-side" >
                    <div className="footer-contact-us">
                        <h3>CONTACT US</h3>
                        <p>owner@exemple.com</p>
                    </div>

                    <div className="support">
                        <h3>SUPPORT</h3>
                        <span>
                            <img src={gia} alt=""/>
                            <img src={gia} alt=""/>
                            <img src={gia} alt=""/>
                        </span>
                    </div>
                </div>
                <div className="payment-methods">
                    <h3>SUPPORT</h3>
                    <span>
                        <img src={mastercard} alt=""/>
                        <img src={visa} alt=""/>
                        <img src={discover} alt=""/>
                        <img src={paypal} alt=""/>
                        <img src={americanexpress} alt=""/>
                    </span>
                </div>
            </div>
            <div className="bottom-footer-box">
                <div className="bottom-footer-box-container">
                    <p>Smart Age Solutions, &copy; 2019 | MADE WITH LOVE BY SMART AGE SOLUTIONS</p>
                    <img src={smartAgeLogo} alt=""/>
                </div>
            </div>
        </Footer_sec>
    )
}
const Footer_sec = styled.div`
    background: #333333;
    .footer-top-content{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width: 80%;
        margin:auto;
        height: 150px;
    }
    .footer-top-content ul{
        display:flex;
        justify-content:space-between;
        padding:0;
        width: 600px;

    }
    .footer-top-content li{
        list-style:none;
    }
    .footer-top-content a{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #FFFFFF;

    }
    .Footer-social-media{
        display:flex;
        align-items:center;
    }
    .Footer-social-media span{
        display:flex;
        justify-content:space-between;
        width:150px;
        margin-right: 50px;
        font-size: 25px;
        color:#FFFFFF;
    }
    .Footer-social-media button{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.2em;
        color: #FFFFFF;


        background:none;
        width: 278px;
        height: 45px;
        border: 1px solid #767676;
        box-sizing: border-box;
        display:flex;
        justify-content:center;

        &:hover{
            color:#D5A368;
        }

    }

    .footer-middle-content{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:80%;
        height:250px;
        margin:auto;
        border-top: 1px solid #5A5A5A;
        border-bottom: 1px solid #5A5A5A;
    }
    .footer-middle-content p{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;

        color: #D5A368;

    }
    .footer-middle-content span{
        display:flex;
        justify-content:space-between;
        width:600px;

    }
    .footer-middle-content span{
        margin-top:40px;
        p{
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 18px;
            letter-spacing: 0.2em;
            text-transform: uppercase;

            color: #999999;
        }
        p:after:not(:nth-child(3)){
            content:' /'
        }
    }

    .footer-input-box{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width: 484px;
        left: 658px;
        top: 9762px;
        padding:5px;
        margin-top:30px;

        border: 1px solid #D5A368;
        box-sizing: border-box;

    }
    .footer-input-box input{
        border:none;
        width:330px;
        height: 45px;
        padding-left:5px;
        background:none;
        outline:none;
        color:#FFFFFF;
        ::placeholder{
            color: #FFFFFF;
        }
    }
    .footer-input-box button {
        border:none;
        width:130px;
        height: 45px;
        background:#D5A368;
    }

    .Footer-bottom-content{
        display:flex;
        justify-content:space-between;
        width: 80%;
        margin:auto;
        margin-top: 50px;
        padding-bottom: 25px;
        h3{
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: 0.05em;
            color: #FFFFFF;

            margin-bottom: 15px;

        }
    }
    .Footer-bottom-content-left-side{
        display:flex;
        justify-content: space-between;
        width:60%;
    }
    .footer-contact-us{
        p{
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 23px;
             color: #FFFFFF;
            }
        }

    .support img:nth-child(2){
        margin-left:80px;
        margin-right: 20px;        
    }

    .payment-methods{
        width:290px;
    }
    .payment-methods span{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .bottom-footer-box{
        background: #3C3C3C;
    }
    .bottom-footer-box-container{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:80%;
        padding: 20px 0;
        margin:auto;
        p{
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            display: flex;
            align-items: center;
            letter-spacing: 0.2em;

            color: #FFFFFF;
        }
    }




    @media (max-width:780px){
        .footer-top-content{
            display:flex;
           
        }
        .footer-top-content nav{
            display:none;
        }

        .Footer-social-media{
            width:100%;
            justify-content:space-between;
        }

        .Footer-bottom-content{
            flex-direction:column;
        }
        .Footer-bottom-content-left-side{
            width: 100%;
            margin-bottom: 30px;
        }
        .support img:nth-child(2){
            margin-left:20px;
            margin-right: 20px;        
        }
        .bottom-footer-box{

        }

        .bottom-footer-box-container{
            width:90%;
            p{
                font-size: 12px;
                line-height: 16px;
                width: 54%;
            }
        }
    }

    @media (max-width:415px){
        .Footer-social-media{
           flex-direction:column;
           margin-top: 20px;
        }
        .Footer-social-media span{
            width:150px;
            margin:0;
        }
        .Footer-social-media button{
            width:100%;
            margin-top: 20px;
        }

        .footer-middle-content{
            height:auto;
            border-top:none;
        }

        .footer-input-box{
            flex-direction:column;
            width:100%;
            border:none;

        }
        .footer-input-box input{
            width:97%;
            border: 1px solid #D5A368;
        
        }
        .footer-input-box button {
            width:100%;
            margin-top:10px;
        }
        .footer-middle-content span{
            flex-direction:column;
            width:95%;
            margin:auto;

            p{
                margin-top: 20px;
            }
        }

        .Footer-bottom-content-left-side{
           flex-direction:column;
        }
        .footer-contact-us h3{
            margin-bottom: 0;
        }
        .support{
           margin-top: 30px;    
        }

        .bottom-footer-box-container{
            width:90%;
            p{
                font-size: 12px;
                line-height: 16px;
                width: 54%;
            }
        }
        .bottom-footer-box-container{
            flex-direction:column;
            width:100%;
            p{
                font-size: 12px;
                line-height: 16px;
                width: 80%;
                text-align:center;
                margin-bottom:20px;
            }
        }
    }

    @media (max-width:370px){
        .footer-middle-content p{
            font-size:20px;
        }
        .footer-middle-content span{
            p{
                font-size:11px;
            }
        }
        .support img{
            width:80px;
        }
        .payment-methods{
            width: 100%;
         }
    }
`
