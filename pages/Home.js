import Login from "../src/components/Login/Login";
import { useEffect, useState } from "react";
import Topbar from "../src/components/Topbar/Topbar";
import HomeForm from "../src/components/Home/HomeForm";

const Home = () => {

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
        <HomeForm/>
      </>
    )
  }
  
}

export default Home;