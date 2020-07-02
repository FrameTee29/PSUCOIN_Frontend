import FormLogin from "./subsection/FormLogin"
import styled from 'styled-components'

const StyledWrapper = styled.div`
        display:flex;
        /* background: #30b671; */
        /* background-image:url('https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); */
        background-image: linear-gradient(to top, rgba(7,127,65,1), rgba(48,182,113,1));
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        align-items:center;
        justify-content:center;
        height:100vh;
        
        .position-login{
            display:flex;
            right:30px;
        }
   
`

const Login = () => {
    return (
        <StyledWrapper>
            <div className="position-login">
                แถบ login 
                รูปภาพ / หน้าสมัคร
                <FormLogin />
            </div>
        </StyledWrapper>
    )
}

export default Login;