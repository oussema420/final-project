import React,{useState} from 'react'
import './AddContact.css'
import {postContact} from '../../../api/contactApi'
import { useNavigate } from 'react-router';

const Ajout = () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [age,setAge]=useState(0)
const navigate = useNavigate()
const handelAdd=async(values)=>{
 await postContact(values)
 navigate('/contact')
}
  return (
    <div> <div className='test'>
    <form   id="login-form" class="login-form" autocomplete="off" >
  <h1>Add contact Form</h1>
  <div>
    <label class="label-email">
      <input type="email" class="text" name="email" placeholder="Name" tabindex="1" required  value={name} 
      onChange={(e)=>setName(e.target.value)}   />
      <span class="required">Name</span>
    </label>
  </div>
  <div>
    <label class="label-email">
      <input type="email" class="text" name="age" placeholder="age" tabindex="1" required   value={age} 
      onChange={(e)=>setAge(e.target.value)} />
      <span class="required">Age</span>
    </label>
  </div>
 
  <div>
    <label class="label-password">
      <input type="text" class="text" name="Email" placeholder="Email" tabindex="2" required  value={email} 
      onChange={(e)=>setEmail(e.target.value)}  />
      <span class="required">Email</span>
    </label>
  </div>
  <div class="email">
    <a><button onClick={()=>handelAdd({name,age,email})} >Add New Contact</button></a>
  </div>

</form></div></div>
  )
}

export default Ajout