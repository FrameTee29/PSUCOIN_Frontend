import styled from 'styled-components'
import { useEffect, useState } from "react";
import Axios from "axios";
import { FaUserCircle, FaKey } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdChangeHistory } from "react-icons/md";
import { AiOutlineCopy } from "react-icons/ai";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import Slidenav from './subsection/slidenav';
import Slidenav2 from './subsection/slidenav2';

const StyledWrapper = styled.div`
    display:block;
    width:100%;
    font-family:'Krub-Bold';

    
    
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
    .icon-item-key{
        cursor: pointer;
        font-size:24px;
        margin-right:20px;
    }
    .label{
        max-width: 620px;
        word-wrap: break-word;
    }


    @media only screen and (max-width:1024px){
        
        .detail-balance-coin{
            font-size:15px;
            font-family:'Krub-Regular';
        }

        .detail-balance-coin strong{
            font-family:'Krub-Regular';
            font-size: 25px;
            margin-left: 10px;
            font-weight: 700;
            color: rgb(29, 77, 160);
        }

        .account-section-item-label{
            display: flex;
            font-family:'Krub-Regular';
            align-items: center;
            flex-basis: 200px;
            margin-right: 10px;
   
        }

        .label{
            max-width: 500px;
            font-size:18px;
            word-wrap: break-word;
        }
    }

    @media only screen and (max-width:768px){

        .row-container{
            flex-direction:column;
            padding:0px;
        }
        .column-slide{
            display:none;
        }

        
        
    }   
    
`

const profileACCOUNT = (props) => {
    const [statusprivatekey, setStatusprivatekey] = useState(false)
    const [username, setUsername] = useState('');
    const [profileuser, setProfile] = useState({});
    const [key, setKey] = useState({});
    const [copied, setCopied] = useState(false);

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
                    <div className="column-slide-change-hamburger">
                        <Slidenav2/>
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
                                <div className="account-section-item-label"><FaKey className="icon-item" />กุญแจสาธารณะ </div>
                                <div className="account-section-item-label-name">
                                    <div className="label">{key.publickey}
                                        <CopyToClipboard text={key.publickey} onCopy={() => setCopied(true)}>
                                            <AiOutlineCopy className="icon-item-key" />
                                        </CopyToClipboard>
                                    </div>
                                </div>
                            </div>
                            <div className="account-section-item">
                                <div className="account-section-item-label"><RiGitRepositoryPrivateLine className="icon-item" />กุญแจส่วนตัว </div>
                                <div className="account-section-item-label-name">
                                    <div className="label">{key.privatekey}
                                        <CopyToClipboard text={key.privatekey} onCopy={() => setCopied(true)}>
                                            <AiOutlineCopy className="icon-item-key" />
                                        </CopyToClipboard></div>
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
