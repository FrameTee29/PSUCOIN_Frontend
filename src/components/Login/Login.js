import FormLogin from "./subsection/FormLogin"
import styled from 'styled-components'

const StyledWrapper = styled.div`
        display:flex;
        background-image:url('https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
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
                <FormLogin />
            </div>
        </StyledWrapper>
    )
}

export default Login;