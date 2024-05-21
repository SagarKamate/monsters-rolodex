import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { CITY, CLOSE, EMAIL, NAME, PHONE, USERNAME, WEBSITE, NOT_PRESENT } from '../../../utils/constants';

export const Popup = ({monster, show, handleClose}) => {
    return <>
        <Modal key={monster.id} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{monster.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
                <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=90x90`}/>
            </div>
            <div className="p-2 fullwidth"> 
                <Container>
                    <Row>
                        <Col>{NAME}</Col>
                        <Col>{monster.name}</Col>
                    </Row>
                    <Row>
                        <Col>{EMAIL}</Col>
                        <Col>{monster.email}</Col>
                    </Row>
                    <Row>
                        <Col>{PHONE}</Col>
                        <Col>{monster.phone ? monster.phone.split(' ')[0] : {NOT_PRESENT}}</Col>
                    </Row>
                    <Row>
                        <Col>{CITY}</Col>
                        <Col>{monster.address.city}</Col>
                    </Row>
                    <Row>
                        <Col>{USERNAME}</Col>
                        <Col>{monster.username}</Col>
                    </Row>
                    <Row>
                        <Col>{WEBSITE}</Col>
                        <Col>{monster.website}</Col>
                    </Row>
                </Container>
            </div>
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {CLOSE}
            </Button>
          </Modal.Footer>
        </Modal>
    </>        
}
