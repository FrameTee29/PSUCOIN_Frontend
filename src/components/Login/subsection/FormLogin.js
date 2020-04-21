import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Route from 'next/router';
import { useDispatch } from 'react-redux';


const StyledWrapper = styled.div`

        
    @media (min-width: 320px){
        .heightForm{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            min-width:310px;
            height:400px;
            background-color:white;
            border-radius:20px;
            }
    }
    @media (min-width: 375px){
        .heightForm{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            min-width:370px;
            height:400px;
            background-color:white;
            border-radius:20px;
            }
    }
    @media (min-width: 2560px){
        .heightForm{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            min-width:500px;
            height:500px;
            background-color:white;
            border-radius:20px;
            }
    }  

        
`


const FormLogin = () => {

    const Dispatch=useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const Signin = async () => {
        const result = await Axios.post('http://localhost:3001/auth/login', { username: username, password: password });
        sessionStorage.setItem('token', result.data.access_token)
        setToken(result.data.access_token)
        Route.push('/Home');
    }

    const getUser = async () => {

    }

    return (
        <StyledWrapper>
            <form class="text-center border border-light p-5 heightForm" action="#!">
                <p class="h4 mb-4">PSU PASSPORT</p>
                <input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                <input type="password" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button class="btn btn-info btn-block" type="submit" onClick={() => Signin()}>Sign in</button>
            </form>
        </StyledWrapper >
    )

}

export default FormLogin;