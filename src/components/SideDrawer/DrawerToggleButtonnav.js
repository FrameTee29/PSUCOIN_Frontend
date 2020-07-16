import styled from 'styled-components';
import { RiMenuAddLine} from "react-icons/ri";
import { TiThMenuOutline} from "react-icons/ti";

const Toggle_button= styled.button`
    display:flex;
    
    flex-direction:column;
    justify-content:space-around;
    height:24px;
    width:30px;
    background: transparent;
    border:none;
    padding:0;
    color:black;
    font-size:30px;
    box-sizing:border-box;

    .Toggle_button:focus{
        outline:none;
    }

    .toggle-button_line{
        width: 30px;
        height: 3px;
        background: black;
    }
    
`

const DrawerToggleButtonnav = props =>(
    <Toggle_button  onClick={props.click}>
        {/* <RiMenuAddLine/> */}
        <TiThMenuOutline/>
        {/* <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" /> */}
    </Toggle_button>
)

export default DrawerToggleButtonnav;