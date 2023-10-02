import React, { useState } from 'react'
import "./board.css"
import plusSign from "../../Assets/plus-logo.png"
import StatusBar from '../StatusBar/StatusBar'
import {appBoards} from "../../Constants"
import AddTask from '../AddTask/AddTask'
import Modal from '../Modals/Modal'

const Board = () => {

    const [showAddBoard, setShowAddBoard] = useState(false);
    const [showAddTaskModal,setShowAddTaskModal] = useState(false);
    
    function addTaskForm(){
       let addTask = document.getElementById("addTaskCont-id");
       addTask.style.display = "block";
    }

    const handleAddTaskModal = (val)=>{
        setShowAddTaskModal(val);
    //     let addTask = document.getElementById("addTaskCont-id");
    //    addTask.style.display = "none";
    }

    const handleAddStatusBarModal = (val) =>{
        setShowAddBoard(val)
    }
    
    let board = appBoards.board1;
    let key = Object.keys(board);
    
  return (
    <div className='board-container'>
        {showAddTaskModal ? <AddTask handleAddTaskModal={handleAddTaskModal}/> : null }
        {/* {showAddTaskModal ? <Modal  closeModal={handleAddTaskModal}/> : null} */}
        <div className='active-board-and-add-task-btn-container'>
            <div className='current-board-heading'>Board 1</div>
            <div className='add-task-btn' >
                <div onClick={(e)=>handleAddTaskModal(true)} className='primary-btn'>add task</div>
            </div>
            <div className='add-task-btn' >
                <div onClick={()=>handleAddTaskModal(true)} className='primary-btn'>add task</div>
            </div>
        </div>
        <div className='status-bar-container'>
            
            {
                key.map((value,idx)=>{
                    // console.log(value)
                    return  <StatusBar value = {board[value]} StatusBarHeading = {value} />
                    
                })
            }
            
            <div className='status-bar'>
                
                <div className='task-container task-container-add' onClick={()=>{handleAddStatusBarModal(true)}} style={{marginTop: "18px"}}>
                    <img className='plus-sign-img' src={plusSign} alt="add logo" />
                </div>
            </div>


            
            
        </div>
        {showAddBoard ? <Modal title={"Status Bar"} closeModal= {handleAddStatusBarModal}/> : null}
        
    </div>
           
  )
}

export default Board