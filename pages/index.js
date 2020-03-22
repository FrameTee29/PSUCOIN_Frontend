import { useState, useEffect } from "react";
import axios from "axios";


const Index = () => {
    const [user, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [token, setToken] = useState('');
    const body = { "username": "Frame", "password": "076271419" }
    const work = false;

    const login = async () => {
        const result = await axios.post('http://localhost:3001/auth/login',
            { username: user, password: pass })
        console.log(result.data.access_token);

        localStorage.setItem('login', JSON.stringify({
            token: result.data.access_token
        }))
    }

    return (
        <div>
            <h1>JWT Token with Next</h1>
            <form>
                Email : <input type="text" onChange={(e) => setUsername(e.target.value)} />
                   Password : <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </form>
            <button type="submit" onClick={() => login()}>Login</button>
        </div >
    )
}

export default Index;