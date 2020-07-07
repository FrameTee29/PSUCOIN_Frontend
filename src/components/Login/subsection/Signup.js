import styled from 'styled-components';

const StyledWrapper = styled.div`

    .container{
        display:flex;
    }

    .img-psu{
        width:400px;
    }

    .content-psuphuket{
       display:flex;
       flex-direction:column;
       justify-content:center;
       align-items:center;
       text-align:center;
    }
    .content-psuphuket h5{
        font-size:40px;
        color:white;
    }

    .content-signup{
        background-color:white;
        border-color:black;
        border-style:solid;
        border-radius:20px;
        padding:50px;
    }

`

const Signup = () => {
    return (
        <StyledWrapper>

            <div className="container">

                <div className="content-psuphuket">
                   <h5>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขต ภูเก็ต</h5> 
                    <img className="img-psu" src="/static/images/coin.png"/>
                </div>

                <div className="content-signup">
                    <h3>สมัครบัญชี</h3>
                    <h5>ชื่อ</h5>
                    <input />
                    <h5>นามสกุล</h5>
                    <input />
                    <h5>เลขบัตรประชาชน</h5>
                    <input />
                    <h5>อีเมล์</h5>
                    <input />
                    <h5>Username</h5>
                    <input />
                    <h5>Password</h5>
                    <input />
                    <h5>Confirm password</h5>
                    <input />
                    <button>สมัคร</button>
                </div>

            </div>

        </StyledWrapper >
    )
}

export default Signup;