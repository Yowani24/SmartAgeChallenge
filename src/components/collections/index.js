import React, { useState } from 'react'
import styled from 'styled-components'
import imag from './images/Earring.png'
import { IoIosArrowForward } from 'react-icons/io'

const data = [
    {
        index: "1",
        title: "SWIRLD RINGS",
        image: require('./images/Earring.png').default
    },
    {
        index: "2",
        title: "BUTTERFLY",
        image: "https://images.unsplash.com/photo-1551727974-8af20a3322f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        index: "3",
        title: "CARISSA",
        image: "https://images.unsplash.com/photo-1603960820172-31f71c8c1637?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
]

export default function Collections() {
    const [current, setCurrent] = useState("1")

    return (
        <Collections_sec>
            <h1>Collections</h1>
            <div className="collections-box">
                <div className="collections-titles">
                    <h3 onClick={() => setCurrent("1")}>SWIRLD RINGS</h3>
                    <h3 onClick={() => setCurrent("2")}>BUTTERFLY</h3>
                    <h3 onClick={() => setCurrent("3")}>CARISSA</h3>
                    
                </div>
                {data.map(({ title, index, image }) =>{
                    return(
                        <>
                            <div className="titles">
                                <h3 onClick={() => setCurrent(index)}>{title}</h3>
                            </div>
                            {current === index ? (
                                <>
                                    <img src={image} alt=""/>
                                    
                                    <span className="image_view_more standard-more-details-btn">
                                            <IoIosArrowForward className="standard-more-details-icon"/>
                                            <p>VIEW MORE</p>
                                    </span>
                                </>
                            ) : null}
                            
                        </>
                    )
                })}
            </div>
            
            <span className="standard-more-details-btn">
                    <IoIosArrowForward className="standard-more-details-icon"/>
                    <p>VIEW ALL</p>
            </span>
        </Collections_sec>
    )
}
const Collections_sec = styled.div`
    display:flex;
    flex-direction:column;
    height: 1050px;
    background:#D5A368;

    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        letter-spacing: 0.1em;
        color: #000000;
        z-index:10000;
        
        margin-top:280px;
        margin-left:180px
    }
    .collections-box{
        display:flex;
        width:91%;
        height:600px;
        margin:auto;
        margin-top:170px;
        position:absolute;
        right:0;
    }
    .titles {
        display:none;
    }
    .collections-titles{
        margin-top:300px;
        
    }
    .collections-titles h3{
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.25em;
        color: #000000;
        margin-top:20px;
    }
    /* .collections-titles h3:hover::after{
        content: " -->";
        color: #8D6638;
    } */
    .collections-titles h3:not(:nth-child(1)){
        margin-top:60px;
    }
    
    .collections-box img{
        position: absolute;
        height:950px;
        right:100px;
        height:950px;
        z-index:1000;
    }
    .standard-more-details-btn{
        margin-top:490px;
        margin-left:180px

    }
    .standard-more-details-icon{
        border-color:#000000;
    }

    .image_view_more{
        margin-top:880px;
        margin-left:120px;
        z-index:1000;
    }



    @media (max-width:780px){
        height:500px;

            h1{
                font-size: 42px;
                line-height: 119.97%;
                margin-top:130px;
                margin-left:60px
            }

            .collections-box{
                margin-top:80px;
                width:92%;
                height:440px;
                overflow:hidden;
            }   

            .collections-box img{
                height:440px;
                right:-160px;

            }

            .standard-more-details-btn{
                margin-top:230px;
                margin-left:60px;
                z-index:1000;

            }
            .image_view_more{
                margin-top:350px;
                margin-left:80px;
                z-index:1000;
            }
            .collections-titles{
                margin-top:150px;
                
            }

            .collections-titles h3{
                font-size: 16px;
                line-height: 19px;
                
                margin-top:0px;
            }
            .collections-titles h3:not(:nth-child(1)){
                margin-top:30px;
            }
    }

    @media (max-width:415px){
        height:450px;

            h1{
                font-size: 42px;
                line-height: 119.97%;
                margin-top:40px;
                margin-left:60px
            }

            .collections-box{
                width:100%;
                height:240px;
                margin-top:100px;
            }   

            .collections-box img{
                height: 199.92px;
                right:60px;
                margin-top:35px;
            }

            .standard-more-details-btn{
                margin-top:280px;
                margin-left:60px;
                z-index:1000;

            }
            .image_view_more{
                display:none;
               
            }
            .titles {
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                align-items:center;
                width:100%;
                margin-top:5px;
                
            }
            .titles h3{
                font-size: 14px;
                line-height: 16px;
            }
    
            .collections-titles{
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-top:0px;
                display:none;
                
            }

            .collections-titles h3{
                font-size: 14px;
                line-height: 16px;
                
                margin-top:0px;
            }
            .collections-titles h3:not(:nth-child(1)){
                margin-top:0;
            }
    }


    @media (max-width:376px){
            .collections-box{
                width:100%;
                height:240px;
                margin-top:100px;
            }   

            .collections-box img{
                height: 199.92px;
                right:30px;
                margin-top:35px;
                
            }

            
    }
    @media (max-width:350px){

        h1{
            margin-left:30px;    
            }

        .titles{
                margin-left:6px;
            }
            .collections-box img{
                right:10px;
            }
            
    }


`
