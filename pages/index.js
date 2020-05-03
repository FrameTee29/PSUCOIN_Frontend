import Login from "../src/components/Login/Login";
import { useEffect, useState } from "react";
import Route from 'next/router'


const Index = () => {

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
        {Route.push('/profile/info')}
      </>
    )
  }
  
}

export default Index;