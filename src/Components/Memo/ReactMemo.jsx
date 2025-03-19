import React, { useState } from 'react'
import { Massage } from '../Massage/Massage';

export const ReactMemo = () => {
    const [count,setCount]=useState(0)
    console.log("App Rendering");
  return (
    <div>ReactMemo
        <h1 className='my-6 text-3xl font-bold'>Count : {count}</h1>
        <div>
            <button
            onClick={()=>{
                setCount(
                    (count)=>count+1
                )
            }}
            className='btn btn-accent font-bold '>Increament</button>
            <Massage></Massage>
            
        </div>
    </div>
  )
}
