import styled from 'styled-components';
import Link from 'next/link';
import Route from 'next/router';
import { FcHome, FcContacts, FcCurrencyExchange, FcLandscape,FcExport } from "react-icons/fc";

const Side_drawer = styled.nav`

    .side-drawer{
        height:100%;
        background-image: url('/static/images/coin4.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow:1px 0px 7px rgba(0,0,0,0.5);
        position:fixed;
        top:0;
        left:0;
        width:70%;
        max-width:300px;
        z-index:200;
        transform:translateX(-100%);
        transition: transform 0.5s ease-out;
        font-family:'BalooPaaji2-Bold';
        font-weight:700;
        font-size:30px;


    }
    .side-drawer.open{
        transform:translateX(0);
    }
    
    ul{
        height:100%;
        list-style:none;
        display:flex;
        flex-direction:column;
        // justify-content:center;
        padding-inline-start:0px;
        margin-top:40px;
    }

    li{
        margin: 0.3rem;
        box-shadow:0px 0px 3px 0px rgba(0,0,0,0.4);
        // text-align: center;
        transition: box-shadow 0.25s;
        background-color:black;
        border-radius:10px;      
    }
    li:hover,li:active{
        cursor:pointer;
        box-shadow:0px 0px 7px 0px rgba(255,159,0,0.8);
        text-decoration:none;
    }

    a{
        color:white;
        text-decoration:none;
        font-size: 1.2rem;
        margin-left:0.4rem;
    }

    a:hover,a:active{
        color: orange;
        text-decoration:none;
        font-size: 1.2rem;
    }

    .box-li{
        display:flex;
        box-shadow:0px 0px 2px 0px rgba(0,0,0,0.4);
        align-items:center;
        justify-content:center;
        
    }
    .psulogo{
        max-width:300px;
    }

    .flat_logo{
        margin-left:1rem;
    }
    
`


const SideDrawer = props => {

    let drawerClasses = 'side-drawer';

    const removesession = () => {
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('token')
        Route.push('/')
    }

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <Side_drawer>
            <nav className={drawerClasses}>
                <ul>
                    <Link href="/Home">
                        <li>
                            <FcHome className="flat_logo" />
                            <a>Home</a>
                        </li>
                    </Link>

                    <Link href="/profile">
                        <li>
                            <FcContacts className="flat_logo"/>
                            <a>Profile</a>
                        </li>
                    </Link>

                    <li>
                        <FcLandscape className="flat_logo"/>
                        <a href="https://miniprojectclient.firebaseapp.com/"> Activity</a>
                    </li>
                    <Link href="/transfer">
                        <li>
                            <FcCurrencyExchange className="flat_logo"/>
                            <a>Transfer</a>
                        </li>
                    </Link>

                    <li><FcExport className="flat_logo"/><a onClick={() => removesession()}>Sign out</a></li>
                </ul>
            </nav>
        </Side_drawer>
    )
}

export default SideDrawer;