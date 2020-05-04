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
        padding:30px 0px;
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
        font-weight: 700;
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
        font-size:24px;
        margin-left:30px;
        margin-bottom:15px;
        
    }
    .detail-hash{
        font-family:'Krub-Regular';
        font-size:15px;
        margin-left:30px;
        margin-bottom:15px;
        
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

const Slipmoney = () => {

    const [fromprofileuser, setFromProfile] = useState({});
    const [toprofileuser, setToProfile] = useState({});
    const [coinfrom, setCoinfrom] = useState(0);
    const [amount, setAmount] = useState(0);
    const [hash, setHash] = useState('');


    const getUser = async () => {
        const userfrom = await Axios.get(`http://localhost:3001/users/${sessionStorage.getItem('from')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        setFromProfile(userfrom.data[0]);
        const userto = await Axios.get(`http://localhost:3001/users/${sessionStorage.getItem('to')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        setToProfile(userto.data[0]);

        const balancefrom = await Axios.get(`http://localhost:3001/tranfer/balanceof/${sessionStorage.getItem('from')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } });
        setCoinfrom(balancefrom.data[0].coin);
        setAmount(sessionStorage.getItem('amount'));
        setHash(sessionStorage.getItem('hash'));

    }

    const success=()=>{
        sessionStorage.removeItem('hash','amount','from','to');
        sessionStorage.removeItem('amount');
        sessionStorage.removeItem('from');
        sessionStorage.removeItem('to');
        Route.push('/profile/info')
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <StyledWrapper>
            <div className="container">
                <div className="row-container">
                    <div className="page-header">
                        <h2>ใบเสร็จ</h2>
                    </div>
                    <div className="dashedline"></div>
                    <div className="detail-head">จาก</div>
                    <div className="page-body">
                        <div className="account-profile-detail">
                            <h3 className="detail-name">{fromprofileuser.sid} คุณ {fromprofileuser.firstname} {fromprofileuser.lastname} </h3>
                        </div>
                    </div>
                    <div className="detail-head">ถึง</div>
                    <div className="page-body">
                        <div className="account-profile-detail">
                            <h3 className="detail-name">{toprofileuser.sid} คุณ {toprofileuser.firstname} {toprofileuser.lastname} </h3>
                        </div>
                    </div>
                    <div className="page-body">
                        <div className="detail-head">จำนวนเงิน</div>
                        <h3 className="detail-name">{amount} PSUCOIN</h3>
                    </div>
                    <div className="page-body">
                        <div className="detail-head">รายละเอียดการโอน</div>
                        <h3 className="detail-hash"><a href={hash}>{hash}</a></h3>
                    </div>


                    <div className="dashedline"></div>
                    <button type="button" class="btn btn-outline-success btn-confirm" onClick={() => success()}>ยืนยัน</button>
                </div>

            </div>
        </StyledWrapper>
    )
}

export default Slipmoney;