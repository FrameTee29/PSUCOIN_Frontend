import styled from 'styled-components'
import { FaUserCircle } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdChangeHistory } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import Link from 'next/link';
import Route from 'next/router';

const Stylenav = styled.nav`

    height:auto;
    

ul{
    font-family:'Krub-Regular';
    color: rgb(82, 82, 82);
    font-size: 15px;
    font-weight:500;
    height:40px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    padding:0px;
    list-style:none;
}

li{
    margin-bottom: 2rem;
}

a{
    display: flex;
    flex-direction:column;
    align-items: center;
    cursor:pointer;
    text-decoration: none;
    color: rgb(82, 82, 82);
}
span:hover{
    color:#247d4f;
}

.icon-nav{
    color:#30b671;
}
   
@media only screen and (max-width:425px){
    ul{
    font-family:'Krub-Regular';
    color: rgb(82, 82, 82);
    font-size:20px;
    font-weight:500;
    display:grid;
    grid-template-columns:200px 200px;
    padding:0px;
    list-style:none;
}

}
@media only screen and (max-width:375px){
    ul{
    font-family:'Krub-Regular';
    color: rgb(82, 82, 82);
    font-size: 20px;
    font-weight:500;
    display:grid;
    grid-template-columns:160px 160px;
    padding:0px;
    list-style:none;
}

}
    

`

const Slidenav2 = () => {


    const removesession = () => {
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('token')
        Route.push('/')
    }

    return (
        <Stylenav>
            <ul>
                <li>
                    <a href='/profile/info'>
                       <FaUserCircle className="icon-nav"/>
                        <span>ข้อมูลผู้ใช้</span>
                    </a>
                </li>
                <li>
                    <a href='/profile/account'>
                        <MdAccountBalanceWallet className="icon-nav"/>
                        <span>บัญชีของฉัน</span>
                    </a>
                </li>
                <li>
                    <a href='/profile/transaction'>
                        <MdChangeHistory className="icon-nav"/>
                        <span>ประวัติธุรกรรม</span>
                    </a>
                </li>
                <li>
                    <a onClick={() => removesession()}>
                        <GoSignOut className="icon-nav"/>
                        <span>ออกจากระบบ</span>
                    </a>
                </li>
            </ul>
        </Stylenav>
    )
}
export default Slidenav2;