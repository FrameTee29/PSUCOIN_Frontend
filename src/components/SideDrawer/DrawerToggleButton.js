import styled from 'styled-components';

const Toggle_button= styled.button`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:24px;
    width:30px;
    background: transparent;
    border:none;
    padding:0;
    box-sizing:border-box;

    .Toggle_button:focus{
        outline:none;
    }

    .toggle-button_line{
        width: 30px;
        height: 2px;
        background: black;
    }
    
`

const DrawerToggleButton = props =>(
    <Toggle_button  onClick={props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </Toggle_button>
)

export default DrawerToggleButton;