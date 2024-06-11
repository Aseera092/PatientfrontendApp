import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const[data,setdata]=useState(
        {
            "name":""
        }
    )
   const inputHandler=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
   }

   const readvalue=()=>{
    console.log(data)
    axios.post("http://localhost:8084/search",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status== "successs") {
                alert("sussefully added")
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
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search