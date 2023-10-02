import React from 'react'

const SubTaskForm = (props) => {

    const {subtaskDetails, createSubtask, handleSubTaskDetails} = props;

    return (
        <div className='form-lowerpart'>
            <div className='subtask-heading'>
                Sub-Task
            </div>
            <div className='lower-second-cont '>
                <div className='subtask-cont-first'>
                    <div className='subtask-lable-input-cont'>
                        <label htmlFor="" className='label-add-task' >Task</label>
                        <div className='input-conto'>
                            <input onChange={(e) => { handleSubTaskDetails(e) }} name="heading" value={subtaskDetails.heading} type="text" required />
                        </div>
                    </div>
                    <div className='subtask-lable-input-cont'>
                        <label htmlFor="" className='label-add-task'>Discription</label>
                        <div className='input-conto'>
                            <input onChange={(e) => { handleSubTaskDetails(e) }} name="description" value={subtaskDetails.description} type="text" required />
                        </div>
                    </div>
                </div>
                <div className='subtask-cont-first'>
                    <div className='subtask-lable-input-cont'>
                        <label htmlFor="" className='label-add-task'> Asign To</label>
                        <div className='input-conto'>
                            <input onChange={(e) => { handleSubTaskDetails(e) }} name="assigned_To" value={subtaskDetails.assigned_To} type="text" required />
                        </div>
                    </div>
                    <div className='subtask-lable-input-cont'>
                        <label htmlFor="" className='label-add-task'>Assignee</label>
                        <div className='input-conto'>
                            <input onChange={(e) => { handleSubTaskDetails(e) }} name="assigned_By" value={subtaskDetails.assigned_By} type="text" required />
                        </div>
                    </div>
                </div>

            </div>
            <button type='button' className='primary-btn' onClick={() => { createSubtask() }}>Create Sub Task</button>
        </div>
    )
}

export default SubTaskForm
