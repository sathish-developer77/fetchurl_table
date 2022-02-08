
import {React,useState,useEffect } from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
const Age = () =>{
 const [data,setData] =useState([]);
 useEffect(()=>{fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user")
 .then(response => response.json())
 .then((data) => setData(data));
  },[]);
  return(
    <div>
      <h1 style={{textAlign: 'center',backgroundColor: 'red',height: '50px'}}>Age 18+</h1>
        
    <Table bordered style = {{TextAlign: 'center'}}> 
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email_id</th>
        <th>Mobile Number</th>
        <th>City</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
    </thead>


<tbody> 
  

  {data.filter(function (value) { 
    return value.age>18;
  }).map(function (value) {

   return (
   <tr >
     <th scope="row">{value.id}</th>
     <td>{value.name}</td>
     <td>{value.email_id}</td>
     <td>{value.mobile_number}</td>
     <td>{value.city}</td>
     <td>{value.age}</td>
     <td>{value.address}</td>
     </tr>)})}
     
     </tbody>
     </Table>

     </div>
     
     
  
     )
    };
   

export default Age;

