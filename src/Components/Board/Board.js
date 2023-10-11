import React, { useState } from 'react'
import "./board.css"
import plusSign from "../../Assets/plus-logo.png"
import StatusBar from '../StatusBar/StatusBar'
import {appBoards} from "../../Constants"
import AddTask from '../AddTask/AddTask'
import Modal from '../Modals/Modal'
import { useLocation } from 'react-router-dom'

const Board = () => {

    const [showAddBoard, setShowAddBoard] = useState(false);
    const [showAddTaskModal,setShowAddTaskModal] = useState(false);
    const location = useLocation()
    
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
    

    let boards = Object.keys(appBoards);
    let boardID = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
    // console.log(boardID, boards)

    let board = {};
    for(let i = 0; i < boards.length; i++){
        if(appBoards[boards[i]].board_id === boardID){
            board = appBoards[boards[i]];
            break;
        }
    }

    let boardStatusBars = Object.keys(board.boardStatusBars);
    
  return (
    <div className='board-container'>
        {showAddTaskModal ? <AddTask handleAddTaskModal={handleAddTaskModal}/> : null }
        {/* {showAddTaskModal ? <Modal  closeModal={handleAddTaskModal}/> : null} */}
        <div className='active-board-and-add-task-btn-container'>
            <div className='current-board-heading'>Board 1</div>
            <div className='add-task-btn' >
                <div onClick={(e)=>handleAddTaskModal(true)} className='primary-btn'>add task</div>
            </div>
        </div>
        <div className='status-bar-container'>
            
            {
                boardStatusBars.map((value,idx)=>{
                    // console.log(value)
                    return  <StatusBar value = {board.boardStatusBars[value]} StatusBarHeading = {value} index={idx}/>
                    
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