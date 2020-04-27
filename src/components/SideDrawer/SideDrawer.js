import styled from 'styled-components';

const Side_drawer = styled.nav`

    height:100%;
    background: white;
    box-shadow:2px 0px 5px rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    width:70%;
    max-width:400px;
    z-index:200;

    ul{
        height:100%;
        list-style:none;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }

    li{
        margin: 0.5rem 0;
    }

    a{
        color: #521751;
        text-decoration:none;
        font-size: 1.2rem;
    }

    a:hover,a:active{
        color: orange;
        text-decoration:none;
        font-size: 1.2rem;
    }
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

export default SideDrawer;