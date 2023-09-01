import React from 'react'
import "./addtask.css"
import { useState } from 'react';

const AddTask = () => {
    let [ task ,setTask] = useState("");
    let [ description ,setDescription] = useState("");
    let [ subTask ,setSubTask] = useState("");
    let [ subDescription ,setSubDescription] = useState("");
    let [ subAsignTo ,setSubAsignTo] = useState("");
    let [ subAsignee ,setSubAsignee] = useState("");
    let [ status ,setStatus] = useState("todo");

    // console.log(task);
    // console.log(description);
    // console.log(subTask);
    // console.log(subDescription);
    // console.log(subAsignTo);
    // console.log(subAsignee);
    // console.log(status);
    // console.log(task);
    let object = {
        id: "123456",
        heading : "task1",
        position: 1,
        subtask:  
            {
                id : "Abcd123",
                heading: "subtask1",
                description:"subtask 1 description",
                assigned_to: "anshu",
                assigned_by : "deepak",
                status : "TODO"
            }}
    function submit(e){
        e.preventDefault();
        
    object.heading = task;
    object.description = description;
    object.subtask.heading = subTask;
    object.subtask.description = subDescription;
    object.subtask.assigned_to = subAsignTo;
    object.subtask.assigned_by =subAsignee;
    object.status = status;
    console.log(object);
    setTask("")
    setDescription("")
    setSubTask("")
    setSubDescription("")
    setSubAsignTo("")
    setSubAsignee("")
    setStatus("todo")
    }
    

    

  return (
    <div id='addTaskCont-id' style={{display:'none'}} className='addtask-container'>
        <form onSubmit={(e)=>{submit(e)}}  className='addtask-form'>
            
            <div className='task-heading'>
                Add new task
                
            </div>
            
            <div className='task-input-cont'>
                <div className='input-heading'>
                    Task name
                </div>
                <input onChange={(e)=>setTask(e.target.value)} value={task} className='inputs' type="text" required />

            </div>
            <div className='description-input-cont'>
            <div className='input-heading'>
                    Description
                </div>
                <input onChange={(e)=>setDescription(e.target.value)} value={description} className='inputs' type="text" required />
            </div>
            <div className='subtask-cont'>
                <div className='task-heading'>
                    Sub Task
                </div>
                <div className='subtask-cont-first'>
                    <div>
                        <div className='input-heading'>task</div>
                        <input onChange={(e)=>{setSubTask(e.target.value)}} value={subTask} className='inputs' type="text" required />
                    </div>
                    <div>
                        <div className='input-heading'>Description</div>
                        <input onChange={(e)=>{setSubDescription(e.target.value)}} value={subDescription} className='inputs' type="text" required />
                    </div>
                </div>
                <div className='subtask-cont-second'>
                    <div>
                        <div className='input-heading'>Asign To</div>
                        <input onChange={(e)=>{setSubAsignTo(e.target.value)}} value={subAsignTo} className='inputs' type="text" required />
                    </div>
                    <div>
                        <div className='input-heading'>Asignee</div>
                        <input onChange={(e)=>{setSubAsignee(e.target.value)}} value={subAsignee} className='inputs' type="text" required />
                    </div>
                </div>
                <button className='primary-btn'>Add New Sub Task</button>
            </div>
            <div className='status-cont'>
            <select onChange={(e)=>{setStatus(e.target.value)}} name="status">
                <option value="todo">todo</option>
                <option value="pending">pending</option>
                <option value="done">done</option>
                
            </select>
                
            </div>
            <button type='submit' className='primary-btn'>
                Create Task
            </button>
        </form>
    </div>
  )
}

export default AddTask