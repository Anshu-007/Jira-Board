import React from 'react'
import "./addtask.css"
import { useState } from 'react';
import plusSign from "../../Assets/plus-logo2.png"

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
    <div id='addTaskCont-id' 
    // style={{display:'none'}} 
    className='main-cont-addTask1'>
        <div className='main-cont-addTask2'>
            <div className='add-task-heading'>
              Add new task
            </div>

            <form onSubmit={(e)=>{submit(e)}}  className='addtask-form'>
                <div className='form-upperpart'>
                  <div className='label-input-cont'>
                    <label htmlFor="" className='label-add-task'>Task name</label>
                    <div className='input-conto'>
                      <input onChange={(e)=>setTask(e.target.value)} value={task} className='input-addtask' placeholder='' type="text" required />
                    </div>
                  </div>
                  <div className='label-input-cont'>
                    <label htmlFor="" className='label-add-task'>Description</label>
                    <div className='input-conto'>
                      <input onChange={(e)=>setDescription(e.target.value)} value={description} className='input-addtask' type="text" required />
                    </div>
                  </div>
                </div>
           
           {/* ----------------------------------------------------------------------------------------------------------------------------- */}
                <div className='form-lowerpart'>
                    <div className='subtask-heading'>
                     Sub-Task
                    </div>
                    <div className='lower-second-cont '>
                            <div className='subtask-cont-first'>
                                <div className='subtask-lable-input-cont'>
                                 <label htmlFor="" className='label-add-task' >Task</label>
                                 <div className='input-conto'>
                                   <input onChange={(e)=>{setSubTask(e.target.value)}} value={subTask} className='input-addtask' type="text" required />
                                 </div>
                                </div>
                                <div className='subtask-lable-input-cont'>
                                 <label htmlFor="" className='label-add-task'>Discription</label>
                                 <div className='input-conto'>
                                   <input onChange={(e)=>{setSubDescription(e.target.value)}} value={subDescription} className='input-addtask' type="text" required />
                                 </div>
                                </div>
                            </div>
                            <div className='subtask-cont-first'>
                                <div className='subtask-lable-input-cont'> 
                                 <label htmlFor="" className='label-add-task'> Asign To</label>
                                 <div className='input-conto'>
                                   <input onChange={(e)=>{setSubAsignTo(e.target.value)}} value={subAsignTo} className='input-addtask' type="text" required />
                                 </div>
                                </div>
                                <div className='subtask-lable-input-cont'> 
                                 <label htmlFor=""  className='label-add-task'>Assignee</label>
                                 <div className='input-conto'>
                                   <input onChange={(e)=>{setSubAsignee(e.target.value)}} value={subAsignee} className='input-addtask' type="text" required />
                                 </div>
                                </div>
                            </div>    

                    </div>   

                </div>
{/*------------------------------------------------------------------------------------------------------------------------------------------------  */}

                {/* <div className='add-task-all-buttons-cont'> */}
                    <div>
                        <div className='add-new-task-button-cont'>
                            <button type="submit" className=" add-new-task-button"><img  src={plusSign} alt="" className=' image-add-new-task-plus' /> Add new Sub-task</button> 
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
                            <button type="submit" class="create-task-button">Create task</button> 
                        </div>
                    </div>
                {/* </div>  */}
            </form>
       </div>
       
    </div>
  )
}

export default AddTask