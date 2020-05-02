import styled from 'styled-components'
import { useEffect, useState } from "react";
import Axios from "axios";


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    align-items: center;
    justify-content: center;
    .innerContainer{
        display: flex;
        flex-direction: column;
        width: 1000px;
        background-color: #fcf696;
        height: 100vh;
        align-items: center;
        margin-top: 20px;
       
    }
`

const HomeForm = (props) => {

    
    return (
        <StyledWrapper>
            <div className="innerContainer">
              HOME
            </div>
        </StyledWrapper>
    )
}

export default HomeForm;