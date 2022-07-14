// codes each individual button using info passed in through props (buttonName="")

import React from "react";

function NavBarButton(props){
    return(
        <button className="navbar-btn" variant="contained"> {/* assigns CSS and type of button (contained) */}
            {props.buttonName}
        </button>

    );
};

export default NavBarButton;