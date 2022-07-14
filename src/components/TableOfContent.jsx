// codes how to send out each element of the TOC using an array that's in the AboutMe.jsx file
// reusable for all tableofcontent portions of each page, just rewrite the array with content 

import React from 'react';

// TODO: currently has no table-content-item code in css (line 11)
function TableOfContent (props) {
    return (
        <div className='table-of-content' id={props.id}>
            {props.content.map((value, index) => {
                return <div className='table-of-content-item' key={index}>{value}</div> 
            })}
        </div>
    );
};

export default TableOfContent;