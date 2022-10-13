import React, { useEffect, useState ,useRef} from 'react'
import { db } from '../../configsFiles/Firebase.config'

import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
import { Card, Typography } from '@mui/material';
import QRcode from 'qrcode'
import {QrReader} from "react-qr-reader";
import {Button} from '@mui/material';
function AdminPannel() {
const [RegistredPeople,setRegistredPeople]=useState([])
const [qr,setqr]  = useState('')
const [scannedResult,setScanneresult] = useState('')
const qrRef = useRef(null)
    useEffect(()=>{

  const colref = collection(db,'RegisteredPeople')
    // getDocs(colref).then((snapshot)=>{
    //     let books=[]
     
    //     snapshot.docs.forEach((doc)=>{
    //         books.push({...doc.data(),id:doc.id})
    //     })
    //     console.log(books)
    //     setRegistredPeople(books)
    
    // }).catch(e=>{
    //     toast.error(e)
    // })
    onSnapshot(colref,(snapshot)=>{
        let books=[]
     
        snapshot.docs.forEach((doc)=>{
            books.push({...doc.data(),id:doc.id})
        })
        console.log(books)
        setRegistredPeople(books)
    })
    
    },[])
    const GenerateQr = async()=>{
        const response= await QRcode.toDataURL('wdknwlknd')
        setqr(response)
        }
const handleError = (e)=>{
console.log(e)
}
const handleScan =(result)=>{
if(result){
    setScanneresult(result)
}
}
const onScanfile = ()=>{
    qrRef.current.openImageDialog();
}
  return (
    <div style={{
        background:'white'
    }}>
        <h1>AdminPannel</h1>

        <button onClick={GenerateQr}>generate qr</button>
        <img src={qr}/>
         <Button onClick={onScanfile} > scan qr</Button>
         <QrReader
          delay={300}
          ref={qrRef}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "50px" ,background:'red'}}
          facingMode="environment"

        //   facingMode="environment"
         />
         <h1 style={{
            color:'black',
            background:'red'
         }}>scanned result : {scannedResult}</h1>
        {/* {
            RegistredPeople.map(data=>{
                return <Card sx={{
                    padding:'20px',
                    margin:'20px'
                }}>
                    <Typography color='red'>

                    <p>{data.name}</p>
                    </Typography>
                    <p>{data.email}</p>
                    <p>{data.collegeName}</p>
                    <p>{data.cashPaid ? 'paid' : 'not paid'}</p>
                </Card>
            })
        } */}


        </div>
  )
}

export default AdminPannel