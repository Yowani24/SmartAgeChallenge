import React from 'react'
import styled from 'styled-components'
import smartageLogo from './images/smartage_logo.png'
import { TiLocationOutline } from 'react-icons/ti';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';
import { BiSearch, BiMenu } from 'react-icons/bi';



import './styles.css'

export default function Header() {
    return (
        <Header_sec>
            <Top_header_container>
                <div className="find-a-store-box">
                    <TiLocationOutline className="location_icon"/>
                    Find a store
                </div>
                <BiMenu className="menu_icon"/>
                <div className="Top-icons_box">
                    <span>
                        <BsPerson/>
                        <AiOutlineHeart/>
                    </span>
                        <AiOutlineShopping/>
                        <BiSearch className="search_icon"/>
                </div>
            </Top_header_container>
            <img className="logo-image" src={smartageLogo} alt=""/>
            <Bottom_header_container>
                <nav className="menu">
                    <ul>
                        <li><a>COLLECTIONS</a></li>
                        <li><a>CATEGORIES</a></li>
                        <li><a>STORES</a></li>
                        <li><a>OUR STORY</a></li>
                        <li><a>CONTACT</a></li>
                    </ul>
                </nav>
            </Bottom_header_container>
        </Header_sec>
    )
}

const Header_sec = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 20px 30px;
    border-bottom: 1px solid #d8d8d8;

    @media (max-width:415px){
        padding: 20px 15px;
    }


`
const Top_header_container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
`
const Bottom_header_container = styled.div`

`
