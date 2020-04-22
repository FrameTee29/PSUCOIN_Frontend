import styled from 'styled-components'
import { useEffect, useState } from "react";
import Axios from "axios";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #92e7d0;
    align-items: center;
    justify-content: center;
    .innerContainer{
        display: flex;
        flex-direction: column;
        width: 1000px;
        background-color: #fcf696;
        height: 100vh;
        align-items: center;
        margin-top: 20px;
       
    }
`

const ProfileForm = (props) => {

    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState({})

    const getUser = async () => {
        const user = await Axios.get(`http://localhost:3001/users/${sessionStorage.getItem('username')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        setProfile(user.data)
    }

    useEffect(()=>{
        getUser()
    },[])
    
    return (
        <StyledWrapper>
            <div className="innerContainer">
                <div>{profile.sid}</div>
                <div>{profile.firstname}</div>
                <div>{profile.lastname}</div>
                <div>{profile.cid}</div>
            </div>
        </StyledWrapper>
    )
}

export default ProfileForm;