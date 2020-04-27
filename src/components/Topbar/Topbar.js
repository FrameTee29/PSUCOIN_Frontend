
import styled from 'styled-components';
import Link from 'next/link';
import Route from 'next/router';
import { useState, useEffect } from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background: white;
    height:60px;

    .toolbar_navigation{
        display:flex;
        height:100%;
        padding: 0px 1rem;
        align-items:center;
    }

    .toolbar_logo{
        margin-left:0.5rem;
    }

    .toolbar_logo a{
        color:black;
        text-decoration:none;
        font-size: 1.5rem
    }

    .toolbar_navigation-items a{
        color:black;
        text-decoration:none;
    }

    .toolbar_navigation-items ul{
        list-style:none;
        margin:0;
        padding:0;
        display:flex;
    }

    .toolbar_navigation-items li{
        padding: 0 0.5rem;
    }

    .toolbar_navigation-items a:hover,
    .toolbar_navigation-items a:active{
        color:#92e7d0;
        text-decoration:none;
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
                <div>
                    <DrawerToggleButton click={props.drawerToggleClickHandler}/>
                </div>
                <div className="toolbar_logo"><a>PSU COIN</a></div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a>Profile</a></li>
                        <li><a>Transfer</a></li>
                        <li><a>Activity</a></li>
                    </ul>
                </div>
            </nav>
        </Toolbar>
    )
}

export default menubar;