import React from 'react';

function homeDescription (props) {

    return (
        <div className = "homeDescription">
            {props.content.map((value, index) => {return (
                <div className="content-row" key={index}>
                    <div class="title-col">{value.title}</div>
                    <div class="content-col">
                        {value.content.map(info => {return (<li>{info}</li>)})}
                    </div>
                </div>
            );})}
        </div>
    );
};

export default homeDescription;
