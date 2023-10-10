import React from 'react'
import eye from "../../Assets/eye.png";
import editimg from "../../Assets/edit.png";
import "./subTask.css";


const SubTask = (props) => {
  

    const {subtask,getSubTask} = props;
    // console.log(getSubTask);
    let completeColor = 'rgb(181 255 185)';
    let pendingColor = 'rgb(211 195 255)';
    let todoColor = 'rgb(255 200 174)';

    let background = subtask.status === "TODO" ? todoColor : subtask.status === "PENDING" ? pendingColor : completeColor;

  return (
    <div className='subtask-cont' key={subtask.id}>
            <div className='subtask-details'>
                    <h5>Subtask :</h5><h6>{subtask.heading}</h6>
            </div>
            


            <div className='subtask-img-wrapper'>
                <div className='subtask-status'  style={{backgroundColor : background}}>
                  {subtask.status}

                </div>
                <div className='subtask-img-cont'>
                    <img onClick={(e)=>getSubTask(e,subtask)} className='subtask-img' src={eye} alt="" />

                </div>
            </div>  
            
    </div>
  )
}

export default SubTask
