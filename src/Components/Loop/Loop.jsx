import React from 'react'
import jaysound from "../../assets/jaysound.jpg"

export const Loop = () => {
    let image='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
    const images=[]
    for(let i=1;i<100;i++){
        images.push(<img src={jaysound}></img>)
        console.log(images);
    }
  return (
    <div>
        <div className="grid grid-cols-5 gap-4">{images}</div>
    </div>
  )
}
