import { useState } from "react";


const Index=()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return(
        <div>
            <h1>JWT Token with React</h1>
            <div>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} />
                <input type="text" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            {email} : {password}
        </div>
    )
}

export default Index;