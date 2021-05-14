import React from 'react'
import styled from 'styled-components'
import { AiOutlineInstagram } from 'react-icons/ai'
import InstagramSlider from './InstagramSlider'
import { InstagSliderdata } from './InstagSliderdata'

export default function InstagramSection() {
    return (
        <Instagram_sec>
            <div className="instagram-top-content">
                <h2> <AiOutlineInstagram className="instagram-icon"/> Instagram</h2>
                <p>@smartshop</p>
            </div>
            <InstagramSlider slides={InstagSliderdata}/>
            
        </Instagram_sec>
    )
}

const Instagram_sec = styled.div`
    background: #F2F2F2;
    padding-bottom:50px;
    .instagram-top-content{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .instagram-top-content h2{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        letter-spacing: 0.1em;
        color: #472138;

        margin-top:100px;


    }
    .instagram-top-content p{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 48px;
        color: #000000;

        margin-top:20px

    }
    .instagram-top-content .instagram-icon{
        font-size:50px;
        color:#D5A368;
    }

    @media (max-width:780px){
        padding-bottom:25px;
        .instagram-top-content h2{
            font-size: 42px;
            line-height: 119.97%;
            margin-top:50px;
        }
        .instagram-top-content p{
            font-size: 24px;
            line-height: 32px;
        }
        .instagram-top-content .instagram-icon{
            font-size:40px;
        }
    }

    @media (max-width:415px){
        padding-bottom:0;
    }
`
