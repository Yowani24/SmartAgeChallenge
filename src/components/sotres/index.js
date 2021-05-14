import React from 'react'
import styled from 'styled-components'
import store_bkg_image from './images/stores_image.png'
import { IoIosArrowForward } from 'react-icons/io'

export default function Stores() {
    return (
        <Stores_sec>
            <p>STORES</p>
            <h1>FIND STORES</h1>
            <span className="standard-more-details-btn">
                <IoIosArrowForward className="standard-more-details-icon"/>
            </span>
        </Stores_sec>
    )
}

const Stores_sec = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:750px;

    background-image: url(${store_bkg_image});
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;

    filter: brightness(50%);
    

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-align: right;
        letter-spacing: 0.25em;

        color: #D5A368;
    }
    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.1em;

        color: #FFFFFF;
    }
    span{
        color: #FFFFFF;
        margin-top:25px;
    }

    @media (max-width:780px){
        height: 400px;
        p{
            font-size: 18px;
            line-height: 21px;
        }
        h1{
            font-size: 42px;
            line-height: 119.97%;
        }
    }
    @media (max-width:780px){
        height: 300px;
    }
`
