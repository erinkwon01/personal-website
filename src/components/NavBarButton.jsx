// codes each individual button using info passed in through props (buttonName="")

import React from "react";

function NavBarButton(props){
    return(
        <button className="navbar-btn"> {/* assigns CSS and type of button (contained) */}
            <mark>{props.buttonName}</mark>
        </button>
    );
};

export default NavBarButton;

