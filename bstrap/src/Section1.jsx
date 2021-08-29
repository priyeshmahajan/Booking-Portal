import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import { Button ,ButtonToolbar} from 'react-bootstrap';

import {NavLink,Switch,Route} from "react-router-dom";
 


const Section1 = () => {
    return (
        <div>
             <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img class="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"  alt="..." width="525" height="340" /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Non-ac Deluxe Rooms</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                         <NavLink className="btn btn-primary btn-xl rounded-pill mt-5" activeClassName="active" exact to="/hero1">more</NavLink> 
                         
                         
                            
                             
                                 
                            
                             
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Section1
