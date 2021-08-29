
import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
  
const Detail=()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
   
  
  
   
  
  return (
    <div style={{ display: "block", padding: 30 }}>
      <h4>book</h4>
      <Button
        variant="contained"
        color="primary"
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        BOOK
      </Button>
      <Popover
        anchorEl={anchorEl}
        open={open}
        id={open ? "simple-popover" : undefined}
        onClose={() => {
          setAnchorEl(null);
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
      >
       
      </Popover>
    </div>
  );
}
export default Detail;