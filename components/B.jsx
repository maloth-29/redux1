"use client"
import React, { useRef, useState } from 'react'

export const B = () => {
    const [loc,Setloc]=useState()
    const handeleChange=(eve)=>{
         Setloc(eve.target.value)

    }
    const handeleClick=()=>{
        alert(loc)

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
