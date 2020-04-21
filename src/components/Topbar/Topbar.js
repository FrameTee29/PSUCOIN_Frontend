
import styled from 'styled-components';
import Link from 'next/link';
const Menubar = styled.div`
display: flex;
flex-direction:row;
height: 50px;
background-color: #ffffff;
align-items:center;
justify-content: space-between;
font-family: 'Mali', cursive;
font-weight:bold;
padding:5px;
color: rgb(0, 131, 253);

.barmenu{
    display: flex;
    width: 600px;
    flex-direction: row;
    align-items:center;
    justify-content: space-around;
}
.PSU{
    width: 170px;
    height: 60px;
}

.btn-menu{
    cursor: pointer;
    background-color: white;
    border: none;
    outline: none;
    font-family: 'Mali', cursive;
    font-size: 15px;
    font-weight: 700;
    transition: background-color 0.5s,font-weight 1s,border-radius 1s;
}
.btn-menu:hover{
    background-color: #92e7d0;
    border: none;
    outline: none;
    font-weight: bold;
    height: 30px;
    font-size: 15px;
    border-radius: 20px;
    font-family: 'Mali', cursive;
}
.alink{
    color:black;
    text-decoration: none;
}

`
const menubar = () => {
    return (
        <Menubar>
            <div className="barmenu">
                <Link href="/Home">
                    <img className="PSU" src="https://www.phuket.psu.ac.th/wp-content/uploads/2019/03/cropped-PSU_PHUKET-EN.png"></img>
                </Link>
                <Link href="/">
                    <button className="btn-menu">Home</button>
                </Link>
                <Link href="/profile">
                    <button className="btn-menu">Profile</button>
                </Link>
                <button className="btn-menu"><a className="alink" href="https://miniprojectclient.firebaseapp.com/">Activity</a></button>
                <Link href="/transfer">
                    <button className="btn-menu">Transfer</button>
                </Link>
            </div>
        </Menubar>
    )
}

export default menubar;