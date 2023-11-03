import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getPath, getBoard, getStatusOptions } from '../../Utils/Utils';

const Todo = ({task,idx, statusName}) => {

  const appBoards = useSelector(state => state.appBoard);

  const navigate = useNavigate();
  let completedSubTask = 0;
  let totalSubTask = task.subtask.length;

  let subTask = task.subtask;
  for(let i = 0; i < subTask.length; i++){
    if(subTask[i].status === "COMPLETED"){
      completedSubTask++;
    }
  }

  const navigateToTakDetails = (taskId)=>{
    let boardId = getPath();
    let board = getBoard(appBoards,boardId)
    let statusOptions = getStatusOptions(board)
    let path = `/taskDetails/${taskId}`
    navigate(path,{state:{task,statusOptions,boardId,statusName}})
  }

  return (
    <div id={task.id} onClick={()=>navigateToTakDetails(task.id)} key={idx}  className='task' draggable="true">
        <div className='task-description'>{task["heading"]}</div>
        <div className='subtask-count'>Completed : {completedSubTask}/{totalSubTask}</div>
    </div>
  )
}

export default Todo