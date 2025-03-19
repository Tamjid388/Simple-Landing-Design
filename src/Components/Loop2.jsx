import React from 'react'

export const Loop2 = () => {
    let imgs="https://i.ibb.co.com/2v9QQLN/cox.jpg"
      const images=[]
        for(let i=1;i<100;i++){
            images.push(<img src={imgs}></img>)
            console.log(images);
        }
  return (
    <div className="grid grid-cols-5 gap-4">{images}</div>
  )
}
