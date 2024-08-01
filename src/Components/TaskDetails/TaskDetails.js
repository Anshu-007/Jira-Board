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
import SubTaskForm from "../AddTask/SubTaskForm";
import { createUUID } from "../../Utils/Utils";



const TaskDetails = () => {
  // two states to show task and share data to showtask details 
  const [showSubTaskDetails,setShowSubTaskDetails] = useState(false);
  const [showSubTask, setShowSubTask] = useState(false);
  const [subTask,setSubTask] = useState({});
  const statusBars = useSelector(state=>state.appBoard)
  // console.log(statusBars)
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [subtaskDetails, setSubTaskDetails] = useState({
    id : "",
    heading : "",
    description : "",
    assigned_To : "",
    assigned_By : "",
    status : location.state.statusName,
});
   
  let task = location.state.task;
  // console.log(task)
  let statusOptions = location.state.statusOptions;
  let boardId = location.state.boardId;
  let statusName = location.state.statusName;
  
  let subtasks = task?.subtask || [];
  // console.log(subtasks)


  
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
  const createSubtask = ()=>{
       
    let subObject = subtaskDetails;
    subObject = {...subObject, id : createUUID()}
    let temp = task.subtask;
    temp.push(subObject);

    // setTask((prevState)=>({
    //     ...prevState,
    //     subtask : temp
    // }))
    setSubTaskDetails({
        id : "",
        heading : "",
        description : "",
        assigned_To : "",
        assigned_By : "",
        status : location.state.statusName,
    })
    setShowSubTask(false);
}
const handleSubTaskDetails = (e)=>{
  const {name, value} = e.target;
  setSubTaskDetails((prevState)=>({
      ...prevState,
      [name] : value
  }))
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
            <div>
                        <div className='add-new-task-button-cont'>
                            <button type="button" className=" add-new-task-button" onClick={()=>setShowSubTask(true)}> Add new Sub-task</button> 
                        </div>
                    </div>
            
            {showSubTask && 
                <SubTaskForm 
                    subtaskDetails={subtaskDetails}
                    createSubtask = {createSubtask}
                    handleSubTaskDetails = {handleSubTaskDetails}
                />}
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
