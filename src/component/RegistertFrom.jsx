import React from 'react'
import { Button, Input } from '@mui/material'
import { useState } from 'react'
import { async, uuidv4 } from '@firebase/util'
import { padding } from '@mui/system'
import { db } from '../configsFiles/Firebase.config'
import { collection,addDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import QRcode from 'qrcode'
function RegistertFrom() {
    const [formData,setFromData] = useState({})
    const handlechange= (e)=>{
       setFromData(pre=>(
        {...pre,[e.target.name]:e.target.value}
       ))
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        formData.id = uuidv4()
        formData.cashPaid = false

        const colref = collection(db,'RegisteredPeople');

        addDoc(colref,formData).then(()=>{
            console.log('uploaded')
        }).catch((e)=>{
            toast.error(e)
        })        
    }



  return (
    <div style={{
        background:'white',
        width:'100%',
        padding:'30px'
    }}><form>

  
        <Input type='text' name='name' onChange={handlechange}/><br/>
        <Input type='email'name='email' onChange={handlechange}/><br/>
        <Input type='text' name='collegeName' onChange={handlechange}placeholder='college name' />
        <Button type='submit' onClick={handlesubmit} >register </Button>
        </form>
    </div>
  )
}

export default RegistertFrom