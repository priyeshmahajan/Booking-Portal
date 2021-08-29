import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";


const Booking = () => {
    return (
        <div style={{textAlign:"center"}}>
        <div style={{marginTop:"25px",alignItems:"center", justifyContent:"center"}}>
        <div className="container  px-10 my-5" >
    <form id="contactForm" data-sb-form-api-token="API_TOKEN" class="col-sm-6 col-form-label col-form-label-sm" >
        <div className="form-floating mb-3">
            <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
            <label for="emailAddress">Email Address</label>
            <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
            <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
        </div>
        <div className="form-floating mb-3">
            <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height:"10rem"}} data-sb-validations="required"></textarea>
            <label for="message">Message</label>
            <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
        </div>
        <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                <p>To activate this form, sign up at</p>
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
            </div>
        </div>
        <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">Error sending message!</div>
        </div>
        <div className="d-grid">
            <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
        </div>
    </form>
</div>
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
            
        </div>
        </div>
    )
}

export default Booking
