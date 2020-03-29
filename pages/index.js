import { useState, useEffect } from "react";
import axios from "axios";


const Index = () => {
    const [user, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [status, setStatus] = useState(false);
    const [token, setToken] = useState('');
    const [profile,setProfile] = useState([]);


    const Checklogin = () => {
        const resultlogin = JSON.parse(localStorage.getItem('login'));
        if (resultlogin) {
            setToken(resultlogin.token);
        }

    }

    const login = async () => {
        const result = await axios.post('http://localhost:3001/auth/login',
            { username: user, password: pass })
        localStorage.setItem('login', JSON.stringify({
            token: result.data.access_token
        }))
        setStatus(true);
        Checklogin();
    }

    const getProfile = async () => {
        const result = await axios.get('http://localhost:3001/profile', {headers: {'Authorization': `Bearer ${token}`}})
        setProfile(JSON.stringify(result.data));
    }


    useEffect(() => {
        Checklogin();
    }, [])

    return (
        <div>
            {
                !status ?
                    <div>
                        <h1>JWT Token with Next</h1>
                        <form>
                            Email : <input type="text" onChange={(e) => setUsername(e.target.value)} />
                            Password : <input type="text" onChange={(e) => setPassword(e.target.value)} />
                        </form>
                        <button type="submit" onClick={() => login()}>Login</button>

                    </div>
                    :
                    <div>Hello
                        <button type="submit" onClick={() => getProfile()}>getProfile</button>
                        {profile}
                    </div>
            }
        </div >
    )
}

export default Index;