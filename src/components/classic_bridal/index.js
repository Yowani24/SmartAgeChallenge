import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import classic_bridal from './images/classic_bridal.png'

export default function ClassicBridal() {
    return (
        <ClassicBridal_sec>
            <ClassicBridal_left_box>

            </ClassicBridal_left_box>
            <ClassicBridal_right_box>
                <h1>Classic Bridal</h1>
                <p>Our extraordinary diamonds are chosen to celebrate a love, a hope and a passion. Brilliantly capturing our passion for diamonds, a member of the family individually hands-selects each stone within our bridal collection. So you can fall in love witha diamond for eternity.</p>
                <span className="standard-more-details-btn">
                    <IoIosArrowForward className="standard-more-details-icon"/>
                    <p>SHOP NOW</p>
                </span>
            </ClassicBridal_right_box>
        </ClassicBridal_sec>
    )
}

const ClassicBridal_sec = styled.div`
display:flex;

@media (max-width:415px){
        flex-direction:column;
    }

`
const ClassicBridal_left_box = styled.div`
    width:100%;
    height:980px;

    background-image:url(${classic_bridal});
    background-repeat:no-repeat;
    background-position:center;
    background-size: cover;


    @media (max-width:780px){
        height: 400px;
    }


    @media (max-width:415px){
        width:100%;
    }

`
const ClassicBridal_right_box = styled.div`
    width:100%;
    height:980px;
    background:#472138;

    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        letter-spacing: 0.1em;
        margin-top: 250px;
        margin-left: 170px;
        color: #D5A368;

        width: 350px;

    }
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.1em;
        margin-top: 50px;
        margin-left: 170px;
        color: #FFFFFF;

        width: 550px;

    }
    span{
        color:#FFFFFF;
        margin-top: 50px;
        margin-left: 170px;
    }
    span p{
        margin:0;
        margin-left: 10px;
        width:auto;
    }

    @media (max-width: 780px){
        width: 60%;
        height: 400px;
        h1{
            font-size: 42px;
            line-height: 119.97%;
            margin-top:70px;
            margin-left: 70px;
        }
        p{
            font-size: 14px;
            line-height: 152.62%;
            margin-top: 25px;
            margin-left:70px;
            
            width: 320px;

    }
    span{
        margin-top: 25px;
        margin-left: 70px;
    }
    }


    @media (max-width:415px){
        width:100%;
        height:530px;

        h1{
            width:200px;
            margin-top:50px;
            margin-left: 60px;
            line-height: 100%;

        }
        p{
            font-size: 16px;
            line-height: 152.62%;
            margin-left: 60px;
            width:72%;
    }
    span{
        margin-left: 60px;
    }
    }
`
