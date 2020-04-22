import styled from 'styled-components'
import { useEffect, useState } from "react";
import Axios from "axios";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    background-color: #92e7d0;
    align-items: center;
    justify-content: center;
    .innerContainer{
        display: flex;
        flex-direction: column;
        width: 1200px;
        background-color: #fcf696;
        height: 80vh;
        align-items: center;
        justify-content: center;
        margin-top: 20px;   
    }
    .LayoutBox{
        display: flex;
        flex-direction: row;
        background-color:white;
        justify-content: space-between;
        width: 1100px;
        height: 70vh;
        padding:20px;
        box-shadow:0 0 6px 0 rgba(0,0,0,0.2);
    }
    .LayoutProfile{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items:center;
        width:400px;
    }
    .QRcode{
        width:200px;
    }
    .DetailBox{
        display: flex;
        flex-direction: column;
        height:500px;
        justify-content: space-evenly;

    }
    .LayoutHistory{
        display: flex;
        flex-direction: column;
        align-items:center;
        width:640px;
        border-radius:20px;
        padding:12px;
        box-shadow:0 0 6px 0 rgba(0,0,0,0.2);
    }
    .DetailText{
        display: flex;
        flex-direction: row;
        padding:12px 20px;
    }
    .Boxtext1{
        display: flex;
        justify-content: flex-start;
        width:170px;
        font-weight: 700;
    }
`

const ProfileForm = (props) => {

    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState({})

    const getUser = async () => {
        const user = await Axios.get(`http://localhost:3001/users/${sessionStorage.getItem('username')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        setProfile(user.data)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <StyledWrapper>
            <div className="innerContainer">
                <div className="LayoutBox">
                    <div className="LayoutProfile">
                        <img className="QRcode" src="https://th.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img>
                        <div>0 PSUCOIN</div>
                        <div className="DetailBox">
                            <div class="alert alert-primary DetailText" role="alert"><div className="Boxtext1">รหัสนักศึกษา</div><div>{profile.sid}</div></div>
                            <div class="alert alert-secondary DetailText" role="alert"><div className="Boxtext1">ชื่อ</div><div>{profile.firstname}</div></div>
                            <div class="alert alert-success DetailText" role="alert"><div className="Boxtext1">นามสกุล</div><div>{profile.lastname}</div></div>
                            <div class="alert alert-danger DetailText" role="alert"><div className="Boxtext1">เลขบัตรประชาชน</div><div>{profile.cid}</div></div>
                            <div class="alert alert-warning" role="alert"><div className="Boxtext1">Public Key</div><div>0x35dd8Bcd4f864835cc1D23Eb459506bdA8983cB2</div></div>
                            <div><button type="button" class="btn btn-info">Private Key</button></div>
                        </div>

                    </div>
                    <div className="LayoutHistory">
                        <div class="alert alert-warning" role="alert">HISTORY</div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    )
}

export default ProfileForm;