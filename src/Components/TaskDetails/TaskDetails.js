import React from 'react'
import "./taskdetails.css"
import eye from "../../Assets/eye.png"
import editimg from "../../Assets/edit.png"
import "../../index.css"

const TaskDetails = () => {
    let object = {
        id: "123456",
        heading : "task1",
        description: "task 1 description",
        position: 1,
        subtask:  
            [{
                id : "Abcd123",
                heading: "subtask1",
                description:"subtask 1 description",
                assigned_to: "anshu",
                assigned_by : "deepak",
                status : "TODO"
            },{
                id : "Abcd123",
                heading: "subtask1",
                description:"subtask 1 description",
                assigned_to: "anshu",
                assigned_by : "deepak",
                status : "PENDING"
            },{
                id : "Abcd123",
                heading: "subtask1",
                description:"subtask 1 description",
                assigned_to: "anshu",
                assigned_by : "deepak",
                status : "COMPLETED"
            }]}
  return (
    <div className='taskdetails-cont'>
        <div className='taskdetails-id-button-cont'>
            <div className='taskdetails-id'>
                Task id : <span className='task-id-cont'>{object.id}</span>
            </div>
            <div className='button1-cont'>
              <div className=' primary-btn '> back </div>
            </div>  
        </div>
{/*-----------------------------------------------------------------------------------------  */}
        <div className='taskdetails-data'>
            
{/*----------------------------------------------------------------------------------------------------  */}
            <div className='subtask-main-cont'>
                <div className='taskdetails-data-upperpart'>
                    <div className='taskname'> 
                        Task name : <span className='task-name-cont'>{object.heading}</span>
                    </div>
                    <div className='task-description'> 
                        Discription : <span className='task-name-cont'>{object.description}</span>
                    </div>
                </div>
                <div className='subtask-heading1'>Subtask</div>
                <div className='subtask-data'>
                    {
                        object.subtask.map((task)=>{
                            return <div className={task.status === "TODO" ? 'sub-task-cont todo' : task.status === "PENDING" ? "sub-task-cont pending" : "sub-task-cont completed"} >
                                        <div className=' subtask-details-button-cont'>
                                            <div className='subtask-details-cont'>
                                                <div className='subtask-name'>
                                                    task name : <span>{object.subtask[0].id}</span>
                                                </div>
                                                <div className='subtask-description ellipsis'>
                                                   Description : <span>{object.subtask[0].description}</span>
                                                </div>
                                            </div>
                                            <div className='subtask-buttons-cont'>
                                                <div className='subtask-button-cont'>
                                                    <button className='subtask-button'>
                                                        <img className='subtask-button-img' src={eye} alt="" />
                                                    </button>
                                                </div>
                                                <div className='subtask-button-cont'>
                                                    <button className='subtask-button'>
                                                        <img className='subtask-button-img'  src={editimg} alt="" />
                                                    </button>
                                                </div>

                                            </div>

                                        </div>   
                                    </div>
 
                        })
                    }
                </div>
            </div>
            <div className='manage-status-btn-cont'>
                <div className='manage-button-cont '>
                  <button className='primary-btn manage-button'>next</button>
                </div>
                <div className='manage-button-cont'>
                  <button className='primary-btn'>previous</button>
                </div>


                
               
            </div>
        </div>
    </div>
  )
}

export default TaskDetails