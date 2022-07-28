import React from 'react';

function Description (props) {

    return (
        <div>
            {props.content.map((value, index) => {return (
                <div className="content-row" key={index}>
                    <div class="title-col">{value.title}</div>
                    <div class="content-col">
                        <ul>
                            {value.content.map(info => {return (<li>{info}</li>)})}
                        </ul>
                    </div>
                </div>
            );})}
        </div>
    );
};

export default Description;
