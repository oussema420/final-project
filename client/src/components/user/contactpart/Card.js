import React from 'react'
import { deletContact } from '../../../api/contactApi';
import { useNavigate } from 'react-router';
import "./contactCard.css"
const Card = ({users,getContact}) => {
    console.log('users',users)
    let navigate = useNavigate();
  const update=()=>{
  navigate(`/update/${users._id}`)
  }
    
  return (
<div >
   
<div class="card" >
  <img src="https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436188.jpg" alt="Avatar" style={{width:"60%"}}/>
  <div class="container">
    <h4><b>{users.name}</b></h4> 
    <p>{users.email}</p> 
    <p>{users.age}</p>
  </div>
</div>
 
  </div>  )
}

export default Card