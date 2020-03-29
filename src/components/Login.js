import { useState, useEffect } from "react";
import axios from "axios";


const Login = () => {
    const [user, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [status, setStatus] = useState(false);
    const [token, setToken] = useState('');
    const [profile, setProfile] = useState([]);


    // const Checklogin = () => {
    //     const resultlogin = JSON.parse(localStorage.getItem('login'));
    //     if (resultlogin) {
    //         setToken(resultlogin.token);
    //     }

    // }

    // const login = async () => {
    //     const result = await axios.post('http://localhost:3001/auth/login',
    //         { username: user, password: pass })
    //     localStorage.setItem('login', JSON.stringify({
    //         token: result.data.access_token
    //     }))
    //     setStatus(true);
    //     Checklogin();
    // }

    // const getProfile = async () => {
    //     const result = await axios.get('http://localhost:3001/profile', {headers: {'Authorization': `Bearer ${token}`}})
    //     setProfile(JSON.stringify(result.data));
    // }


    // useEffect(() => {
    //     Checklogin();
    // }, [])

    // const login = async () => {
    //     const result = await axios.post('http://localhost:3001/auth/login',
    //         { username: user, password: pass })
    //     localStorage.setItem('login', JSON.stringify({
    //         token: result.data.access_token
    //     }))
    //     setStatus(true);
    //     Checklogin();
    // }
    const login = async () => {
        const result = await axios.post('http://localhost:3001/users/signin',
            { username: user, password: pass })
        sessionStorage.setItem('login', JSON.stringify({
            user: result.data
        }))

    }

    const getUser = async () => {

        const result = sessionStorage.getItem('login')
        console.log(result);

    }

    return (
        <div>
            {
                !status ?
                    <div>
                        <h1>PSU PASSPORT</h1>
                        <form>
                            Username : <input type="text" onChange={(e) => setUsername(e.target.value)} />
                            Password : <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        </form>
                        <button type="submit" onClick={() => login()}>Login</button>
                        <button type="submit" onClick={() => getUser()}>Get User</button>

                    </div>
                    :
                    <div>Hello
                        {/* <button type="submit" onClick={() => getProfile()}>getProfile</button>
                        {profile} */}
                    </div>
            }
        </div >
    )
}

export default Login;