import React from 'react'
import "./addtask.css"
import { useState } from 'react';
import plusSign from "../../Assets/plus-logo2.png"
import '../Modals/modals.css'
import SubTaskForm from './SubTaskForm';

const AddTask = (props) => {
    const [ task ,setTask] = useState("");
    const [showSubTask, setShowSubTask] = useState(false);
    const [ subtaskArray ,setSubtaskArray] = useState([]);
    const [ description ,setDescription] = useState("");
    const [ subTask ,setSubTask] = useState("");
    const [ subDescription ,setSubDescription] = useState("");
    const [ subAsignTo ,setSubAsignTo] = useState("");
    const [ subAsignee ,setSubAsignee] = useState("");
    const [ status ,setStatus] = useState("todo");

    const [subtaskDetails, setSubTaskDetails] = useState({
        heading : "",
        description : "",
        assigned_By : "",
        assigned_To : ""
    })
    
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
            }
    }

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

    const handleSubTaskDetails = (e)=>{
        const {name, value} = e.target;
        setSubTaskDetails((prevState)=>({
            ...prevState,
            [name] : value
        }))
    }

    const createSubtask = ()=>{
       
        let subObject = subtaskDetails;

        let temp = subtaskArray;
        temp.push(subObject);
        setSubtaskArray(temp);

        console.log(subtaskArray);
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
                      <input onChange={(e)=>setTask(e.target.value)} value={task} placeholder='' type="text" required />
                    </div>
                  </div>
                  <div className='label-input-cont'>
                    <label htmlFor="" className='label-add-task'>Description</label>
                    <div className='input-conto'>
                      <input onChange={(e)=>setDescription(e.target.value)} value={description}  type="text" required />
                    </div>
                  </div>
                </div>
                
                {subtaskArray.length != 0 ?
                    <div className='created-subtask-wrapper'>
                    {subtaskArray.map((item, idx)=>{
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
                    <select onChange={(e)=>{setStatus(e.target.value)}} name="status" className='status-cont-two'>
                        <option value="todo" className='options'>Todo</option>
                        <option value="pending">pending</option>
                        <option value="done">done</option>
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