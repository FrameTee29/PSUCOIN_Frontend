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
    .page-header{
       margin-bottom:20px;
    }

    .dashedline{
        display:flex;
        margin-bottom:15px;
        margin-top:10px;
        border-bottom: 2px dashed #d9dee3;
    }

    .account-section{
        color: rgb(82, 82, 82);
    }

    .detail-head{
        font-family:'Krub-Regular';
        font-weight: 500;
        font-size: 20px;
        margin-bottom:20px;
    }

    .account-section-item{
        display: flex;
        flex-direction:row;
        font-family:'Krub-Regular';
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 8px;
    }

    .account-section-item-label{
        display:flex;
        max-width: 260px;
        flex-basis:220px;  
    }
    
    .label{
        flex-basis: calc(100% - 220px);
        max-width: calc(100% - 220px);
        word-wrap: break-word;
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

        .column-slide-change-hamburger{
            display:none;
        }

    @media only screen and (max-width:425px){
        .column-slide{
        display:none;
        }

        .column-slide-change-hamburger{
            display:flex;
        }

        .row-container{
            display:flex;
            flex-direction:column;
            width:100%;
            padding:0px;
        }

        .column-content{
            margin-top:80px;
            max-width:425px;
        }
        .account-section{
            display: flex;
            flex-direction:column;
        }

        .account-section-item{
        display: flex;
        font-size: 16px;
        margin-bottom: 8px;
        }

        .account-section-item-label{
            
            flex-basis:160px;  
        }

        .label{
            flex-basis: calc(100% - 160px);
            max-width: calc(100% - 160px);
            word-wrap: break-word;
        } 

        .column-slide-change-hamburger{
            display:flex;
            width:100%;
            justify-content:space-evenly;
            margin-bottom:10px;
        }
        
    }

    @media only screen and (max-width:320px){
        .column-slide{
        display:none;
        }

        .column-slide-change-hamburger{
            display:flex;
        }

        .row-container{
            display:flex;
            flex-direction:column;
            width:100%;
            padding:0px;
        }

        .column-content{
            margin-top:80px;
            max-width:320px;
        }
        .account-section{
            display: flex;
            flex-direction:column;
        }

        .account-section-item{
        display: flex;
        font-size: 15px;
        margin-bottom: 8px;
        }

        .account-section-item-label{
            
            flex-basis:160px;  
        }

        .label{
            flex-basis: calc(100% - 160px);
            max-width: calc(100% - 160px);
            word-wrap: break-word;
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
                                <div className="account-section-item-label"><FaKey className="icon-item" />กุญแจสาธารณะ</div>
                                <div className="label">{key.publickey}
                                    <CopyToClipboard text={key.publickey} onCopy={() => setCopied(true)}>
                                        <AiOutlineCopy className="icon-item-key" />
                                    </CopyToClipboard>
                                </div>
                            </div>

                            <div className="account-section-item">
                                <div className="account-section-item-label"><RiGitRepositoryPrivateLine className="icon-item" />กุญแจส่วนตัว </div>
                                <div className="label">{key.privatekey}
                                    <CopyToClipboard text={key.privatekey} onCopy={() => setCopied(true)}>
                                        <AiOutlineCopy className="icon-item-key" />
                                    </CopyToClipboard>
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
