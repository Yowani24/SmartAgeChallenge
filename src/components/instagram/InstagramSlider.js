import React, { useState } from 'react'
import { InstagSliderdata } from './InstagSliderdata'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import styled from 'styled-components';

export default function InstagramSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextIma = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevIma = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
             return null;
         }
    return (
        <InstagramSlider_sec>
            <IoIosArrowBack className="go-left-arrow" onClick={prevIma}/>
             <IoIosArrowForward className="go-right-arrow" onClick={nextIma}/>

             {InstagSliderdata.map((slide, index) => {
                 return(
                     <div className={index === current ? 'slide active' : 'slide'} key={index}>
                         <img className="slideImage" src={slide.image.default} alt=""/>
                     </div>
                 )
             })}
        </InstagramSlider_sec>
    )
}

const InstagramSlider_sec = styled.div`
    position: relative;
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
.go-left-arrow{
    position: absolute;
    left: 60px;
    font-size: 1.5rem;
    color: #000000;
    border-radius: 50px;
    padding: 20px;
    background:#FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 100;

}
.go-right-arrow{
    position: absolute;
    right: 60px;
    font-size: 1.5rem;
    color: #000000;
    border-radius: 50px;
    padding: 20px;
    background:#FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 100;
}

    .slideImage{
        width:100%;
        height:100%;
    }
    .slide{
        
        opacity: 1;
        transition-duration: 0.3s ease;
        width: 400px;
        height: 300px;
        margin:5px;

    }

    .slide.active{
        position: absolute;
        width: 450px;
        height: 400px;
        opacity: 1;
        transition-duration: 0.3s;
        transform: scale(1.08);
        margin: auto;
        border: 15px solid #FFFFFF;
        border-radius:4px;
        box-shadow: rgba(14, 30, 37, 0.12)0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        z-index: 100;
    }

    @media (max-width:780px){
        overflow:hidden;
        .slideImage{
            width:100%;
            height:100%;
        }
        .slide{
            min-width: 400px;
            height: 300px;
        }

        .slide.active{
            width: 350px;
            height: 350px;
        }
    }

    @media (max-width:415px){
        overflow:hidden;
        height:400px;

        .go-left-arrow{
            display:none;
        }
        .go-right-arrow{
            display:none;
        }
        .slideImage{
            width:100%;
            height:100%;
        }
        .slide{
            min-width: 200px;
            height: 200px;
        }

        .slide.active{
            width:250px;
            height: 250px;
        }
    }
`
