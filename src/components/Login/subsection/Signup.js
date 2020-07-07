import styled from 'styled-components';

const StyledWrapper = styled.div`

    .container{
        display:flex;
        margin-top:50px;
    }

    .img-psu{
        width:560px;
    }

    .content-psuphuket{
        display:grid;
        grid-template-columns:1fr;
        text-align:center
    }
    .content-signup{
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
                    <img className="img-psu" src="/static/images/psuphuket.jpg"/>
                </div>

                <div className="content-signup">
                    <h5>สมัครบัญชี</h5>
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