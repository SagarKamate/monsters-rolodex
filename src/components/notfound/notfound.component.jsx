import React from "react";
import './notfound.component.style.css';

export const NotFound = (props) => {
    return <div>
        {
            props.monsters.length === 0 ?
                <label>{props.message}</label>
            : ''
        }
    </div>;
}