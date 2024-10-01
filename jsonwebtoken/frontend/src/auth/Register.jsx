import React from 'react'

export default function Register() {
    return (
        <>
        <form style={{marginRight:"20%", marginLeft:"20%",marginTop:"5%"}}>
            <div><span style={{fontSize:"20px",marginBottom:"20px"}}>Register Form</span></div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>
     
      <button type="submit" class="btn btn-primary">Signup</button>
    </form></>
      )
    }
    