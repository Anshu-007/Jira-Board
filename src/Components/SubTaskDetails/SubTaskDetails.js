import React from 'react'
import './subTaskDetails.css'

const subTaskDetails = (props) => {
   const {subTask,closePopUp} = props;
    
      
  return (
    <div display='none' className='subtaskdetails-cont'>
    
      <div className="task-details">
        
        
          <div className="sub-main-task-details">
          <div className="task-details-heading">Sub Task Details.</div>
            <div className="main-task-headings-cont">
            
              <div className="task-heading">Task Id :</div>
              <div className="task-content-cont"> {subTask.id}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">Task Name :</div>
              <div className="task-content-cont">{subTask.heading}</div>
            </div>
            <div className="main-task-headings-cont description">
              <div className="task-heading">Task Description :</div>
              <div className="task-content-cont">{subTask.description}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">Total Subtasks :</div>
              <div className="task-content-cont">{subTask.length}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">Status :</div>
              <div className="task-content-cont">{}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">Assign To :</div>
              <div className="task-content-cont">{}</div>
            </div>
            <div className="main-task-headings-cont">
                <div  className="task-heading">Assign By :</div>
                <div className="task-content-cont">{}</div>
            </div>
            <div className='add-new-task-button-cont'>
              <div className=''>
                  <button 
                    // onClick={(e)=>editsubtask(e,subTask)} 
                    className='primary-btn'>
                    Edit
                  </button>
              </div>
              <div className=''>
                  <button onClick={(e)=>closePopUp(e)} className='danger-btn'>Close</button>
              </div>
           </div>
          </div>

          

         
        
      </div>
    
</div>
  )
}

export default subTaskDetails