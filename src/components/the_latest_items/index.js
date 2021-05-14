import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'

export default function TheLatest() {
    return (
        <The_latest_sec>
            <The_latest_top_content>
                <h3>THE LATEST FROM</h3>
                <h1>Jewelry Store</h1>
                <p>Discover all that's new, brilliant and beautiful in the world of Brand's Name.</p>

                <span className="standard-more-details-btn">
                    <IoIosArrowForward className="standard-more-details-icon"/>
                    <p>SEE MORE</p>
                </span>
            </The_latest_top_content>
            
        </The_latest_sec>
    )
}

const The_latest_sec = styled.div`

`
const The_latest_top_content = styled.div`
    display:flex;
    flex-direction:column;
    /* justify-content:center; */
    align-items:center;
    height: 470px;

    h3{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        margin-top: 100px;

        color: #000000;
    }
    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        letter-spacing: 0.1em;

        color: #D5A368;
    }
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.1em;
        margin-top: 20px;

        color: #000000;
    }
    span{
        margin-top: 40px;
    }
    span p{
        margin-top: 0;
    }

    @media (max-width:780px){
        height:280px;
        h3{
            font-size: 18px;
            line-height: 21px;
            margin-top:50px;
        }
        h1{
            font-size: 42px;
            line-height: 119.97%;
        }
        p{
            font-size: 14px;
            line-height: 152.62%;
        }
        span{
            margin-top: 20px;
        }
    }
    @media (max-width:415px){
        height:320px;
        p{
            width: 55%;
            text-align:center;
        }
        span p{
            width:auto;
        }
    }
    @media (max-width:360px){
        h1{
            font-size: 38px;
        }
        p{
            width: 58%;
            /* text-align:center; */
        }
        span p{
            width:auto;
        }
    }
`
