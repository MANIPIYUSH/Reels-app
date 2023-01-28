import React from 'react'
import TextField from '@mui/material/TextField';
import Image from "next/image";
import insta from "../../assets/insta.jpg"
import Button from '@mui/material/Button';


function index() {
  return (
    <div className='login-container'>
      <div className='login-card'>
      <Image src={insta}/>
      <TextField id="outlined-basic" fullWidth margin='dense' size='small' label="E-Mail" variant="outlined" />
      <TextField id="outlined-basic" fullWidth margin='dense' size='small' label="Password" type="password" variant="outlined" />
      <TextField id="outlined-basic" fullWidth margin='dense' size='small' label="Full-Name" variant="outlined" />
      <Button variant="outlined" fullWidth component="label" style={{marginTop:"1rem"}}  >
           Upload
          <input accept="image/*" type="file" style={{display:"none"}} />
      </Button>
      <Button variant="contained" fullWidth component="span" style={{marginTop:"1rem"}}  >
           Sign Up
      </Button>
      
      
      
      </div>
      <div className='bottom-card'>
           Already Have an Account?<span style={{color:"blue"}}>Login</span>
      </div>
    </div>
  )
}

export default index
