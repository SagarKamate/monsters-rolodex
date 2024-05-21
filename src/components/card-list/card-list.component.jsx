import React from "react";
import { Card } from "./Card/card.component";
import './card-list.component.style.css';


export const CardList = (props) => {
    
    return <div className="card-list">
        {
            props.monsters.map(monsters => (
                <Card key={monsters.id} monster={monsters}></Card>
            ))
        }
    </div>;
}