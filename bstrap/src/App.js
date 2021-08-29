import React from "react";
import Menui from "./Menui";




import { Switch, Route } from "react-router-dom";
import Booking from "./Booking";
import Error from "./Error";
import Login from "./Login";
import Navbar from "./Navbar";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
 
 
 
  


const App = () => {





  return (
    <>
   <Navbar />
     
             <Switch>
             
            
        <Route exact path="/" component={Menui}/>
        
        
        <Route exact path="/signup" component={Booking} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/hero1" component={Hero1}/>
        <Route exact path="/hero2" component={Hero2}/>
        <Route exact path="/hero3" component={Hero3}/>
        
        <Route component={Error} />
        
            
        
        
        
        
      
      </Switch>
      
      
    
    
      
       
       

      

     
     


    </>
  )
}

export default App;