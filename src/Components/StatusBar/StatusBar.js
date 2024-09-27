import React, { useState,useRef} from 'react'

import "./statusbar.css"
import Todo from '../Todo/Todo'
import { useDispatch } from 'react-redux'
import {dragAndDrop } from '../Redux/Reducers/appBoardSlice'
import {getPath} from '../../Utils/Utils'

 
const StatusBar = (props) => {
  
  const {
    statusBarData, 
    fromStatus, 
    toStatus, 
    setFromStatus, 
    setToStatus, 
    StatusBarHeading, 
    index,
    taskId,
    setTaskId
  } = props;
  console.log(statusBarData, 'STATS BAR')

  const dispatch = useDispatch();
  
  // function handleDragStart(e){
  //   e.stopPropagation();
  //   setFromStatus(e.target.parentNode.id);
  //   setTaskId(e.target.id)
  //   // console.log('drag start',e.target.parentNode.id)
  // }
  // function handleDragOver(e){
  //   e.stopPropagation();
  //   e.preventDefault();
  //   // console.log('drag over')
  // }
  // function handleDragEnd(e){
  //   e.stopPropagation();
  //   // console.log('drag ended')
  // }

  // function handleDrop(e){
  //   e.stopPropagation();
  //   setToStatus(e.target.parentNode.id);
  //   let boardId = getPath();
  //   // console.log(boardId);
   
  //   // console.log(boardId);
  //   let dropProperties = {
  //     fromStatus : fromStatus,
  //     toStatus : e.target.parentNode.id,
  //     boardId :  boardId,
  //     taskId : taskId
  //   }
  //   // console.log(dropProperties);
  //   dispatch(dragAndDrop(dropProperties));
    
  //   // console.log('drag drop',fromStatus,e.target.parentNode.id)
  // }
  return (
    <div 
      key={index}

      className='status-bar'
      // onDragStart={handleDragStart}
      // onDragOver={handleDragOver} 
      // onDragEnd={handleDragEnd}
      // onDrop={handleDrop}
      id={StatusBarHeading}
    >
        <div className='status-heading'>{StatusBarHeading}</div>
        <div id={StatusBarHeading}  className='task-container'>
            {statusBarData.map((task,idx)=>{return <Todo statusBarData = {statusBarData} statusName={StatusBarHeading} task={task} key={idx}/>})}
        </div>
    </div>
  )
}

export default StatusBar