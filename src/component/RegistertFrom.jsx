import React from 'react'
import { Button, Input } from '@mui/material'
import { useState } from 'react'
import { async, uuidv4 } from '@firebase/util'
import { padding } from '@mui/system'
import { db } from '../configsFiles/Firebase.config'
import { collection,addDoc, doc ,setDoc} from 'firebase/firestore'
import { toast } from 'react-toastify'
import QRcode from 'qrcode'
function RegistertFrom() {
    const [formData,setFromData] = useState({})
    const [qr,setqr]  = useState('')



    const handlechange= (e)=>{
       setFromData(pre=>(
        {...pre,[e.target.name]:e.target.value}
       ))
    }


    const handlesubmit = async(e)=>{
        e.preventDefault()
        formData.id = uuidv4()
        formData.cashPaid = false

        // const colref = collection(db,'RegisteredPeople');

        // addDoc(colref,formData).then(()=>{
        //     console.log('uploaded')
        // }).catch((e)=>{
        //     toast.error(e)
        // })      
        const cityRef = doc(db, 'RegisteredPeople', `${formData.id}`);
        setDoc(cityRef, formData).then(async()=>{
        console.log('uploaded')
            const response= await QRcode.toDataURL(`${cityRef.id}`)
            setqr(response)
            // sending mail --
            const config = {
                SecureToken :'1a7e3de3-b657-4c1b-bcec-42c3389c810c',
                To : formData.Email,
                From : 'saveethadrestein2022@gmail.com',
                Subject : "congrats on registration in Drestein Event 🎉🎉",
                Body : `<h1>${formData.name}</h1>`
            }
            if(window.Email){
                 console.log(response)
                window.Email.send({
                    // Host : "smtp.elasticemail.com",
                    // Username : "saveethadrestein2022@gmail.com",
                    // Password : "7ED0253E9D150A7B3718C8FF2710B33F3612",

                    SecureToken :'59afb50e-33bb-41ff-a752-87a4bcf5ce88',
                    To : formData.email,
                    From : "saveethadrestein2022@gmail.com",
                    Subject : "congrats on registration in Drestein Event 🎉🎉",
                    Body :  `<h1>${formData.name}</h1>
                           <img src="https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${cityRef.id}&choe=UTF-8">
                    
                    `
                }).then(()=>{
                    alert('Email send to you successfully')
                })
            }
            
        }).catch((e)=>{
            toast.error(e)
        })
        // console.log(colref)
    }



  return (
    <div style={{
        background:'white',
        width:'100vw',
        height:'100vh',
        padding:'30px'
    }}><form>

  
        <Input type='text' name='name' onChange={handlechange}/><br/>
        <Input type='email'name='email' onChange={handlechange}/><br/>
        <Input type='text' name='collegeName' onChange={handlechange}placeholder='college name' />
        <Button type='submit' onClick={handlesubmit} >register </Button>
        <img src={qr} download={true} alt='img'/>
        </form>
    </div>
  )
}

export default RegistertFrom