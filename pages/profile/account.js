import { useEffect, useState } from "react";
import Topbar from "../../src/components/Topbar/Topbar";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import ProfileAccount from "../../src/components/profile/profileAccount";
import SideDrawer from "../../src/components/SideDrawer/SideDrawer";
import Backdrop from "../../src/components/Backdrop/Backdrop";
import WithAuth from "../../src/hoc/withAuth";

const Account = () => {


    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen)
    };

    const backdropClickHandler = () => {
        setSideDrawerOpen(false);
    }
    let backdrop;


    if (sideDrawerOpen) {
        backdrop = <Backdrop click={backdropClickHandler} />;
    }

    return (
        <div style={{ height: '100%' }}>
            <Topbar drawerToggleClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={sideDrawerOpen} />
            {backdrop}
            <main style={{ marginTop: '64px' }}>
                <ProfileAccount/>
            </main>
        </div>
    )
}

const withAccount = () => <WithAuth component={Account} />

export default withAccount;