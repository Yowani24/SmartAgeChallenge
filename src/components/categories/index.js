import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import left_image from './images/image1.png'
import right_image from './images/image2.png'

export default function Categories() {
    return (
        <Category_sec>
            <Category_left_box className="category-box">
                <p>Category</p>
                <h1>Rings</h1>
            </Category_left_box>
            <Category_right_box className="category-box">
                <span className="standard-more-details-btn">
                    <IoIosArrowForward className="standard-more-details-icon"/>
                </span>
            </Category_right_box>
        </Category_sec>
    )
}
const Category_sec = styled.div`
    display:grid;
    grid-template-columns: 3fr 1fr;
    .category-box{
        height: 780px;
    }
    @media (max-width:780px){
        grid-template-columns: 9fr 1fr;
        .category-box{
        height: 330px;
    }
    }

`
const Category_left_box = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border: 20px solid #FFFFFF;


    background-image:url(${left_image});
    background-repeat:no-repeat;
    background-position:center;
    background-size: cover;


    p{
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.25em;
        color: #FFFFFF;
    }
    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 96px;
        line-height: 115px;
        display: flex;
        align-items: center;
        letter-spacing: 0.3em;

        color: #FFFFFF;

    }

    @media (max-width:780px){
        border: 10px solid #FFFFFF;
        p{
            font-size: 18px;
            line-height: 21px;
        }
        h1{
            font-size: 50px;
            line-height: 119.97%;
        }
    }
    @media (max-width:415px){
        border:none;
        border-right: 10px solid #FFFFFF;
        background-position:right;
    }
`
const Category_right_box = styled.div`
    display:flex;
    border: 20px solid #FFFFFF;
    border-left:none;
    border-right:none;

    background-image:url(${right_image});
    background-repeat:no-repeat;
    background-position:center;
    background-size: cover;
    
    opacity: 0.3;

    span{
        margin-left:390px;
    }
    .standard-more-details-icon{
        padding:25px;
        font-size: 20px;
        border-color:#FFFFFF;
        background:#FFFFFF;

        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
        rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    }

    @media (max-width:780px){
        border: 10px solid #FFFFFF;
        border-left:none;
        border-right:none;
        background-position:left;
        span{
            display:none;
        }
    }

    @media (max-width:415px){
        border:none;
        opacity: 1;
    }
`
