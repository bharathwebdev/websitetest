import { getAuth } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import ResponsiveAppBar from './AdminNav'
import { useState } from 'react'
import AdminPannel from './AdminPannel'

function AdminMain() {
  const auth = getAuth()
  const navigate = useNavigate()
 
  useEffect(()=>{
    // console.log(auth.currentUser)
  
  },[])
  const [fromData,setFromData] =useState({
  name:auth?.currentUser?.displayName,
  email:auth?.currentUser?.email
  })
  return (
    <div>
      <ResponsiveAppBar/>
      <AdminPannel/>
    </div>
  )
}

export default AdminMain