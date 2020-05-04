
import styled from 'styled-components';
import Link from 'next/link';
import Route from 'next/router';
import { useState, useEffect } from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { RiExchangeDollarLine, RiExchangeLine } from "react-icons/ri";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

const Toolbar = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background: #30b671;
    /* background-image: url('/static/images/coin4.jpg'); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height:60px;
    font-family:'BalooPaaji2-Bold';
    font-weight:700;
    box-shadow:0px 0px 15px rgba(0,0,0,0.4);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    

    .toolbar_navigation{
        display:flex;
        justify-content:space-between;
        height:100%;
        padding: 0px 1rem;
        align-items:center;
    }

    .toolbar_navigation_into{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .toolbar_logo{
        font-weight:700;
        margin-left:0.5rem;
        transition: color 0.5s;
        
    }
    .toolbar_logo:hover,.toolbar_logo:active{
        color:#ffce2e;
        
    }

    .toolbar_logo a{
        color:black;
        text-decoration:none;
        font-size: 1.5rem
    }

    .toolbar_navigation-items a{
        color:white;
        text-decoration:none;
    }

    .toolbar_navigation-items ul{
        list-style:none;
        margin:0;
        padding:0;
        display:flex;
    }

    .toolbar_navigation-items li{
        cursor:pointer;
        font-weight:700;
        padding: 0 0.5rem;
    }
    .toolbar_navigation-items a:hover,
    .toolbar_navigation-items a:active{
        color:#4a4a4a;
        text-decoration:none;
    }

    @media (max-width:768px){
        .toolbar_navigation-items{
            display:none;
        }
    }
    


`

const removesession = () => {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    Route.push('/')
}

const menubar = props => {
    const [user, setUser] = useState('')

    useEffect(() => {
        setUser(sessionStorage.getItem('username'))
    }, [])
    return (
        <Toolbar>
            <nav className="toolbar_navigation">
                <div className="toolbar_navigation_into">
                    <div>
                        <DrawerToggleButton click={props.drawerToggleClickHandler} />
                    </div>
                    <div className="toolbar_logo"><Link href="/Home"><a style={{ color: 'white' }}>PSU COIN<RiExchangeDollarLine /></a></Link></div>
                </div>

                <div>
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li>
                                <Link href="/profile/info">

                                    <a><FaUserAlt />Profile</a>
                                </Link>
                            </li>
                            <li><a href="https://miniprojectclient.firebaseapp.com/"><FiActivity />Activity</a></li>
                            <li>
                                <Link href="/transfer/beforesend">
                                    <a><RiExchangeLine />Transfer</a>
                                </Link>
                            </li>
                            <li ><a onClick={() => removesession()}><FaSignOutAlt />Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Toolbar>
    )
}

export default menubar;