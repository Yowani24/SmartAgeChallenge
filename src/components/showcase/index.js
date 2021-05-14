import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import showcaseBkImage from './images/showcase.png'

export default function Showcase() {
    return (
        <Showcase_sec>
            <Showcase_side_screen>
                <Circle_btns_box>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </Circle_btns_box>
                <div className="line"></div>
                <h3>DISCOVER MORE</h3>
            </Showcase_side_screen>

            <Showcase_main_screen>
                <h1>Engagement Ring</h1>
                <span className="standard-more-details-btn">
                    <IoIosArrowForward className="standard-more-details-icon"/>
                    <p>EXPLORE</p>
                </span>
            </Showcase_main_screen>
        </Showcase_sec>
    )
}

const Showcase_sec = styled.div`
display: flex;
height:880px;

@media (max-width: 780px){
    height:450px;

}

@media (max-width: 415px){
    flex-direction: column-reverse;
    height:auto;

}

`
const Showcase_side_screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100px;
    /* height:880px; */


    h3{
        writing-mode:vertical-rl;
        text-orientation:sideways-right;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        text-align: right;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        margin-top: 8px;
        transform: rotate(180deg);
    }
    
    .line{
        width: 1px;
        height: 180px;
        background: #D5A368;
        margin: 30px 0;
    }
    @media (max-width: 780px){
        width: 80px;
        height: 450px;
        .line{
            height:80px;
            margin:5px 0;
        }
        h3{
            font-size: 14px;
            line-height: 16px;
        }
        
}

    @media (max-width: 415px){
        width:100%;
        height:60px;
        justify-content:center;
        .line{
            display:none;
        }
        h3{
            display:none;
        }
}

`
const Circle_btns_box = styled.div`
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height:50px;
        margin:5px;

        font-size: 16px;
        line-height: 19px;

        text-align: center;

        color: #333333;
    }
    span:nth-child(1){
        border: 1px solid #D5A368;
        border-radius: 50px;
        margin-top:150px;
    }

    @media (max-width:780px){
        span{
            width: 40px;
            height:40px;
            margin:0;
        }
        span:nth-child(1){
            margin-top:30px;
        }
    }

    @media (max-width:415px){
        display: flex;

        span:nth-child(1){
        margin-top:0;
    }
    }
`

const Showcase_main_screen = styled.div`
    position:relative;
    width:100%;
    height:1020px;
    background-image: url(${showcaseBkImage});
    background-repeat: no-repeat;
    background-position:center;
    background-size:cover;
    z-index: 1000;

    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 107px;
        letter-spacing: 0.1em;
        color: #FFFFFF;


        margin-top:725px;
        margin-left: 100px;
        margin-bottom: 20px;
    }
    .standard-more-details-btn{
        margin-left: 100px;
        color:#FFFFFF;
    }
    @media (max-width:780px){
       height: 500px;
       background-position:left;

        h1{
            font-size: 43px;
            line-height: 57px;

            margin-top: 320px;
            margin-left:50px;
        }
        .standard-more-details-btn{
        margin-left: 50px;
    }
    }
    @media (max-width:415px){
       height: 350px;
       background-position:center;


        h1{
            font-size: 42px;
            line-height: 50px;

            margin-top: 155px;
            margin-left:20px;
        }
        .standard-more-details-btn{
        margin-left: 20px;
    }
    }

`