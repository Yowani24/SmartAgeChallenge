import React from 'react'
import styled from 'styled-components'

export default function Events() {
    return (
        <Events_sec>
            <div className="events_left_box">
                <p>EVENTS</p>
                <h1>Meet us at:</h1>
            </div>
            
            <div className="events_right_box">
                <div className="events_left_box_wrapper">
                    <span className="events_left_box_wrapper_left_side">
                        <p>APRIL</p>
                        <h2>19-20th</h2>
                    </span>
                    <span className="events_left_box_wrapper_right_side">
                        <h3>The Shops at Chestnust Hill</h3>
                        <p>Bloomingdale's, Chestnust Hill, MA</p>
                    </span>
                </div>

                <div className="events_left_box_wrapper">
                    <span className="events_left_box_wrapper_left_side">
                        <p>APRIL</p>
                        <h2>9th</h2>
                    </span>
                    <span className="events_left_box_wrapper_right_side">
                        <h3>Stuart Kingston Retailer</h3>
                        <p>3704 Kennett Pike Suite 450<br/> Greenville, DE 19807</p>
                    </span>
                </div>

                <div className="events_left_box_wrapper">
                    <span className="events_left_box_wrapper_left_side">
                        <p>APRIL</p>
                        <h2>19-20th</h2>
                    </span>
                    <span className="events_left_box_wrapper_right_side">
                        <h3>The Shops at Chestnust Hill</h3>
                        <p>Bloomingdale's, Chestnust Hill, MA</p>
                    </span>
                </div>
            </div>
        </Events_sec>
    )
}

const Events_sec = styled.div`
    display:flex;
    justify-content: space-between;
    width:80%;
    margin:auto;
    margin-top:300px;
    margin-bottom:50px;

    .events_left_box p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.25em;
        color: #000000;
    }
    .events_left_box h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        letter-spacing: 0.1em;

        color: #D5A368;

    }

    .events_left_box_wrapper{
        display:flex;
        justify-content:space-between;
        border-top:1px solid #D4D4D4;
        padding:30px;
        width:800px;
    }
    .events_left_box_wrapper:nth-child(3){
        border-bottom:1px solid #D4D4D4;
    }


    .events_left_box_wrapper_left_side{
    }
    .events_left_box_wrapper_left_side p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.25em;

        color: #000000;
    }
    .events_left_box_wrapper_left_side h2{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        line-height: 58px;
        letter-spacing: 0.05em;

        color: #D5A368;
    }


    .events_left_box_wrapper_right_side{
        width:500px;
    }
    .events_left_box_wrapper_right_side h3{
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 41px;
        letter-spacing: 0.1em;

        color: #000000;

}
    .events_left_box_wrapper_right_side p{
        font-size: 24px;
        line-height: 41px;
        letter-spacing: 0.1em;

        color: #000000;
        
    }


    @media (max-width: 780px){
        width:85%;
        margin-top:200px;

        .events_left_box p{
            font-size: 16px;
            line-height: 19px;
        }
        .events_left_box h1{
            font-size: 42px;
            line-height: 119.97%;

        }
        .events_left_box_wrapper{
            flex-direction:column;
            justify-content:space-between;
            padding:20px;
            width:300px;
        }

        .events_left_box_wrapper_left_side{
            display:flex;
            justify-content:space-between;
            align-items:center;
            width:320px;
            padding:10px 0;
        }
        .events_left_box_wrapper_left_side p{
            font-size: 16px;
            line-height: 19px;
        }
        .events_left_box_wrapper_left_side h2{
            font-size: 24px;
            line-height: 119.97%;
        }


        .events_left_box_wrapper_right_side{
            width:320px;
        }
        .events_left_box_wrapper_right_side h3{
            font-size: 18px;
            line-height: 129.14%;
    }
        .events_left_box_wrapper_right_side p{
            font-size: 16px;
            line-height:120%;

        }
    }

    @media (max-width: 415px){
        flex-direction:column;
        width:85%;
        margin-top:50px;

        .events_left_box{
            text-align:center;
            margin-bottom:20px;
        }

        .events_left_box p{
            font-size: 16px;
            line-height: 19px;
        }
        .events_left_box h1{
            font-size: 42px;
            line-height: 119.97%;
        }

        .events_left_box_wrapper{
            width:90%;
            margin:auto;
        }

        .events_left_box_wrapper_left_side{
            flex-direction:column;
            align-items:flex-start;
            width:80%;

        }
        .events_left_box_wrapper_left_side p{
            font-size: 16px;
            line-height: 19px;
        }
        .events_left_box_wrapper_left_side h2{
            font-size: 24px;
            line-height: 119.97%;
        }


        .events_left_box_wrapper_right_side{
            width:250px;
        }
        .events_left_box_wrapper_right_side h3{
            font-size: 18px;
            line-height: 129.14%;
            width:200px;
    }
        .events_left_box_wrapper_right_side p{
            font-size: 16px;
            line-height:120%;
        }
    }
`