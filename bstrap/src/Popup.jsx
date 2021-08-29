import React,{useState} from 'react';
import {Button,Modal,DropdownButton,Dropdown} from "react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Registration from './Registration';
const Popup = (props) => {
    const[modal,setmodal]=useState(false);
    const manage = ()=>{
        setmodal(!modal)
    }
    return (
        <div>
          {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton> */}
        <Button onClick={()=>{manage()}}>reserve</Button>
        <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={modal}>
            
            <Modal.Body>
            <Modal.Title>{props.deluxe1}</Modal.Title>
            <Modal.Title>{props.deluxe2}</Modal.Title>
            <Modal.Title>{props.deluxe3}</Modal.Title>
            <Modal.Title>{props.ac}</Modal.Title>
            <Modal.Title>{props.suit}</Modal.Title>
                <Registration money={props.dr1} funny={props.dr2} sunny={props.dr3} gunny={props.dar} tummy={props.dsr}/>
            </Modal.Body>
            
            
            <Modal.Footer>
           
                <Button onClick={()=>{manage()}}>
                    close
                </Button>

            </Modal.Footer>
        </Modal>
      

            
        </div>
    )
}

export default Popup
