import styled from 'styled-components'
import { useEffect, useState } from "react";
import Axios from "axios";
import { FaUserCircle, } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdChangeHistory } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FiCreditCard } from "react-icons/fi";
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

    .info-content{
        
        max-width: 100%;
    }

    .page-header{
       display:flex;
       width:100%;
       margin-bottom:10px;
    }

    .dashedline{
        display:flex;
        width:100%;
        margin-bottom:10px;
        margin-top:10px;
        border-bottom: 2px dashed #d9dee3;
    }

    .account-section{
        color: rgb(82, 82, 82);
        font-weight: 500;
        font-size: 24px;
    }

    .detail-head{
        font-family:'Krub-Regular';
        font-weight: 500;
        font-size: 20px;
        margin-bottom:20px;
    }

    .account-section-item{
        display: flex;
        font-family:'Krub-Regular';
        font-weight: 500;
        font-size: 20px;
        align-items: center;
        margin-bottom: 8px;
    }

    .account-section-item-label-name{
        display:flex;
        max-width:600px;
    }
    .account-section-item-label{
        display: flex;
        font-family:'Krub-Regular';
        align-items: center;
        flex-basis: 260px;
        margin-right: 10px;
   
    }
    .icon-item{
        font-size:24px;
        margin-right:20px;
    }
    .label{
        max-width: 620px;
        word-wrap: break-word;
    }
    
`

const profileACCOUNT = (props) => {
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
                        <Slidenav />
                    </div>
                    <div className="column-content">
                        <div className="info-content">
                            <div className="page-header">
                                <h2>บัญชีของฉัน</h2>
                            </div>
                            <div className="dashedline"></div>
                        </div>
                        <div className="account-section">
                        <div className="detail-head">กุญแจของฉัน</div>
                        <div className="account-section-item">
                            <div className="account-section-item-label"><AiOutlineFieldNumber className="icon-item" />กุญแจสาธารณะ</div>
                            <div className="account-section-item-label-name">
                                <div className="label">{key.publickey}</div>
                            </div>
                        </div>
                        <div className="account-section-item">
                            <div className="account-section-item-label"><FaUserCircle className="icon-item" />กุญแจส่วนตัว</div>
                            <div className="account-section-item-label-name">
                                <div className="label">{key.privatekey}</div>
                            </div>
                        </div>
                        <div className="account-section-item">
                            <div className="account-section-item-label"><FiCreditCard className="icon-item" />เลขบัตรประชาชน</div>
                            <div className="account-section-item-label-name">
                                <div className="label ">{profileuser.cid}</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    )
}

export default profileACCOUNT;
