import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Todo = ({task,idx}) => {
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
    let path = `/taskDetails/${taskId}`
    navigate(path)
  }

  return (
    <div onClick={()=>navigateToTakDetails(task.id)} key={idx}  className='task'>
        <div className='task-description'>{task["heading"]}</div>
        <div className='subtask-count'>Completed : {completedSubTask}/{totalSubTask}</div>
    </div>
  )
}

export default Todo