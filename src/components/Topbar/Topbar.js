
import styled from 'styled-components';
import Link from 'next/link';
import Route from 'next/router';
import { useState, useEffect } from 'react';

const Toolbar = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background: white;
    height:60px;

    .toolbar_navigation{
        display:flex;
        
    }

    .toolbar_logo{
        color:black;
        text-decoration:none;
        font-size: 2rem
    }


`

const removesession = () => {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    Route.push('/')
}
const menubar = () => {
    const [user, setUser] = useState('')

    useEffect(() => {
        setUser(sessionStorage.getItem('username'))
    }, [])
    return (
        <Toolbar>
            <nav className="toolbar_navigation">
                <div></div>
                <div className="toolbar_logo">PSU COIN</div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li>Profile</li>
                        <li>Transfer</li>
                        <li>Activity</li>
                    </ul>
                </div>
            </nav>
        </Toolbar>
    )
}

export default menubar;