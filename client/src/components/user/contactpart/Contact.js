import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchContacts} from '../../../api/contactApi'
import {setContacts} from '../../../store/contactSlice'
import CardContact from './Card'
const Contact = () => {
  //partie redux 
  const contacts = useSelector(state=>state.contact)
  console.log(contacts,'contact b3ed rabtan bil db')
//partie jiben el data 
const dispatch = useDispatch()
const getContact = async()=>{
  const data = await fetchContacts()
  // console.log(data.contc,'data get unsers ')
  console.log(data.Contacts,"datadata")
  dispatch(setContacts(data.Contacts))
}

useEffect(()=>{
  getContact()
},[])

// //lina el data  heya la partie contact
  return (
    <div >
      {
        contacts.map((e)=> <div   > <CardContact users={e} getContact={getContact}   /></div> )
      }
    </div>
  )
}

export default Contact