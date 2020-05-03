import Login from "../src/components/Login/Login";
import { useEffect, useState } from "react";
import Topbar from "../src/components/Topbar/Topbar";
import TransferForm from "../src/components/Transfer/transferForm";
import SideDrawer from "../src/components/SideDrawer/SideDrawer";
import Backdrop from "../src/components/Backdrop/Backdrop";
import WithAuth from "../src/hoc/withAuth";

const Transfer = () => {
  let backdrop;
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  }

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div style={{ height: '100%' }}>
      <Topbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main style={{ marginTop: '64px' }}>
        <TransferForm />
      </main>
    </div>
  )

}

const WithTransfer =()=><WithAuth component={Transfer} />

export default WithTransfer;