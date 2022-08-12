import React from 'react';

function ResumeDescription (props) {

    return (
        <div>
            {props.content.map((value, index) => {return (
                <div className="content-row" key={index}>
                    <div className="title-col">{value.title}</div>
                    <div className="content-col">
                        <ul>
                            <li className="role">
                                <b>{value.role}</b>
                                <ul>
                                    {value.content.map(info => {return (<li>{info}</li>)})}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            );})}
        </div>
    );
};

export default ResumeDescription;