import styled from 'styled-components';

const Backdrop_div = styled.nav`


    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background: rgba(0,0,0,0.3);
    z-index:100;

`

const Backdrop = props =>(
    <Backdrop_div />
)

export default Backdrop;