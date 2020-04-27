import Login from "../src/components/Login/Login";
import { useEffect, useState } from "react";
import Topbar from "../src/components/Topbar/Topbar";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import ProfileForm from "../src/components/profile/profileForm";
import SideDrawer from "../src/components/SideDrawer/SideDrawer";
import Backdrop from "../src/components/Backdrop/Backdrop";

const Profile = () => {

    const [token, setToken] = useState(null);
    const [sideDrawerOpen,setSideDrawerOpen] = useState(false)

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen)
    };

    const backdropClickHandler=()=>{
        setSideDrawerOpen(false);
    }



    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
    }, [])


    let backdrop;

    if (token === null) {
        return (
            <>
                <Login />
            </>
        )
    }
    else {

        if(sideDrawerOpen){
            backdrop=<Backdrop  click={backdropClickHandler}/>;
        }

        return (
            <div style={{ height: '100%' }}>
                <Topbar  drawerToggleClickHandler={drawerToggleClickHandler}/>
                <SideDrawer show={sideDrawerOpen} />
                {backdrop}
                <main style={{ marginTop: '64px' }}>
                    <ProfileForm />
                </main>
            </div>
        )
    }

}

export default Profile;