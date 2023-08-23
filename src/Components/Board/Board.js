import React from 'react'
import "./board.css"
import plussign from "../../Assets/icons8-plus-512.png"

const Board = () => {
    let Board1 = {
        "heading" : "Board1",
        ToDo : [{description : "hello world",name : "a" ,task: 2},{name : "b" ,task: 3},{name : "c" ,task: 4},{name : "d" ,task: 5},{name : "e" ,task: 6},{name : "f" ,task: 7},{description : "hello world",name : "a" ,task: 2},{name : "b" ,task: 3},{name : "c" ,task: 4},{name : "d" ,task: 5},{name : "e" ,task: 6},{name : "f" ,task: 7},{description : "hello world",name : "a" ,task: 2},{name : "b" ,task: 3},{name : "c" ,task: 4},{name : "d" ,task: 5},{name : "e" ,task: 6},{name : "f" ,task: 7}],
        Inprogress : [{description : "hello world",name : "a" ,task: 2},{name : "b" ,task: 3},{name : "c" ,task: 4},{name : "d" ,task: 5},{name : "e" ,task: 6},{name : "f" ,task: 7}], 
        Done : [{description : "hello world",name : "a" ,task: 2},{name : "b" ,task: 3},{name : "c" ,task: 4},{name : "d" ,task: 5},{name : "e" ,task: 6},{name : "f" ,task: 7}] 
    }
  return (
    <div className='board-container'>
        <div className='active-board-and-add-task-btn-container'>
            <div className='current-board-heading'>Board 1</div>
            <div className='add-task-btn' >
                <div className='primary-btn'>add task</div>
            </div>
        </div>
        <div className='status-bar-container'>
            <div className='status-bar'>
                <div className='status-heading'>To Do</div>
                <div className='task-container'>
                    {Board1.ToDo.map((task)=>{
                        return <div className='task'>
                            <div className='task-description'>{task["description"]}</div>
                            <div className='task-data'>
                                <div className='task-name'>{task["name"]}</div>
                                <div className='task-number'>{task["task"]}</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className='status-bar'>
                <div className='status-heading'>In Progress</div>
                <div className='task-container'>
                {Board1.Inprogress.map((task)=>{
                         return <div className='task'>
                         <div className='task-description'>{task["description"]}</div>
                         <div className='task-data'>
                             <div className='task-name'>{task["name"]}</div>
                             <div className='task-number'>{task["task"]}</div>
                         </div>
                     </div>
                 })}
                </div>
            </div>
            <div className='status-bar'>
                <div className='status-heading'>Done</div>
                <div className='task-container'>
                {Board1.Done.map((task)=>{
                         return <div className='task'>
                         <div className='task-description'>{task["description"]}</div>
                         <div className='task-data'>
                             <div className='task-name'>{task["name"]}</div>
                             <div className='task-number'>{task["task"]}</div>
                         </div>
                     </div>
                 })}
                </div>
            </div>
            <div className='status-bar'>
                
                <div className='task-container task-container-add' style={{marginTop: "18px"}}>
                    <img className='plus-sign-img' src={plussign} alt="add logo" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Board