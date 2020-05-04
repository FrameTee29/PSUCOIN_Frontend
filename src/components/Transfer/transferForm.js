import styled from 'styled-components';
import { useEffect, useState } from "react";
import Axios from "axios";
import Route from 'next/router'

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
        max-width: 1000px;
    }
    .row-container{
        display:flex;
        flex-direction:column;
        width:100%;
        padding:60px 0px;
    }
    .info-content{  
        max-width: 860px;
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
    .detail-head{
        font-family:'Krub-Regular';
        font-weight: 500;
        font-size: 20px;
        margin-bottom:20px;
    }
    .account-profile{
        display: flex;
        align-items: center;
        width: 100%;
        margin: 10px 0px 30px 0px;
        box-shadow:1px 0px 5px 0px rgba(0,0,0,0.4);
        padding:20px 0px 20px 50px;
        border-radius:20px;
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
        font-size: 25px;
        margin-left: 10px;
        font-weight: 700;
        color: rgb(29, 77, 160);
    }
    .to-profile{
        display: flex;
        
        width: 100%;
        flex-direction:column;
        margin: 10px 0px 30px 0px;
        box-shadow:1px 0px 5px 0px rgba(0,0,0,0.4);
        padding:20px 50px 20px 50px;
        border-radius:20px;
    }
    .solidline{
        display:flex;
        width:100%;
        margin-bottom:10px;
        margin-top:10px;
        border-bottom: 2px solid #d9dee3;
        
    }
    .inputbox{
        width:100%;
        border:none;
        outline: none;
        font-size:25px;
    }
    .btn-confirm{
        margin-top:20px; 
    }


`

const TransferForm = () => {

    const [profileuser, setProfile] = useState({});
    const [coin, setCoin] = useState(0);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState(0);


    const getUser = async () => {
        const user = await Axios.get(`http://localhost:3001/users/${sessionStorage.getItem('username')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        setProfile(user.data[0]);
        setFrom(user.data[0].sid);
        const balance = await Axios.get(`http://localhost:3001/tranfer/balanceof/${sessionStorage.getItem('username')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } });
        setCoin(balance.data[0].coin);
    }

    const sendcoin = async () => {
        if (to == '') {
            alert("กรุณากรอกรหัสผู้รับ")
        }
        else {
            const user = await Axios.get(`http://localhost:3001/users/${to}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } });
            if(user.data[0] == undefined){
                alert("ไม่มีบัญชีนี้อยู่ในระบบ กรุณากรอกรหัสผู้รับใหม่")
            }
            else{
                sessionStorage.setItem('from', from);
                sessionStorage.setItem('to', to);
                Route.push('/transfer/checkdetail')
            }


        }

    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <StyledWrapper>
            <div className="container">
                <div className="row-container">
                    <div className="page-header">
                        <h2>โอนเหรียญ</h2>
                    </div>
                    <div className="dashedline"></div>
                    <div className="detail-head">จาก</div>
                    <div className="page-body">
                        <div className="account-profile">
                            <div className="account-profile-detail">
                                <h3 className="detail-name">{profileuser.sid}</h3>
                                <h3 className="detail-name">คุณ {profileuser.firstname} {profileuser.lastname} </h3>
                                <p className="detail-balance-coin">เหรียญสะสม<strong>{coin} เหรียญ</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-head">ถึง</div>
                    <div className="to-profile">
                        <div className="to-profile-detail">
                            <p className="detail-balance-coin">กรอกรหัสนักศึกษา</p>
                            <input className="inputbox" onChange={e => setTo(e.target.value)} />
                        </div>
                        <div className="solidline"></div>
                    </div>
                    <div className="dashedline"></div>
                    <button type="button" class="btn btn-outline-success btn-confirm" onClick={() => sendcoin()}>ยืนยัน</button>
                </div>

            </div>
        </StyledWrapper>
    )
}

export default TransferForm;