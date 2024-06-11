import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const[data,setdata]=useState([])

    const fetchData=()=>{
      axios.get("http://localhost:8084/viewall").then(
        (response)=>{
          setdata(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
    
      <th scope="col">name</th>
      <th scope="col">mobile</th>
      <th scope="col">address</th>
      <th scope="col">doctorname</th>
    </tr>
  </thead>
  <tbody>
    
   {
    data.map(
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

export default Viewall