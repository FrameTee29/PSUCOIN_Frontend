import Login from "../../src/components/Login/Login";
import { useEffect, useState } from "react";
import Topbar from "../../src/components/Topbar/Topbar";
import TransferForm from "../../src/components/Transfer/transferForm";
import Checkdetailform from "../../src/components/Transfer/checkdetailfrom";
import SideDrawer from "../../src/components/SideDrawer/SideDrawer";
import Backdrop from "../../src/components/Backdrop/Backdrop";
import WithAuth from "../../src/hoc/withAuth";
import Slipmoney from "../../src/components/Transfer/slipmoney";

const Checkdetail = () => {
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
      <main style={{ marginTop: '0px' }}>
        <Slipmoney/>
      </main>
    </div>
  )

}

const WithTransfer =()=><WithAuth component={Checkdetail} />

export default WithTransfer;