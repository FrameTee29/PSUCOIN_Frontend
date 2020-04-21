import Login from "../src/components/Login/Login";
import { useEffect, useState } from "react";
import Topbar from "../src/components/Topbar/Topbar";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";

const Profile = () => {

    const [token, setToken] = useState(null);
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState({})

    const CheckToken = async () => {
        setToken(sessionStorage.getItem('token'))
        setUsername(sessionStorage.getItem('username'))

    }


    const getUser = async () => {
        const user = await Axios.get(`http://localhost:3001/users/${username}`, { headers: { Authorization: `Bearer ${token}` } })

        setProfile(user.data)
    }

    useEffect(() => {
        CheckToken()
    }, [])

    if (token === null) {
        return (
            <>
                <Login />
            </>
        )
    }
    else {
        return (
            <>
                <Topbar />
                <button onClick={() => getUser()}>Click</button>
                <div>{profile.sid}</div>
                <div>{profile.firstname}</div>
                <div>{profile.lastname}</div>
                <div>{profile.cid}</div>

            </>
        )
    }

}

export default Profile;