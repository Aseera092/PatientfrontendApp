import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const[data,setdata]=useState(
        {
            "name":""
        }
    )
    const[result,setresult]=useState([])
   const inputHandler=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
   }

   const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8084/search",data).then(
        (response)=>{
           setresult(response.data)
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    ).finally()
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
                    <button className="btn btn-primary" onClick={readValue}>Search</button>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6">
                <table class="table">
  <thead>
    <tr>
    <th >name</th>
      <th >mobile</th>
      <th>address</th>
      <th>doctorname</th>
    </tr>
  </thead>
  <tbody>
   {
    result.map(
        (value,index)=>{
            return<tr>
         <td>{value.name}</td>
            <td>{value.mobile}</td>
            <td>{value.address}</td>
            <td>{value.doctorname}</td>
            </tr>
        }
        
    )
   }

  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search