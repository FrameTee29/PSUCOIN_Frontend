import styled from 'styled-components';

const Side_drawer = styled.nav`

    height:100%;
    background: white;
    box-shadow:2px 0px 5px rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left: 0 ;
    width: 400px;


`


const SideDrawer = props =>(
    <Side_drawer>
        <ul>
            <li><a>Profile</a></li>
            <li><a>Activity</a></li>
            <li><a>Transfer</a></li>
        </ul>
    </Side_drawer>
)

export default SideDrawer