"use client"
import React, { useRef } from 'react'
import{useDispatch} from 'react-redux'
export const A = () => {
    const nameref=useRef()
   const dispatch= useDispatch()
    const handeleClick=()=>{
        const name=nameref.current.value;
        dispatch({type:"NAME_UPDATE",payload:name})
        
    }
  return (
    <div>
       <h1>A</h1>
       <p>
        <b>Name:<input ref={nameref}/> <button onClick={handeleClick}>submit:</button></b>
       </p>
    </div>
  )
}
