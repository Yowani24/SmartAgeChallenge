import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import styled from 'styled-components'
import unique_image from './images/image.png'

export default function OriginalDesign() {
    return (
        <Original_design_sec>
            <Original_left_box>
                <h1>The origninal Design</h1>
                <p>Inspired by the spectacular historical legacy and most refined glamour of the world today.</p>

                <span className="standard-more-details-btn">
                    <IoIosArrowForward className="standard-more-details-icon"/>
                    <p>EXPLORE</p>
                </span>
            </Original_left_box>

            <Original_right_box>

            </Original_right_box>
        </Original_design_sec>
    )
}

const Original_design_sec = styled.div`
    display:flex;

    @media (max-width:415px){
            flex-direction:column;
        }


`
const Original_left_box = styled.div`
    width:1200px;
    height: 1140px;
    background: #F9EFE4;
    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        letter-spacing: 0.1em;
        margin-top: 450px;
        margin-left: 200px;
        color: #000000;

        width: 700px;

    }
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.1em;
        margin-top: 50px;
        margin-left: 200px;
        color: #000000;

        width: 580px;
    }
    span{
        margin-top:25px;
        margin-left:200px;
    }
    span p{
        width: auto;
        margin:0;
        margin-left: 10px;
    }

    @media (max-width:780px){
        width:600px;
        height: 450px;
            h1{
                font-size: 42px;
                line-height: 119.97%;
                margin-top:80px;
                margin-left:110px;
                width:350px
            }
            p{
                font-size: 14px;
                line-height: 152.62%;
                margin-left:110px;

                width:350px;
            }
            span{
                margin-left:110px;
            }
        }
        @media (max-width:415px){
        width:100%;
        height: 400px;
            h1{
                margin-top:40px;
                margin-left:40px;

                width:80%;
            }
            p{
                margin-top:20px;
                margin-left:40px;

                width:60%;
            }
            span{
                margin-left:40px;
            }
        }

`
const Original_right_box = styled.div`
        width:827px;
        height: 1140px;
        background-image:url(${unique_image});
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;

        @media (max-width:780px){
            width:300px;
            height:450px;
            background-position:left;
        }
        @media (max-width:415px){
            width:100%;
            height:500px;
        }

`
