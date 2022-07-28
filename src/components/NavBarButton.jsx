// codes each individual button using info passed in through props (buttonName="")

import React from "react";

function NavBarButton(props){
    return(
        <mark>
            <button className="navbar-btn"> {/* assigns CSS and type of button (contained) */}
                {props.buttonName}
            </button>
        </mark>
    );
};

export default NavBarButton;

