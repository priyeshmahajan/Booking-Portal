import React,{useState} from 'react';


 
 

 

import Pay from './Pay';

const Registration = (props) => {

     
    

    const[change,setchange]=useState({
            Name:"",
        Email:"",
        phone:"",
        password:"",
        Gender:"",
        Address:"",
        Pincode:"",
        Gender:"",
        date1:new Date().toString(),
        date2:new Date().toString(),
        Adult:"",
        Children:""
        
         
    });
    

    const handleInput=(e)=>{
      
        const name=e.target.name
        const value =e.target.value
        setchange({...change,[name]:value})
        



    }
   
     
    
     


    return (
    
        <>
         

<legend>Gateway</legend>

<fieldset className="a">
    <legend>Personal Information</legend>

    

        <p>
            <i> * Marked Fields are Mandatory to fill </i>
        </p>


        <p>
            <label for="Name">Name :</label>
            <input type="text"  value={change.name} onChange={handleInput} name="Name" id="Name" required placeholder="Enter your Name"/> &nbsp;*
        </p>
        <p>
        
            Gender : &nbsp;

            <input type="radio" value="Male" onChange={handleInput} checked={change.Gender==="Male"}     name="Gender" />
            <label for="Male">Male</label> <br/>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input
                type="radio" name="Gender"    value="Female" onChange={handleInput} checked={change.Gender==="Female"}  required/>
            <label for="Female">Female</label> <br/>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input
                type="radio" name="Gender"    value="Other" onChange={handleInput} checked={change.Gender==="Other"}  required/>
            <label for="Others">Others</label> <br/>
            
        </p>
        <p>
       
        </p>
         
        <p>
            <label for="Address">Address : </label>
            <textarea name="Address" cols="20" rows="10" id="Address" value={change.Address} onChange={handleInput} required
                placeholder="Enter your Address"></textarea>&nbsp;*
        </p>

        <p>
            <label for="Email">E-Mail :</label>
            <input type="email" name="Email" id="Email" value={change.Email} onChange={handleInput} placeholder="Enter your E-Mail Address" required/>&nbsp;*
        </p>


         


        <p>
        <div  class="d-grid gap-2 d-md-flex">
            <label for="Pincode">Adults : </label>
            <input  type="number" value={change.Adult} onChange={handleInput}  name="Adult" id="Pincode" required placeholder=""/> &nbsp;*
            <label for="Pincode">Children : </label>
            <input type="number" value={change.Children} onChange={handleInput}  name="Children" id="Pincode" required placeholder=""/> &nbsp;*
            
            </div>
        </p>
        <p>
        <div  class="d-grid gap-2 d-md-flex">
            <label for="Checkin">Checkin:</label>
            
            <input type="date" name="date1" onChange={handleInput} value={change.date1}  />&nbsp;*
            <label for="Checkout">Checkout:</label>
            
            <input type="date" name="date2" onChange={handleInput} value={change.date2}    />&nbsp;*
            </div>
        </p>
        <p>
            <label for="Pincode">Pincode : </label>
            <input type="number" value={change.Pincode} onChange={handleInput}  name="Pincode" id="Pincode" required placeholder="Enter your Pincode"/> &nbsp;*
        </p>
        

</fieldset>


 
       <div>
       
       <Pay mode={change} honey={props.money} joney={props.funny} loney={props.sunny} foney={props.gunny} toney={props.tummy} code={setchange}  />
        
       

       
       
      
       
       
        
           </div>
        </>
    )
}

export default Registration
