import React from 'react'
import styled from 'styled-components'
import imag1 from './images/image1.png'
import imag2 from './images/image2.png'
import imag3 from './images/image3.png'

export default function AboutUs() {
    return (
        <About_us_sec>
            <div className="about_us_top_content">
                <p>ABOUT US</p>
                <h1>Excellence & Tradition</h1>
            </div>
            <div className="About_us_grid_box">
                <div className="grid-boxes grid-box1">
                    <span className="grid-box-content">
                        <p>PROCESS</p>
                        <h3>Love is in the Details</h3>
                    </span>
                </div>
                <div className="grid-boxes grid-box2">
                    <span className="grid-box-content">
                        <p>OUR STORY</p>
                        <h3>A family traditional</h3>
                    </span>
                </div>
                <div className="grid-boxes grid-box3">
                    <span className="grid-box-content">
                        <p>MATERIAL</p>
                        <h3>We deliver the best quality</h3>
                    </span>
                </div>
            </div>
        </About_us_sec>
    )
}

const About_us_sec = styled.div`
    .about_us_top_content{
        display:flex;
        flex-direction:column;
        align-items:center;
        height:480px;
    }
    .about_us_top_content p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        letter-spacing: 0.25em;
        color: #000000;
        margin-top: 220px;
    }
    .about_us_top_content h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        letter-spacing: 0.1em;
        text-align:center;
        color: #D5A368;
        margin-top:10px;

        width:550px;
    }

    .About_us_grid_box{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .grid-boxes{
        height:800px;
        margin:10px;
    }
    .grid-box1{
        background-image:url(${imag1});
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
    }
    .grid-box2{
        background-image:url(${imag2});
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
        margin-top: 80px;
    }
    .grid-box3{
        background-image:url(${imag3});
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
    }

    .grid-box-content{
        display:flex;
        flex-direction:column;
        background:#FFFFFF;
        width:93%;
        float:right;
        margin-top:700px;


    }
    .grid-box-content p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #D5A368;
        margin-top:50px;
        margin-left:40px
    }
    .grid-box-content h3{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 58px;
        color: #000000;
        width: 350px;
        margin-left:40px;
        margin-bottom: 20px;

    }

    @media (max-width:780px){
        .about_us_top_content{
            height:280px;
        }
        .about_us_top_content p{
            font-size: 18px;
            line-height: 21px;
            margin-top: 120px;
        }
        .about_us_top_content h1{
            font-size: 42px;
            line-height: 100%;
            text-align:center;
            width:300px;
        }
        .grid-boxes{
            height:280px;
        }
        .grid-box-content{
            display:flex;
            flex-direction:column;
            background:#FFFFFF;
            width:100%;
            float:right;
            margin-top:280px;
            float:none;
        }
        .grid-box-content p{
            font-size: 16px;
            line-height: 19px;
            margin-top:15px;
            margin-left:10px
        }
        .grid-box-content h3{
                font-size: 32px;
                line-height: 119.97%;
                width: 220px;
                margin-left:10px
            }
    }
    @media (max-width:415px){
        .about_us_top_content{
            height:200px;
        }
        .about_us_top_content p{
            margin-top: 50px;
        }
        .About_us_grid_box{
            height: 415px;
            overflow-x: auto;
            -webkit-overflow-scrolling:touch;
            scroll-behavior:smooth;
            scroll-snap-type: x mandatory; 
           
        }
        .About_us_grid_box::-webkit-scrollbar{
            display:none;
        }
        .grid-boxes{
            margin-top:0;
            scroll-snap-align: center;
        }
        
    }
`
