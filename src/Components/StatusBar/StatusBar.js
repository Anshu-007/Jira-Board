import React from 'react'
import "./statusbar.css"
import Todo from '../Todo/Todo'

const StatusBar = (props) => {
    console.log(props)
  return (
    <div className='status-bar'>
        <div className='status-heading'>{props.StatusBarHeading}</div>
        <div className='task-container'>
            {props.value.map((task,idx)=>{return <Todo task={task} idx={idx}/>})}
        </div>
    </div>
  )
}

export default StatusBar