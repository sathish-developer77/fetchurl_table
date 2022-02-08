
import {React,useState,useEffect } from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
const Routing = () =>{
 const [data,setData] =useState([]);
 useEffect(()=>{fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user")
 .then(response => response.json())
 .then((data) => setData(data));
  },[]);
  return(

    <Table bordered center>
    
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
  

  {data.map((value,index) => {

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

    
     
   
  
     )
    };
   

export default Routing;

