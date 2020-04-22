import Login from "../src/components/Login/Login";
import { useEffect, useState } from "react";
import Topbar from "../src/components/Topbar/Topbar";
import TransferForm from "../src/components/Transfer/transferForm";

const Transfer = () => {

  const [token, setToken] = useState(null);

  const CheckToken = async () => {
    setToken(sessionStorage.getItem('token'))
  }

  useEffect(() => {
    CheckToken()
  }, [])

  if(token === null){
    return (
      <>
        <Login />
      </>
    )
  }
  else{
    return (
      <>
        <Topbar/>
        <TransferForm/>
      </>
    )
  }
  
}

export default Transfer;