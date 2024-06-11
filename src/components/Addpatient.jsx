import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Addpatient = () => {
    const[data,setdata]=useState(
        { 
          
          "name":"",
          "mobile":"",
          "address":"",
          "doctorname":""
      
          }
    )
    const inputHandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        console.log(data)
        axios.post("http://localhost:8084/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status== "successs") {
                    alert("succesfully added")
                    
                } else {
                    alert("error")
                    
                }
            }
        )
    }
  return (
    <div>
        <Navbar/>
         <div className="container"> 
        
            <div className="row g-3">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">mobile</label>
                    <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">address</label>
                    <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler}/>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">doctorname</label>
                    <input type="text" className="form-control" name='doctorname' value={data.doctorname} onChange={inputHandler}/>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-primary" onClick={readvalue}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addpatient