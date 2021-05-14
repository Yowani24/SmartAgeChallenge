import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import { SlideImages } from './SlideImages'

export default function SelectedForYou() {
    return (
        <Selected_for_you_sec>
            <Selected_top_content>
                <p>SHOP</p>
                <h1>Selected for you</h1>
            </Selected_top_content>
            <Selected_slider_box>
                <ImageSlider slides={SlideImages}/>
                <p>18K Rose Gold Engagement Ring</p>
            </Selected_slider_box>
        </Selected_for_you_sec>
    )
}


const Selected_for_you_sec = styled.div`
    
`
const Selected_top_content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.25em;
        margin-top:100px;

        color: #000000;

    }
    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        display: flex;
        text-align: center;
        letter-spacing: 0.1em;
        margin-top: 10px;

        color: #472138;

    }

    @media (max-width:780px){
        p{
            font-size: 18px;
            line-height: 21px;
            margin-top:50px;
        }
        h1{
            font-size: 42px;
            line-height: 119.97%;
        }
    }

    @media (max-width:415px){
        h1{
            width:200px;
        }
    }
`
const Selected_slider_box = styled.div`
    /* text-align: center; */
    p{
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #000000;
        margin-bottom:50px;
    }

    @media (max-width:780px){
        p{
            font-size: 18px;
            line-height: 21px;
        }
    }

    @media (max-width:415px){
        p{
            font-size: 18px;
            line-height: 21px;

            width:50%;
            margin: auto;
            margin-bottom:50px;
        }
    }
`