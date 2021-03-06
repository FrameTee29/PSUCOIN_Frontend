import styled from 'styled-components'
import { useEffect, useState } from "react";
import Axios from "axios";
import { FaUserCircle, } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdChangeHistory } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FiCreditCard } from "react-icons/fi";
import Slidenav from './subsection/slidenav';
import DrawerToggleButtonnav from '../SideDrawer/DrawerToggleButtonnav';
import SideDrawer from '../SideDrawer/SideDrawer';
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

    .account-profile{
        display: flex;
        align-items: center;
        width: 100%;
        margin: 20px 0px;
    }

    .account-profile-img{
        display:flex;
        margin-right:30px;
    }

    .img_profile{
        width:80px;
        height:80px;
        border-radius:40px;
    }

    .detail-name{
        font-family:'Krub-Regular';
    }
  
    .detail-balance-coin{
        font-family:'Krub-Regular';
    }

    .detail-balance-coin strong{
        font-family:'Krub-Regular';
        font-size: 36px;
        margin-left: 10px;
        font-weight: 700;
        color: rgb(29, 77, 160);
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
        display:flex;
        max-width: 300px;
    }

    .column-slide-change-hamburger{
            display:none;
        }
    


    @media only screen and (max-width:768px){
        
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

        
        

}

    @media only screen and (max-width:425px){
        .row-container{
            display:flex;
            flex-direction:column;
            width:100%;
            padding:0px;
        }

        .column-content{
            margin-top:80px;
            max-width: 425px;
        }

        .account-profile{
            display: flex;
            flex-direction:column; 
            align-items:center;
            justify-content:center;
        }
    
        .img_profile{
            width:200px;
            height:200px;
            border-radius:100px;
        }
        .account-profile-img{
            margin:0px;
        }

        .page-header h2{
            display:flex;
            width:100%;
            font-size:25px;
            margin-bottom:10px;
        }

        .account-profile-detail{
            margin-top:10px;
        }
    
        .account-section-item-label{
            display: flex;
            align-items: center;
            flex-basis: 180px;
            font-size:15px;
        
        }
        .column-slide{
            display:none;
        }

        .column-slide-change-hamburger{
            display:flex;
            width:100%;
            justify-content:space-evenly;
            margin-bottom:10px;
        }

        .detail-name{
            font-size:18px;
            font-family:'Krub-Regular';
        }
       
    }
    @media only screen and (max-width:415px){
        .column-slide{
            display:none;
        }
        .row-container{
            display:flex;
            flex-direction:column;
            width:100%;
            padding:0px;
        }

        .column-content{
            max-width: 425px;
        }

        .account-profile{
            display: flex;
            flex-direction:column; 
            align-items:center;
            justify-content:center;
        }
    
        .page-header h2{
            display:flex;
            width:100%;
            font-size:25px;
            margin-bottom:10px;
        }
        .img_profile{
        width:200px;
        height:200px;
        border-radius:100px;
        }
        .account-profile-img{
            margin:0px;
        }

        .account-profile-detail{
            margin-top:10px;
        }
    
        .account-section-item-label{
            display: flex;
            align-items: center;
            flex-basis: 160px;
            font-size:15px;
        }

        .account-section-item-label-name{
            font-size:20px;
        }

        .column-slide{
            display:none;
        }

        .detail-name{
            font-size:18px;
            font-family:'Krub-Regular';
        }
    }

    @media only screen and (max-width:375px){
        .column-slide{
            display:none;
        }
        .row-container{
            display:flex;
            flex-direction:column;
            width:100%;
            padding:0px;
        }

        .column-content{
            max-width: 375px;
        }

        .account-profile{
            display: flex;
            flex-direction:column; 
            align-items:center;
            justify-content:center;
        }

        .page-header h2{
            display:flex;
            width:100%;
            font-size:25px;
            margin-bottom:10px;
        }
    
        .img_profile{
            width:200px;
            height:200px;
            border-radius:100px;
        }
        .account-profile-img{
            margin:0px;
        }

        .account-profile-detail{
            margin-top:10px;
        }
    
        .account-section-item-label{
            display: flex;
            align-items: center;
            flex-basis: 180px;
            font-size:15px;
        }

        .account-section-item-label-name{
            font-size:15px;
        }

        .detail-name{
            font-size:18px;
            font-family:'Krub-Regular';
        }
    }

    @media only screen and (max-width:320px){
        
        .row-container{
            display:flex;
            flex-direction:column;
            width:100%;
            padding:0px;
        }

        .column-content{
            max-width: 320px;
        }

        .column-slide{
            display:none;
        }

        .account-profile{
            display: flex;
            flex-direction:column; 
            align-items:center;
            justify-content:center;
        }

        .detail-balance-coin strong{
            font-family:'Krub-Regular';
            font-size: 20px;
            margin-left: 10px;
            font-weight: 700;
            color: rgb(29, 77, 160);
        }
    
        .page-header h2{
            display:flex;
            width:100%;
            font-size:25px;
            margin-bottom:10px;
        }
        
  
        .img_profile{
            width:200px;
            height:200px;
            border-radius:100px;
        }
        .account-profile-img{
            margin:0px;
        }

        .account-profile-detail{
            margin-top:10px;
        }
    
        .account-section-item-label{
            display: flex;
            align-items: center;
            flex-basis: 130px;
            font-size:11px;
        }

        .account-section-item-label-name{
            font-size:13px;
        }


        .detail-name{
            font-size:18px;
            font-family:'Krub-Regular';
        }
    }
    
`

const profileINFO = (props) => {
    const [statusprivatekey, setStatusprivatekey] = useState(false)
    const [username, setUsername] = useState('');
    const [profileuser, setProfile] = useState({});
    const [key, setKey] = useState({});
    const [coin, setCoin] = useState(0);

    const getUser = async () => {
        const user = await Axios.get(`http://localhost:3001/users/${sessionStorage.getItem('username')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        setProfile(user.data[0]);
        setKey(user.data[0].profile);

        const balance = await Axios.get(`http://localhost:3001/tranfer/balanceof/${sessionStorage.getItem('username')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } });
        setCoin(balance.data[0].coin);
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
                                <h2>ข้อมูลผู้ใช้งาน</h2>
                            </div>
                            <div className="dashedline"></div>
                            <div className="page-body">
                                <div className="account-profile">
                                    <div className="account-profile-img">
                                        <img src="/static/images/picture2.png" className="img_profile" onClick={() => getBalance()} />
                                    </div>
                                    <div className="account-profile-detail">
                                        <h3 className="detail-name">คุณ {profileuser.firstname} {profileuser.lastname} </h3>
                                        <p className="detail-balance-coin">เหรียญสะสม<strong>{coin} PSUCOIN</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-section">
                            <div className="detail-head">ข้อมูลส่วนตัว</div>
                            <div className="account-section-item">
                                <div className="account-section-item-label"><AiOutlineFieldNumber className="icon-item" />รหัสนักศึกษา</div>
                                <div className="account-section-item-label-name">
                                    <span className="label">{profileuser.sid}</span>
                                </div>
                            </div>
                            <div className="account-section-item">
                                <div className="account-section-item-label"><FaUserCircle className="icon-item" />ชื่อ</div>
                                <div className="account-section-item-label-name">
                                    <span className="label">คุณ {profileuser.firstname} {profileuser.lastname}</span>
                                </div>
                            </div>
                            <div className="account-section-item">
                                <div className="account-section-item-label"><FiCreditCard className="icon-item" />เลขบัตรประชาชน</div>
                                <div className="account-section-item-label-name">
                                    <span className="label">{profileuser.cid}</span>
                                </div>
                            </div>
                        </div>
                        <div className="dashedline"></div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    )
}

export default profileINFO;

