import React from "react";
import './notfound.component.style.css';

export const NotFound = (props) => {
    console.log(props.monsters.length);
    return <div>
        {
            props.monsters.length === 0 ?
                <label>{props.message}</label>
            : ''
        }
    </div>;
}