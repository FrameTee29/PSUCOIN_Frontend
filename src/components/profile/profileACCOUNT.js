import styled from 'styled-components'
import { useEffect, useState } from "react";
import Axios from "axios";

import { FaUserCircle } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdChangeHistory } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import Slidenav from './subsection/slidenav';

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
        text-decoration: none;
        color: rgb(82, 82, 82);
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

const profileACCOUNT= (props) => {
    const [statusprivatekey, setStatusprivatekey] = useState(false)
    const [username, setUsername] = useState('');
    const [profileuser, setProfile] = useState({});
    const [key, setKey] = useState({});

    const getUser = async () => {
        const user = await Axios.get(`http://localhost:3001/users/${sessionStorage.getItem('username')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        setProfile(user.data[0])
        setKey(user.data[0].profile)

    }


    useEffect(() => {
        getUser()
    }, [])

    return (
        <StyledWrapper>
            <div className="container">
                <div className="row-container">
                    <div className="column-slide">
                       <Slidenav/>
                    </div>
                    <div className="column-content">
                        บัญชีของฉัน
                    </div>
                </div>
            </div>
        </StyledWrapper>
    )
}

export default profileACCOUNT;
