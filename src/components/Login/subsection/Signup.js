import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Route from 'next/router';
import Axios from 'axios';
const StyledWrapper = styled.div`

    .container-signup{
        display:grid;
        grid-template-columns:1fr 350px;
        font-family:'Mali-Bold';
        background-color:white;
        max-width:960px;
        padding:20px;
        border-radius:20px;
    }

    .img-psu{
        width:400px;
    }

    .content-psuphuket{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .content-psuphuket h5{
        font-size:40px;
        text-align:center;
    }

    .register{
        font-size:35px;
        width:100%;
        margin-bottom:5px;
        
    }

    .content-signup{
        border-color:black;
        border-style:solid;
        border-radius:20px;
        padding:20px;

    }
    .content-signup h7{
        font-family:'Mali-Italic';
        color:red;
        font-size:13px;

    }

    input{
        color:blue;
    }

    .content-signup input{
        width:100%;
        margin:5px 0px 5px 0px;
    }

    .content-signup h5{
      margin-top:5px;
    }

    .BTN-register{
        width:100%;
    }

    

    @media only screen and (max-width:768px){
        .container-signup{
        display:grid;
        grid-template-columns:1fr;
        background-color:white;
        width:100%;
        padding:20px;
        border-radius:20px;
    }
    .img-psu{
        width:300px;
    }

    .register{
        font-size:25px;
        width:100%;
        margin-bottom:5px;
        
    }
    .content-psuphuket h5{
        font-size:25px;
        text-align:center;
    }
    }

    @media only screen and (max-width:480px){
        .container-signup{
        display:grid;
        grid-template-columns:1fr;
        background-color:white;
        width:450px;
        padding:20px;
        border-radius:20px;
    }
    .img-psu{
        width:300px;
    }
    .content-psuphuket h5{
        font-size:30px;
        text-align:center;
    }
    
    }

    @media only screen and (max-width:425px){
        .container-signup{
        display:grid;
        grid-template-columns:1fr;
        background-color:white;
        width:390px;
        padding:20px;
        border-radius:20px;
    }
    .img-psu{
        width:180px;
    }
    .content-psuphuket h5{
        font-size:15px;
        text-align:center;
    }

    .register{
        font-size:20px;
        width:100%;
        margin-bottom:5px;
        
    }

    .content-signup{
        border-color:black;
        border-style:solid;
        border-radius:20px;
        padding:10px;
    }

    .content-signup h5{
      margin-top:5px;
      font-size:15px;
    }

    }
    @media only screen and (max-width:375px){
        .container-signup{
        display:grid;
        grid-template-columns:1fr;
        background-color:white;
        width:300px;
        padding:20px;
        border-radius:20px;
    }
    .img-psu{
        width:180px;
    }
    .content-psuphuket h5{
        font-size:15px;
        text-align:center;
    }

    .register{
        font-size:20px;
        width:100%;
        margin-bottom:5px;
        
    }

    .content-signup{
        border-color:black;
        border-style:solid;
        border-radius:20px;
        padding:10px;
    }

    .content-signup h5{
      margin-top:5px;
      font-size:15px;
    }

    }

`

const Signup = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cardid, setCardid] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');


    const Registeraccount = async () => {

       
            const regis = await Axios.post('http://localhost:3001/signup/register', {
                firstname: name,
                lastname: surname,
                cid: cardid,
                username: username,
                password: password
            })
            alert(JSON.stringify(regis.data));
        
    }

    return (
        <StyledWrapper>

            <div className="container-signup">

                <div className="content-psuphuket">
                    <h5>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขต ภูเก็ต</h5>
                    <img className="img-psu" src="/static/images/coin.png" />
                </div>
                <form>
                    <div className="content-signup">
                        <span class="badge badge-pill badge-success register">สมัครบัญชี</span>
                        
                        <h5>ชื่อ</h5>
                        <input type="text" onChange={e => setName(e.target.value)} />
                        

                        <h5>นามสกุล</h5>
                        <input type="text" onChange={e => setSurname(e.target.value)} />
                        

                        <h5>เลขบัตรประชาชน</h5>
                        <input type="text" onChange={e => setCardid(e.target.value)} />
                        

                        <h5>ชื่อผู้ใช้งาน</h5>
                        <input onChange={e => setUsername(e.target.value)} />
                        

                        <h5>รหัสผ่าน</h5>
                        <input onChange={e => setPassword(e.target.value)} />
                        

                        <h5>ยืนยันรหัสผ่าน</h5>
                        <input onChange={e => setConfirmpassword(e.target.value)} />

                        <button type="submit" class="btn btn-primary BTN-register" onClick={() => Registeraccount()}>สมัคร</button>
                    </div>
                </form>

            </div>
            {JSON.stringify(name)}

        </StyledWrapper >
    )
}

export default Signup;