import React from 'react'

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