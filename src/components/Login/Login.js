import FormLogin from "./subsection/FormLogin"
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Route from 'next/router';
import { useDispatch } from 'react-redux';

const StyledWrapper = styled.div`
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family:'BalooPaaji2-Bold';
    .container{
        display:flex;
        max-width:960px;
        width : 100%;
        margin: 0 auto;
        justify-content:space-between;
    }

    header{
        width:100%;
        height:120px;
        background:#30b671;
        border-top:5px solid #3075b6;
    }

    .nav-grid{
        display:grid;
        grid-template-columns:225px 1fr;
        
    }
    .logo{
        margin-top:20px;
        color:#fff;
    }

    .logo h1{
        margin:0px;
        text-transform:uppercase;
    }
    .logo span{
        font-size:12px;
    }
    div.input-id-pass{
        display:grid;
        grid-template-columns:repeat(3,1fr);
    }

    .input-id-pass{
        margin:0px;
        text-transform:uppercase;
        justify-content:center;
        align-items:center;
    }
    .input-id-pass-div{
        width:170px;
    }
    .input-id-pass input{ 
        width:150px;
    }

    .input-id-pass-button{
        display:flex;
        justify-content:center;
    }
   
`

const Login = () => {

    const dispatch=useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);

    const Signin = async () => {
        const result = await Axios.post('http://localhost:3001/auth/login', { username: username, password: password });
        sessionStorage.setItem('token', result.data.access_token)
        sessionStorage.setItem('username', username)
        setToken(result.data.access_token)
        Route.push('/profile/info');
    }

    return (
        <StyledWrapper>
            <header>
                <nav>
                    <div className="container">

                        <div className="nav-grid">
                            <div className="logo">
                                <h1>Psucoin</h1>
                                <span>Cryptocurrency </span>
                            </div>
                        </div>


                        <div className="input-id-pass">
                            <div className="input-id-pass-div">
                                <h5>Username</h5>
                                <input type="text"  onChange={e => setUsername(e.target.value)}/>
                            </div>
                            <div className="input-id-pass-div">
                                <h5>Password</h5>
                                <input type="password" onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="input-id-pass-button">
                                <button type="button" class="btn btn-primary" onClick={() => Signin()}>SIGN IN</button>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
        </StyledWrapper>
    )
}

export default Login;