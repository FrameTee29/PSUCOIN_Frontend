import styled from 'styled-components';

const StyledWrapper = styled.div`

    .container-signup{
        display:grid;
        grid-template-columns:1fr 350px;
        font-family:'Mali-Bold';
        background-color:white;
        max-width:960px;
        padding:20px;
        border-radius:20px;
    }

    .img-psu{
        width:400px;
    }

    .content-psuphuket{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .content-psuphuket h5{
        font-size:40px;
        text-align:center;
    }

    .register{
        font-size:35px;
        width:100%;
        margin-bottom:5px;
        
    }

    .content-signup{
        border-color:black;
        border-style:solid;
        border-radius:20px;
        padding:20px;
  

    }

    .content-signup input{
        width:100%;
        margin:5px 0px 5px 0px;
    }

    .content-signup h5{
      margin-top:5px;
    }

    .BTN-register{
        width:100%;
    }

    

    @media only screen and (max-width:480px){
        .container-signup{
        display:grid;
        grid-template-columns:1fr;
        background-color:white;
        width:450px;
        padding:20px;
        border-radius:20px;
    }
    .img-psu{
        width:300px;
    }
    .content-psuphuket h5{
        font-size:30px;
        text-align:center;
    }
    }

    @media only screen and (max-width:320px){
        .container-signup{
        display:grid;
        grid-template-columns:1fr;
        background-color:white;
        width:300px;
        padding:20px;
        border-radius:20px;
    }
    .img-psu{
        width:180px;
    }
    .content-psuphuket h5{
        font-size:15px;
        text-align:center;
    }

    .register{
        font-size:20px;
        width:100%;
        margin-bottom:5px;
        
    }

    .content-signup{
        border-color:black;
        border-style:solid;
        border-radius:20px;
        padding:10px;
    }

    .content-signup h5{
      margin-top:5px;
      font-size:15px;
    }

    }

`

const Signup = () => {
    return (
        <StyledWrapper>

            <div className="container-signup">

                <div className="content-psuphuket">
                    <h5>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขต ภูเก็ต</h5>
                    <img className="img-psu" src="/static/images/coin.png" />
                </div>

                <div className="content-signup">
                    <span class="badge badge-pill badge-success register">สมัครบัญชี</span>
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
                    <button type="button" class="btn btn-primary BTN-register">สมัคร</button>
                </div>


            </div>

        </StyledWrapper >
    )
}

export default Signup;