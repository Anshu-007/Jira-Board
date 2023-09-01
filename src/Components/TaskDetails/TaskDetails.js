import React from 'react'
import "./taskdetails.css"

const TaskDetails = () => {
    let object = {
        id: "123456",
        heading : "task1",
        position: 1,
        subtask:  
            [{
                id : "Abcd123",
                heading: "subtask1",
                description:"subtask 1 description",
                assigned_to: "anshu",
                assigned_by : "deepak",
                status : "TODO"
            }]}
  return (
    <div className='taskdetails-cont'>
        <div className='taskdetails-id-cont'>
            <div className='taskdetails-id'>{object.id}</div>
            <div className='primary-btn'>back</div>
        </div>
        <div className='taskdetails-data'>
            <div className='taskname'></div>
            <div className='task-description'></div>
            <div className='subtask-container'>
                <div className='heading'>Subtask</div>
                <div className='subtask-data'>
                    {
                        object.subtask.map((task)=>{
                            return <div>
                                        hello
                                   </div>
                        })
                    }
                </div>
            </div>
            <div className='manage-staus-btn-cont'>
                <button>move to previous</button>
                <button>move to next</button>
            </div>
        </div>
    </div>
  )
}

export default TaskDetails