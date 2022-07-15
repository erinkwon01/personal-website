// codes each individual button using info passed in through props (buttonName="")

import React from "react";



function NavBarButton(props){

    function clickMe(){
        console.log("clicked")
    }

    return(
        <button className="navbar-btn" onClick={clickMe}> {/* assigns CSS and type of button (contained) */}
            {props.buttonName}
        </button>

    );
};

export default NavBarButton;