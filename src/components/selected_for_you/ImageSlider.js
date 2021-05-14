import React, { useState } from 'react'
import styled from 'styled-components';
import { SlideImages } from './SlideImages'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

export default function ImageSlider({slides}) {
    const [current,setCurrent] = useState(0);
    const length = slides.length;

    const nextIma = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevIma = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // if (Array.isArray(slides) || slides.length <= 0) {
    //     return null;
    // }
    return (
        
        <Slider_container>
             <IoIosArrowBack className="go-left-arrow" onClick={prevIma}/>
             <IoIosArrowForward className="go-right-arrow" onClick={nextIma}/>
             
             {SlideImages.map((slide, index) => {
                 return(
                     <div className={index === current ? 'slide active' : 'slide'} key={index}>
                         <img src={slide.ima.default} alt=""/>
                     </div>
                 )
             })}
        </Slider_container>
    )
}

const Slider_container = styled.div`
    position: relative;
    height: 600px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .go-left-arrow{
    position: absolute;
    top: 45%;
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
    top: 45%;
    right: 60px;
    font-size: 1.5rem;
    color: #000000;
    border-radius: 50px;
    padding: 20px;
    background:#FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 100;

}

.slide{
    display: flex;
    justify-content:center;
    opacity: 0.6;
    transition-duration: 0.3s ease;
    width: 300px;
    height: 300px;
}
.slide.active{
    width: 650px;
    height: 550px;
    position: absolute;
    opacity: 1;
    transition-duration: 0.3s;
    transform: scale(1.08);
    margin: auto;
    z-index: 100;
    background: #FFFFFF;
}

@media (max-width: 780px){
    justify-content:space-between;
    height:280px;
    .go-left-arrow{
    left: 30px;
}
    .go-right-arrow{
    right: 30px;
}

    .slide{
    width: 200px;
    height: 200px;


}
.slide.active{
    position: absolute;
    width: 300px;
    height: 250px;
    left: 30.5%;
    }

}

@media (max-width: 415px){
    justify-content:space-between;
    height:190px;
    .go-left-arrow{
    display:none;
}
    .go-right-arrow{
    display:none;
}

    .slide{
    width: 100px;
    height: 100px;


}
.slide.active{
    position: absolute;
    width: 150px;
    height: 170px;
    left: 32%;
    }

}


`