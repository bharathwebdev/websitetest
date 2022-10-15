import React, { useEffect, useState ,useRef} from 'react'
import { db } from '../../configsFiles/Firebase.config'

import { collection, getDocs, onSnapshot ,doc,getDoc, updateDoc} from "firebase/firestore";
import { toast } from "react-toastify";
import { Card, Typography } from '@mui/material';

import {QrReader} from "react-qr-reader";

import styled from 'styled-components';

import Switch from '@mui/material/Switch';


const AdminPanelHead = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  background-color: white;
  color:black;
position: relative;
`
const UsersList = styled.div`
  width: 50%;
  height: 100vh;
  overflow-y:scroll ;
`
const Scanner = styled.div`


`




function AdminPannel() {

const [RegistredPeople,setRegistredPeople]=useState([])
const [data, setData] = useState(null);
const [qr,setqr]  = useState('')
const [scannedResult,setScanneresult] = useState('')
const [checked, setChecked] = useState(false);
const currentpaid = useRef(false)
const [open, setOpen] = useState(false);

const [load,setload] = useState(false)

  const handleChange = async(e,id) => {
    setload(true)
    setChecked(pre=>!pre)
     const docRef = doc(db,'RegisteredPeople',`${id}`)
      console.log(e.target.checked)

     await updateDoc(docRef,{
      cashPaid:e.target.checked
     }).then(()=>{

  setload(false)

    // console.log("this is loaf",load.current)
      
     })
    // console.log(e.target.checked)
     
  };

const qrRef = useRef(null)


    useEffect(()=>{

  const colref = collection(db,'RegisteredPeople')

  const docRef = doc(db,'RegisteredPeople',`${data}`)
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

    // to get all docs in registered people

//   onSnapshot(colref,(snapshot)=>{
//     let books=[]
 
//     snapshot.docs.forEach((doc)=>{
//         books.push({...doc.data(),id:doc.id})
//     })
//     // console.log(books)
//     setRegistredPeople(books)
// })

 

  
    


    // to get one doc 

   
  
  },[])

  

// useEffect(()=>{
//   if(data!=null){
//     const docRef = doc(db,'RegisteredPeople',`${data}`)
//     let fetcheduser = []

//     onSnapshot(docRef,(snapshot)=>{

//       fetcheduser.push({...snapshot.data(),id:doc.id})
//       setRegistredPeople(fetcheduser)
//     })

//   }

// },[data])
 
    // const GenerateQr = async()=>{
    //     const response= await QRcode.toDataURL('wdknwlknd')
    //     setqr(response)
    //     }

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
    <AdminPanelHead>
      <UsersList>

    
        <h1>AdminPannel</h1>
        

        {/* <button onClick={GenerateQr}>generate qr</button> */}
        {/* <img src={qr}/> */}
         {/* <Button onClick={onScanfile} > scan qr</Button> */}
       

          {
           RegistredPeople.map(data=>{
                return <Card sx={{
                    padding:'20px',
                    margin:'20px',
                    backgroundColor: data?.cashPaid ? '#5cff54':'#ff8d8d'
                }}
                key={data?.id}


               
                >


                    <p>{data?.name}</p>

                    <p>{data?.email}</p>
                    <p>{data?.collegeName}</p>
                    <p>{data?.cashPaid ? 'paid' : 'not paid'}</p>
                    {/* <GreenSwitch {...label} defaultChecked /> */}
                    {/* <Switch
                    
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
/> */}

                  <Switch
                  defaultChecked={data?.cashPaid}

                  onChange={(e)=>handleChange(e,data.id)}
                    inputProps={{ 'aria-label': 'controlled' }}
                 
                    /> 
                  

       {load && <h1>Wait data is updating...</h1>}
                </Card>
                
                
            })
        }

        </UsersList>
        
      <Scanner>

      {/* <h1 style={{
            color:'black',

         }}>scanned result : {data}</h1> */}
     
         <span style={{
            width:'100%',
            Height:'300px'
         }}>
         <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
             console.log(result?.text)
             try{
              const docRef = doc(db,'RegisteredPeople',`${result?.text}`)
              onSnapshot(docRef,(snapshot=>{
                let books=[]
             
            
                    // books.push(snapshot.data())
            
                books.push(snapshot.data())
                setRegistredPeople(books)
            }))
             }catch(e){
              toast.error('your not exist')
             }
            
          }

          if (!!error) {
            console.info(error);
          }
        }}
        containerStyle={{height:'100px',width:'400px'}}
      />
      <p style={{
        color:'black'
      }}>{data}</p>
         </span>

</Scanner>

        </AdminPanelHead>
  )
}

export default AdminPannel