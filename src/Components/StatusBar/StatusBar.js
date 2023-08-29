import React from 'react'
import "./statusbar.css"

const StatusBar = (props) => {
    console.log(props)
  return (
    <div className='status-bar'>
        <div className='status-heading'>{props.StatusBarHeading}</div>
        <div className='task-container'>
            {props.value.map((task,idx)=>{
                return <div key={idx}  className='task'>
                            <div className='task-description'>{task["heading"]}</div>
                            
                       </div>
                    })}
        </div>
    </div>
  )
}

export default StatusBar