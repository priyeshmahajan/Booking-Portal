import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";

import {NavLink} from "react-router-dom";
const Section3 = () => {
    return (
        <div>
         <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img class="img-fluid rounded-circle"  src="https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzdWl0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="520" height="330"  alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Royal special Suite</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            <NavLink className="btn btn-primary btn-xl rounded-pill mt-5" activeClassName="active" exact to="/hero3">more</NavLink>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
            
        </div>
    )
}

export default Section3
