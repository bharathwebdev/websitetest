import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, Query,where } from 'firebase/firestore'
import { db } from '../../configsFiles/Firebase.config'
import { Card } from '@mui/material'
import{Switch} from '@mui/material'
import {Typography} from '@mui/material'
import styled from 'styled-components'
const UnPaidUSerMain = styled.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;


`
const TextusernotPaid = styled.div`
    display: flex;
    color: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50px,-50px);

    font-size: 10vw;
`
function UnPaidUsers() {
    const [paidUsers,setPaidusers] = useState([])
    const [load,setload] = useState(false)
    useEffect(()=>{
        setload(true)
        const colref = collection(db,'RegisteredPeople')
        const q= query(colref,where("cashPaid",'==',false))

    onSnapshot(q,(snapshot)=>{
    let books=[]
    console.log(snapshot.docs)
    snapshot.docs.forEach((doc)=>{
        books.push({...doc.data(),id:doc.id})
    })
    // console.log(books)
    console.log(books)
    setPaidusers(books)
    setload(false)
})
    },[])
    if(load){
        return <h1>loading</h1>
    }

   
  return (
      <UnPaidUSerMain>
        {
            paidUsers.length===0 && <TextusernotPaid>no user</TextusernotPaid>
        }

{
            paidUsers.map(data=>{
                return <Card sx={{
                    padding:'20px',
                    margin:'20px',

                    backgroundColor: data.cashPaid ? '#5cff54':'#ff8d8d'
                }}
                key={data.id}


               
                >


                    <p>{data.name}</p>

                    <p>{data.email}</p>
                    <p>{data.collegeName}</p>
                    <p>{data.cashPaid ? 'paid' : 'not paid'}</p>
                    {/* <GreenSwitch {...label} defaultChecked /> */}
                    {/* <Switch
                    
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
/> */}

                  {/* <Switch
                //   defaultChecked={data.cashPaid}

                //   onChange={(e)=>handleChange(e,data.id)}
                    inputProps={{ 'aria-label': 'controlled' }}
                 
                    />  */}
                
                </Card>
                
                
            })
        }
      </UnPaidUSerMain>
  )
}

export default UnPaidUsers