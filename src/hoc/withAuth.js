import { useEffect, useState } from "react";
import Login from "../components/Login/Login";
import Route from 'next/router'


const WithAuth = (props) => {

    const Newprops = props.data;

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
            <div><Newprops /></div>
        )
    }

}

export default WithAuth;