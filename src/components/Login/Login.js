import FormLogin from "./subsection/FormLogin"
import styled from 'styled-components'

const StyledWrapper = styled.div`
   
`

const Login = () => {
    return (
        <StyledWrapper>
            <header>
                <nav>

                </nav>
            </header>
            
            <div className="position-login">
                <FormLogin />
            </div>
        </StyledWrapper>
    )
}

export default Login;