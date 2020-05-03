import styled from 'styled-components'
import { useEffect, useState } from "react";
import Axios from "axios";

import { FaUserCircle } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdChangeHistory } from "react-icons/md";
import { GoSignOut } from "react-icons/go";

const StyledWrapper = styled.div`
    display:block;
    width:100%;
    font-family:'Krub-Bold';

    
    @media (min-width: 425px){
        .container {
            padding: 0px 20px;
        }
    } 
    @media (min-width: 1024px){
        .container {
            padding: 0px 40px;
        }
    } 
    @media (min-width: 1440px){
        .container {
            padding: 0px 80px;
        }
    } 
    .container{
        position: relative;
        width: 100%;
        max-width: 1300px;
    }

    .row-container{
        display:flex;
        width:100%;
        padding:60px 0px;
    }
    
    .column-slide{
        flex-basis: 260px;
        max-width: 260px;
    }

    .column-content{
        flex-basis: calc(100% - 260px);
        max-width: calc(100% - 260px);
    }
    nav{
        font-family:'Krub-Regular';
        color: rgb(82, 82, 82);
        font-size: 24px;
        font-weight:500;
    }

    ul{
        padding:0px 0px 0px 0px;
        list-style:none;
    }

    li{
        margin-bottom: 2rem;
    }

    a{
        display: flex;
        align-items: center;
        cursor:pointer;
        text-decoration:none;
    }

    span{
        margin-left:25px;
        color:
    }

    span:hover{
        color:#247d4f;
    }

    .icon-nav{
        color:#30b671;
    }
    
`

const Row_container = (props) => {

    return (
        <StyledWrapper>
            <div className="container">
                <div className="row-container">
                    <div className="column-slide">
                        <nav>
                            <ul>
                                <li>
                                    <a href='/partprofile/info'>
                                        <FaUserCircle className="icon-nav" />
                                        <span>ข้อมูลผู้ใช้</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <MdAccountBalanceWallet className="icon-nav" />
                                        <span>บัญชีของฉัน</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <MdChangeHistory className="icon-nav" />
                                        <span>ประวัติธุรกรรม</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <GoSignOut className="icon-nav" />
                                        <span>ออกจากระบบ</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="column-content">ข้อมูล</div>
                </div>
            </div>
        </StyledWrapper>
    )
}

export default Row_container;


