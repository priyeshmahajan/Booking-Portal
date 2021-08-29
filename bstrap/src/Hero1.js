import React from 'react';
import WifiIcon from '@material-ui/icons/Wifi';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HotelIcon from '@material-ui/icons/Hotel';
import Popup from "./Popup";





const Hero1 = () => {
    return (
        <>
        <div>
        <header className="car">
          <div className="masthead-content">
              <div className="container px-5">
                  <h2 className="masthead-heading mb-0 mx-3"> <p style={{textAlign:"center"}}><h1><mark>Non Ac section </mark></h1></p> </h2>
                  <h2 className="masthead-subheading mb-0"></h2>
                   
              </div>
          </div>
           
      </header>
           
       </div>
       <p style={{textAlign:"center"}}><h1>SERVICES</h1></p>
       
       <div class="container">
  <div class="row">
    <div class="col-md">
      <WifiIcon fontSize="large" /><br/>
      wifi
      
    </div>
    <div class="col-sm">
       <FreeBreakfastIcon fontSize="large" /><br/>
       Tea&Breakfast
    </div>
    <div class="col-sm">
      <LocalDrinkIcon fontSize="large" /><br/>
      Water
    </div>
    <div class="col-sm">
      <FastfoodIcon fontSize="large" ></FastfoodIcon><br/>
      Fastfood
    </div>
    <div class="col-sm">
      <HotelIcon fontSize="large" /><br/>
      large size Bed
    </div>
    
  </div>
</div>
<div class="mt-4 col-md-12">
<p style={{textAlign:"center"}}><h4><mark>Deluxe Rooms</mark></h4></p>
<div class="row mt-8 col-md-12">
    <div class="col-md my-3">
    <div class="card" style={{width: "18rem"}}>
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Family Deluxe Room</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Popup deluxe1="Family Deluxe Room" dr1="$400"/>
    <h3>$400</h3>
    <i class="star icon"></i><i class="star icon"></i><i class="star icon"></i><i class="star icon"></i><i class="star outline icon"></i>
  </div>
</div>
      
      
    </div>
    <div class="col-sm">
    <div class="card" style= {{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjdZOUlp0iO9l0040Q3ltsR8Qjxk95DTIKw&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Double Deluxe Room</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Popup deluxe2="Double Deluxe Room" dr2="$500"/>
    <h3>$500</h3>
    <i class="star icon"></i><i class="star icon"></i><i class="star icon"></i><i class="star icon"></i><i class="star icon"></i>
  </div>
</div>
      
      
    </div>
    <div class="col-sm">
    <div class="card" style={{width: "18rem"}}>
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Single Deluxe Room</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Popup deluxe3="Single Deluxe Room" dr3="$600"/>
    <h3>$600</h3>
    <i class="star icon"></i><i class="star icon"></i><i class="star icon"></i><i class="star icon"></i><i class="star icon"></i>
  </div>
</div>
      
    </div>
    
    
  </div>
  </div>
  <div class="container">
  <div class="row">
    <div class="col">
    <section>
  <div class="row mt-8 col-md-12">
    <div class="col-md my-3">
    <h2>Extra features</h2>
    <ol>
    <li>plush pillow and breathable bed linens</li>
    <li>soft,oversized bath towels</li> 
    <li>full-sized,ph-balanced toiletries</li>
    <li>complimetry refreshment</li>
    <li>Adequat safety/security</li>
    <li>Comfortable Bed</li>
    </ol>
    </div>
      </div>
</section>
     
    </div>
    <div style={{marginTop:"55px"}} class="col mx-5">
     
       
    </div>
  </div>
                

  

  


        


      </div> 
      
       
       
       </>
    )
}

export default Hero1
