import { useState, useEffect } from "react";
import axios from "axios";


const Index = () => {
    const [user, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [token, setToken] = useState('');
    const body = { "username": "Frame", "password": "076271419" }

    const login = async () => {
        const result = await axios.post('http://localhost:3001/auth/login',
            { username: user, password: pass })
            console.log(result.data.access_token);
    }

    return (
        <div>
            <h1>JWT Token with Next</h1>
            <div>
                Email : <input type="text" onChange={(e) => setUsername(e.target.value)} />
                Password : <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={() => login()}>Login</button>
        </div>
    )
}

export default Index;