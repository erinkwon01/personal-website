// codes each bullet point using info passed in through props (descriptionContent[a].b)

// import React from "react";

// function AboutMeDescription(props) {
//     return (
//         <ul> {/* TODO: need to figure out a way to not let each bullet point be its own list */}
//             <li>{props.info}</li>
//         </ul>
//     );
// }

// export default AboutMeDescription;

import React from 'react';

// TODO: having issues with listing out each item in descriptionContent bc there are two levels i think?
// and then i want to alter the code so that every time this iterates, it's added to a list :)
function Description (props) {
    return (
        <div className='description-content' id={props.id}>
            {props.content.map((value, index) => {
                return <div className='description-item' key={index}>{value}</div> 
            })}
        </div>
    );
};

export default Description;