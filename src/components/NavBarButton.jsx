import React from "react";

function NavBarButton(props){

    return(
        <button className="navbar-btn">
            {props.buttonName}
        </button>

    );
};

export default NavBarButton;