import { useEffect, useState } from "react";
import Login from "../components/Login/Login";
import Route from 'next/router'


const WithAuth = (props) => {

    const WithAuthComponent = props.component;

    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
    }, [])


    if (token === null) {
        return (
            <>
                <Login/>
            </>
        )
    }
    else {
        return (
            <div><WithAuthComponent /></div>
        )
    }

}

export default WithAuth;