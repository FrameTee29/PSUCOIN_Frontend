import Login from "../src/components/Login/Login";
import { useEffect, useState } from "react";
import Topbar from "../src/components/Topbar/Topbar";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import ProfileForm from "../src/components/profile/profileForm";
import SideDrawer from "../src/components/SideDrawer/SideDrawer";

const Profile = () => {

    const [token, setToken] = useState(null);

    const CheckToken = async () => {
        setToken(sessionStorage.getItem('token'))

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
            <div style={{height:'100%'}}>
                <Topbar />
                <SideDrawer/>
                <main style={{marginTop:'64px'}}>
                    <ProfileForm/>
                </main>
            </div>
        )
    }

}

export default Profile;