import React, { useEffect, useState } from 'react'

export default function BackgroundChanger() {
    const [color,setColor]=useState("white");
    useEffect(()=>{
        document.body.style.backgroundColor=color;
    },[color]);
  return (
    <div>
        
         <div className='absolute bottom-0  left-1/3'>
        <button className='bg-slate-700 text-white 'onClick={()=>{
          setColor("black")
        }}>
        Black
        </button>

        <button className='bg-slate-700 text-white'onClick={()=>{
         setColor("white")
        }}>
        White

        </button>
        <button className='bg-slate-700 text-white' onClick={()=>{
            setColor("red");
        }}>
          Red
        </button>
        <button className='bg-slate-700 text-white' onClick={()=>{
            setColor("yellow")
        }}>
          Yellow
        </button>
      </div>
        
    </div>
  )
}


