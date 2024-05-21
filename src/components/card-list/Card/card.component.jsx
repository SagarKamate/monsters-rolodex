import {useState} from 'react';
import './card.component.style.css';
import Button from 'react-bootstrap/Button';
import { Popup } from '../popup/popup.component';
import { SEE_MORE } from '../../../utils/constants';

export const Card = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
        <Button variant="link" onClick={handleShow}>{SEE_MORE}</Button>
        <Popup handleClose={handleClose} show={show} monster={props.monster}></Popup>
    </div>;
}