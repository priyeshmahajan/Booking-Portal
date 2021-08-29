import React,{useState} from 'react';
import {Modal,Button} from "react-bootstrap"


const Pay = (props) => {
     
    const[onchange,setonchange]=useState([]);
    const submit=(e)=>{
        e.preventDefault();
        const newrecord = {...props.mode};
     setonchange([...onchange,newrecord]);
        

    }
    const[modale,setmodale]=useState(false);
    const manager = ()=>{
        setmodale(!modale)
    }
    const Alert=()=>{
        alert("Succesfully Submitted")
      
       
    }
    
        
           
        
    
          

    
    return (
        
        <div>
        

        <Modal  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={modale} className="special_modal">
      <h6>*<i>Ensure to click on book button</i> </h6>
       
         {
               onchange.map((car)=>{
                   const {Name,Email,Address,Pincode,Gender,date1,date2,Adult,Children} = car;
                   return (
                       <>
                       <div id="result">
                       <li>NAME: :{Name}</li>
                       
                       
                       <li>ADDRESS:{Address}</li>
                       <li>GENDER:{Gender}</li>
                       <li>EMAIL:{Email}</li>
                       <li>PINCODE:{Pincode}</li>
                       <li>CHECK IN :{date1}</li>
                       <li>CHECK OUT:{date2}</li>
                       <li>ADULT:{Adult}</li>
                       <li>CHILDREN:{Children}</li>
                       </div>
                       
                       </>
                   )
               })
           }
           <h2 style={{color:"black"}}>Amount to be paid:</h2>
           <h1 style={{color:"black"}}> {props.honey}</h1> 
            <h1 style={{color:"black"}}> {props.joney}</h1>
           <h1 style={{color:"black"}}> {props.loney}</h1>
           <h1 style={{color:"black"}}> {props.foney}</h1>
           <h1 style={{color:"black"}}> {props.toney}</h1>

             
           <Modal.Footer>
           <div  class="d-grid gap-2 d-md-flex">
                <Button onClick={()=>{manager()}}>
                    close
                </Button>
                <Button onClick={Alert} >
                    Confirm & Pay
                </Button>
                </div>
            </Modal.Footer>
           </Modal>
           <div  class="d-grid gap-2 d-md-flex">
  
  <button type="button" id="btnCancel" onClick={submit} class="btn btn-primary btn-sm"><button type="button" id="btnSubmit" onClick={manager} class="btn btn-primary btn-sm">SUBMIT</button></button>
</div>
           
        
        
            
        </div>
    )
}

export default Pay
