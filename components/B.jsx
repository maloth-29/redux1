"use client"
import React, { useRef, useState } from 'react'
import{useDispatch} from 'react-redux'

export const B = () => {
    const [loc,Setloc]=useState()
    const dispatch=useDispatch()
    const handeleChange=(eve)=>{
         Setloc(eve.target.value)

    }
    const handeleClick=()=>{
        dispatch({type:"LOC_UPDATE",payload:loc})

    }
  return (
    <div>
       <h1>B</h1>
       <p>
        <b>Location:<input onChange={handeleChange}/> <button onClick={handeleClick}>submit:</button></b>
       </p>
    </div>
  )
}
