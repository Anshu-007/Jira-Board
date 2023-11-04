import React from "react";
import "./taskdetails.css";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import SubTaskDetails from '../SubTaskDetails/SubTaskDetails'
import "../../index.css";
import SubTask from "../Subtask/SubTask";
import { useLocation,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {deleteTask} from '../Redux/Reducers/appBoardSlice'



const TaskDetails = () => {
  // two states to show task and share data to showtask details 
  const [showSubTaskDetails,setShowSubTaskDetails] = useState(false);
  const [subTask,setSubTask] = useState({});
  const statusBars = useSelector(state=>state.appBoard)
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  let task = location.state.task;
  let statusOptions = location.state.statusOptions;
  let boardId = location.state.boardId;
  let statusName = location.state.statusName;


  let subtasks = task.subtask;
  
  function getSubTask(e,subtask){
    setShowSubTaskDetails(true);
    setSubTask(subtask);
    
  }
  function closePopUp(e){
    setShowSubTaskDetails(false);
  }


    
  function handleDeleteTask(){
  
    // let boardId = getPath();
    
  let deleteTaskProperties = {
    task : task,
    boardId : boardId,
    statusName :statusName
  }
    dispatch(deleteTask(deleteTaskProperties));
    
    navigate(-1);
  }
  

  return (
    <div className="taskdetails-main-cont">
      <div className="task-details-one">
        <div className="task-details-heading-one">
          <div className="TASK-heading">
            Task Details.
          </div>
          <div className="task-details-button-wrapper">
            <button onClick={handleDeleteTask} className="danger-btn">delete</button>
            <button onClick={()=>navigate(-1)} className="primary-btn">back</button>
          </div>
        </div>
        <div className="details-wrapper-one">
          <div className="main-task-details">
            <div className="main-task-headings-cont">
              <div className="task-heading">Task Id :</div>
              <div className="task-content-cont"> {task.id}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">Task Name :</div>
              <div className="task-content-cont">{task.heading}</div>
            </div>
            <div className=" descriptiontask">
              <div className="task-heading">Task Description :</div>
              <div className="task-content-cont">{task.description}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">Total Subtasks :</div>
              <div className="task-content-cont">{subtasks.length}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">To Do's :</div>
              <div className="task-content-cont">{}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">Pending :</div>
              <div className="task-content-cont">{}</div>
            </div>
            <div className="main-task-headings-cont">
                <div  className="task-heading">Completed :</div>
                <div className="task-content-cont">{}</div>
            </div>
          </div>
          <div className="sub-task-details">
            <div>
                Sub-tasks :
            </div>
            <div className="subtask-content">
                {subtasks.map((subtask,idx)=>{
                    return (<SubTask key={idx} subtask={subtask} getSubTask ={getSubTask}/>);
                })}
            </div> 
          </div>
        </div>
      </div>
      {
        (showSubTaskDetails === true)? <SubTaskDetails closePopUp={closePopUp} subTask={subTask} statusOptions={statusOptions}/> : null
      }
    </div>
  );
};

export default TaskDetails;
