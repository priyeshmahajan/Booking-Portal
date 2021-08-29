import React from 'react'

const Login = () => {
    return (
        <div style={{marginTop:"55px",alignItems:"center", justifyContent:"center"}}>
        <div className="input-group mb-3" class="col-sm-6 col-form-label col-form-label-sm">
  
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3" class="col-sm-6 col-form-label col-form-label-sm">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
   
</div>

<label for="basic-url" className="form-label" class="col-sm-6 col-form-label col-form-label-sm">Your vanity URL</label>
<div className="input-group mb-3">
   
  <input type="text" class="col-sm-6 col-form-label col-form-label-sm" id="basic-url" aria-describedby="basic-addon3"/>
</div>
        
            
        </div>
    )
}

export default Login
