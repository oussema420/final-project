import React from 'react'
import './Navbar.css'
import {Link} from  "react-router-dom"
const Navbar = ({auth,logout}) => {
  return (
    <div><nav className="navMenu">
    <a href="#">{auth.name}</a>
    {
      auth.role === "admin" ?
       (<><a href="#"   style={{marginLeft:"15px"}} >view users</a>
      <a href="#"   style={{marginLeft:"15px"}}     >work admin</a></>) :
      (<><a href="/contacts"  style={{marginLeft:"15px"}}  >  <Link to="/contact"  >view contacts</Link>   </a>
      <a href="/addContact"   style={{marginLeft:"15px"}} > <Link to="/ajout"> ajout contact</Link></a></>) 
    }
  
    <a href="#"  style={{marginLeft:"15px"}}    onClick={()=>logout()}>logout</a>
    <div className="dot" />
  </nav>
  </div>
  )
}

export default Navbar