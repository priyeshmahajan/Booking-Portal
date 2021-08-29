import React from 'react';
import WifiIcon from '@material-ui/icons/Wifi';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HotelIcon from '@material-ui/icons/Hotel';
import ToysIcon from '@material-ui/icons/Toys';
import BathtubIcon from '@material-ui/icons/Bathtub';
import PoolIcon from '@material-ui/icons/Pool';
import TheatersIcon from '@material-ui/icons/Theaters';
import Popup from './Popup';

const Hero3 = () => {
    return (
        <>
     <div>
         <header className="car3">
          <div className="masthead-content">
              <div className="container px-5">
                  <h2 className="masthead-heading mb-0 mx-3"> <p style={{textAlign:"center"}}><h1><mark style={{backgroundColor:"#cfba98"}}> Royal Suit Section</mark></h1></p> </h2>
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
    <div class="col-sm">
      <ToysIcon fontSize="large" /><br/>
      Air Conditioner
    </div>
    <div class="col-sm">
      <BathtubIcon fontSize="large" /><br/>
      Large Bathtub
    </div>
    <div class="col-sm">
      <PoolIcon fontSize="large" /><br/>
      Swimming Pool
    </div>
    <div class="col-sm">
      <TheatersIcon fontSize="large" /><br/>
      Theater
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
     <h1>$2000</h1>
     <i class="star icon"></i><i class="star icon"></i><i class="star icon"></i><i class="star icon"></i><i class="star icon"></i>
     <Popup suit="Special Royal Suit" dsr="$2000"/>
    </div>
  </div>

  

  


        


      </div>             
        
        </>
    )
}

export default Hero3
