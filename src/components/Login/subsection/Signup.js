import styled from 'styled-components';

const StyledWrapper = styled.div`

    /* background-image: url('/static/images/psuphuket_black.jpg');
    background-repeat: no-repeat;
    background-size: cover; */
    height:auto;

    .container{
        display:grid;
        grid-template-columns:1fr 1fr;
    }
`

const Signup = () => {
    return (
        <StyledWrapper>
            <div className="container">

                <div>
                    รูปภาพ
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