import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Loop } from './Components/Loop/Loop'
import { Loop2 } from './Components/Loop2'
import { ReactMemo } from './Components/Memo/ReactMemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <div className="navbar bg-base-100 shadow-sm">
  <a className="btn btn-ghost text-xl">daisyUI</a>
</div>
{/* Hero Section */}
<div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
 
</div>
<ReactMemo></ReactMemo>
{/* <Loop></Loop>
<Loop2></Loop2> */}
    </>
  )
}

export default App
