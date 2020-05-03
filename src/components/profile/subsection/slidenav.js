import styled from 'styled-components'
import { FaUserCircle } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdChangeHistory } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import Route from 'next/router';

const Stylenav = styled.nav`

    font-family:'Krub-Regular';
    color: rgb(82, 82, 82);
    font-size: 24px;
    font-weight:500;


ul{
    padding:0px 0px 0px 0px;
    list-style:none;
}

li{
    margin-bottom: 2rem;
}

a{
    display: flex;
    align-items: center;
    cursor:pointer;
    text-decoration: none;
    color: rgb(82, 82, 82);
}

span{
    margin-left:25px;
    color:
}

span:hover{
    color:#247d4f;
}

.icon-nav{
    color:#30b671;
}
   

    

`

const Slidenav = () => {


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
export default Slidenav;