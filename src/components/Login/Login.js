import FormLogin from "./subsection/FormLogin"
import styled from 'styled-components'

const StyledWrapper = styled.div`
        display:flex;
        background-image: linear-gradient(-150deg, #92e7d0,#fcf696);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        align-items:center;
        justify-content:center;
        height:100vh;
   
`

const Login = () => {
    return (
        <StyledWrapper>
            <FormLogin />
        </StyledWrapper>
    )
}

export default Login;