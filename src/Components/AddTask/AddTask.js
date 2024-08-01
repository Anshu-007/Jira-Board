import React from 'react'
import "./addtask.css"
import { useState } from 'react';
import plusSign from "../../Assets/plus-logo2.png"
import '../Modals/modals.css'
import SubTaskForm from './SubTaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../Redux/Reducers/appBoardSlice';
import { createUUID, getBoard, getPath, getStatusOptions } from '../../Utils/Utils';
import { useLocation } from 'react-router';


const AddTask = (props) => {
    const [showSubTask, setShowSubTask] = useState(false);
    const [ task ,setTask] = useState({
        id : "",
        heading : "",
        description :"",
        subtask :[],
        status : "TODO"
    });
    const [subtaskDetails, setSubTaskDetails] = useState({
        id : "",
        heading : "",
        description : "",
        assigned_To : "",
        assigned_By : "",
        status : "TODO",
    });
    const appBoards = useSelector(state=>state.appBoard)    
    const dispatch = useDispatch();
    const location = useLocation();
    let boardId = getPath();
    // console.log(appBoards)                   
    // let board = getBoard(appBoards, boardId);
    // console.log(boardId)
    let statusOptions = getStatusOptions(props.board);  
    console.log(statusOptions)

    async function submit(e){
        e.preventDefault();
        let newTask = task;
        newTask = {...newTask, id : createUUID()};
        setTask(newTask);

        let boardId = getPath();

        dispatch(addTask({task : newTask, boardId : boardId }));
        try {
            const response = await fetch('https://xyz.com', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({task : newTask, boardId : boardId }),
            });
        
            if (response.ok) {
              const data = await response.json();
              console.log('Board saved:', data);
            } else {
              console.error('Error saving board:', response.statusText);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        //   setTitleName("");
        // props.closeModal(false);

    

        setTask({
            id : "",
            heading : "",
            description :"",
            subtask :[],
            status : ""
        })
        props.handleAddTaskModal(false);

    }

    const handleSubTaskDetails = (e)=>{
        const {name, value} = e.target;
        setSubTaskDetails((prevState)=>({
            ...prevState,
            [name] : value
        }))
    }

    const handleTaskInput = (e)=>{
        const {name, value} = e.target;
        setTask((prevState)=>({
            ...prevState,
            [name]  : value
        }))
    }

    const createSubtask = ()=>{
       
        let subObject = subtaskDetails;
        subObject = {...subObject, id : createUUID()}
        let temp = task.subtask;
        temp.push(subObject);
        setTask((prevState)=>({
            ...prevState,
            subtask : temp
        }))
        setSubTaskDetails({
            id : "",
            heading : "",
            description : "",
            assigned_To : "",
            assigned_By : "",
            status : "TODO",
        })
        setShowSubTask(false);
    }
    

  return (
    <div className='add-task-modal-background'>
        <div className='add-task-modal'>
            <form onSubmit={(e)=>{submit(e)}}  className='add-task-form'>
                <div className='add-task-heading'>
                Add new task
                </div>
                <div className='form-upperpart'>
                  <div className='label-input-cont'>
                    <label htmlFor="" className='label-add-task'>Task name</label>
                    <div className='input-conto'>
                      <input onChange={(e)=>{handleTaskInput(e)}} name="heading"  value={task.heading} placeholder='' type="text" required />
                    </div>
                  </div>
                  <div className='label-input-cont'>
                    <label htmlFor="" className='label-add-task'>Description</label>
                    <div className='input-conto'>
                      <input onChange={(e)=>{handleTaskInput(e)}} name='description' value={task.description}  type="text" required />
                    </div>
                  </div>
                </div>
                
                {task.subtask.length != 0 ?
                    <div className='created-subtask-wrapper'>
                    {task.subtask.map((item, idx)=>{
                          return (<div key={idx} className='subtask-wrapper'>
                                <div className='subtask-heading-wrapper'>{item.heading}</div>
                                <button type='button' className='danger-btn cross-button'>x</button>
                            </div> ) 
                    })}
                    </div>
                    : 
                    null
                }
                {showSubTask && 
                <SubTaskForm 
                    subtaskDetails={subtaskDetails}
                    createSubtask = {createSubtask}
                    handleSubTaskDetails = {handleSubTaskDetails}
                />}

                    <div>
                        <div className='add-new-task-button-cont'>
                            <button type="button" className=" add-new-task-button" onClick={()=>setShowSubTask(true)}><img  src={plusSign} alt="" className=' image-add-new-task-plus' /> Add new Sub-task</button> 
                        </div>
                    </div>
                
            
                    <div className=' status-cont'>
                    <select  onChange={(e)=>{handleTaskInput(e)}}  name="status" value={task.status} className="subtask-edit-input">
                        {statusOptions.map((status, idx)=>{
                            return (<option value={status.toUpperCase()} className='options'>{status.toUpperCase()}</option>)
                        })}
                    </select>               
                    </div>

                    <div>
                        <div className='add-new-task-button-cont'>
                            <button type="submit" className='primary-btn'>Create task</button> 
                            <button type='button' className='danger-btn' onClick={()=>props.handleAddTaskModal(false)}>Close</button>
                        </div>
                    </div>
                {/* </div>  */}
            </form>
        </div>
    </div>
  )
}

export default AddTask