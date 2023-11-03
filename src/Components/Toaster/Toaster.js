import React, { useEffect } from 'react'
import './toaster.css'

const Toaster = ({message,closeToaster}) => {

    useEffect(()=>{
        setTimeout(()=>{
            closeToaster(false);
        },5000)
    },[])

  return (
    <div className='toaster'>
      <div>{message}</div>
      <button type='button' className='danger-btn' onClick={()=>closeToaster(false)}>X</button>
    </div>
  )
}

export default Toaster
