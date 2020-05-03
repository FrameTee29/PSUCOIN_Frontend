import styled from 'styled-components'
import { useEffect, useState } from "react";
import Axios from "axios";

import { FaUserCircle } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdChangeHistory } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import Slidenav from './subsection/slidenav';

const StyledWrapper = styled.div`
    display:block;
    width:100%;
    font-family:'Krub-Bold';

    
    @media (min-width: 425px){
        .container {
            padding: 0px 20px;
        }
    } 
    @media (min-width: 1024px){
        .container {
            padding: 0px 40px;
        }
    } 
    @media (min-width: 1440px){
        .container {
            padding: 0px 80px;
        }
    } 
    .container{
        position: relative;
        width: 100%;
        max-width: 1300px;
    }

    .row-container{
        display:flex;
        width:100%;
        padding:60px 0px;
    }
    
    .column-slide{
        flex-basis: 260px;
        max-width: 260px;
    }

    .column-content{
        flex-basis: calc(100% - 260px);
        max-width: calc(100% - 260px);
    }

    .info-content{
        
        max-width: 100%;
    }

    .page-header{
       display:flex;
       width:100%;
       margin-bottom:10px;
    }

    .dashedline{
        display:flex;
        width:100%;
        margin-bottom:10px;
        margin-top:10px;
        border-bottom: 2px dashed #d9dee3;
    }

    .account-profile{
        display: flex;
        align-items: center;
        width: 100%;
        margin: 20px 0px;
    }

    nav{
        font-family:'Krub-Regular';
        color: rgb(82, 82, 82);
        font-size: 24px;
        font-weight:500;
    }

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

const profileINFO = (props) => {
    const [statusprivatekey, setStatusprivatekey] = useState(false)
    const [username, setUsername] = useState('');
    const [profileuser, setProfile] = useState({});
    const [key, setKey] = useState({});

    const getUser = async () => {
        const user = await Axios.get(`http://localhost:3001/users/${sessionStorage.getItem('username')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        setProfile(user.data[0])
        setKey(user.data[0].profile)

    }


    useEffect(() => {
        getUser()
    }, [])

    return (
        <StyledWrapper>
            <div className="container">
                <div className="row-container">
                    <div className="column-slide">
                        <Slidenav />
                    </div>
                    <div className="column-content">
                        <div className="info-content">
                            <div className="page-header">
                                <h2>ข้อมูลผู้ใช้งาน</h2>
                            </div>
                            <div className="dashedline"></div>
                            <div className="page-body">
                                <div className="account-profile">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    )
}

export default profileINFO;


//แบบเก่า



// display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 94.8vh;
//     background-color: white;
//     align-items: center;
//     justify-content: center;
//     .innerContainer{
//         display: flex;
//         flex-direction: column;
//         width: 1200px;
//         background-color: #fcf696;
//         height: 80vh;
//         align-items: center;
//         justify-content: center;
//     }
//     .LayoutBox{
//         display: flex;
//         flex-direction: row;
//         background-color:white;
//         justify-content: space-between;
//         width: 1100px;
//         height: 70vh;
//         padding:20px;
//         box-shadow:0 0 6px 0 rgba(0,0,0,0.2);
//     }
//     .LayoutProfile{
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items:center;
//         width:400px;
//     }
//     .QRcode{
//         width:150px;
//     }
//     .DetailBox{
//         display: flex;
//         flex-direction: column;
//         height:500px;
//         justify-content: space-evenly;

//     }
//     .LayoutHistory{
//         display: flex;
//         flex-direction: column;
//         align-items:center;
//         width:640px;
//         border-radius:20px;
//         padding:12px;
//         box-shadow:0 0 6px 0 rgba(0,0,0,0.2);
//     }
//     .DetailText{
//         display: flex;
//         flex-direction: row;
//         padding:12px 20px;
//     }
//     .Boxtext1{
//         display: flex;
//         justify-content: flex-start;
//         width:170px;
//         font-weight: 700;
//     }
//     .Sizebox{
//         max-width:404px;
//         word-wrap: break-word;
//     }

// <div className="innerContainer">
// <div className="LayoutBox">
//     <div className="LayoutProfile">
//         <img className="QRcode" src="https://th.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img>
//         <div>{key.coin} PSUCOIN</div>
//         <div className="DetailBox">
//             <div class="alert alert-primary DetailText" role="alert"><div className="Boxtext1">รหัสนักศึกษา</div><div>{profileuser.sid}</div></div>
//             <div class="alert alert-secondary DetailText" role="alert"><div className="Boxtext1">ชื่อ</div><div>{profileuser.firstname}</div></div>
//             <div class="alert alert-success DetailText" role="alert"><div className="Boxtext1">นามสกุล</div><div>{profileuser.lastname}</div></div>
//             <div class="alert alert-danger DetailText" role="alert"><div className="Boxtext1">เลขบัตรประชาชน</div><div>{profileuser.cid}</div></div>
//             <div class="alert alert-warning" role="alert"><div className="Boxtext1">Public Key</div><div>{key.publickey}</div></div>
//             <div>{!statusprivatekey?
//             <button type="button" class="btn btn-info" onClick={()=>setStatusprivatekey(true)}>Private Key</button>
//             :
//             <div class="alert alert-warning Sizebox" role="alert" onClick={()=>setStatusprivatekey(true)}><div className="Boxtext1">Private Key</div><div>{key.privatekey}</div></div>}</div>
//         </div>

//     </div>
//     <div className="LayoutHistory">
//         <div class="alert alert-warning" role="alert">HISTORY</div>
//         <table class="table">
//             <thead class="table-success">
//                 <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">From</th>
//                     <th scope="col">To</th>
//                     <th scope="col">Amout</th>
//                     <th scope="col">Detail</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <th scope="row">1</th>
//                     <td>6035512080</td>
//                     <td>6035512021</td>
//                     <td>10 </td>
//                     <td><button type="button" class="btn btn-light">Click</button></td>
//                 </tr>
//                 <tr>
//                     <th scope="row">2</th>
//                     <td>6035512080</td>
//                     <td>6035512100</td>
//                     <td>20 </td>
//                     <td><button type="button" class="btn btn-light">Click</button></td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
// </div>
// </div> 