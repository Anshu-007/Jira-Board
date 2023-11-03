import React, { useEffect, useState } from 'react'
import "./board.css"
import plusSign from "../../Assets/plus-logo.png"
import StatusBar from '../StatusBar/StatusBar'
// import {appBoards} from "../../Constants"
import AddTask from '../AddTask/AddTask'
import Modal from '../Modals/Modal'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getBoard, getPath } from '../../Utils/Utils'

const Board = () => {

    const [showAddBoard, setShowAddBoard] = useState(false);
    const [showAddTaskModal,setShowAddTaskModal] = useState(false);
    const reduxState = useSelector(state=>state.appBoard)
    const [appBoards,setAppBoards] = useState(reduxState);
    const [board,setBoard] = useState(null);
    const [fromStatus, setFromStatus] = useState(null);
    const [toStatus, setToStatus] = useState(null);
    const [taskId, setTaskId] = useState(null);
    const location = useLocation()
    let boardName = location.state.boardName;
    let boardId = getPath();

    useEffect(()=>{
        setAppBoards( reduxState);
        let currentBoard = getBoard(reduxState, boardId);
        setBoard(currentBoard);
    },[reduxState,boardId])
    
    
    function addTaskForm(){
       let addTask = document.getElementById("addTaskCont-id");
       addTask.style.display = "block";
    }

    const handleAddTaskModal = (e,val)=>{
        // console.log(e)
        setShowAddTaskModal(val);
    }

    const handleAddStatusBarModal = (val) =>{
        setShowAddBoard(val)
    }
    

    // let boards =appBoards;
    // let boardID = location.pathname.substring(location.pathname.lastIndexOf('/')+1);

    // let board = {};
    // for(let i = 0; i < appBoards.length; i++){
    //     if(appBoards[i].board_id === boardID){
    //         board = appBoards[i];
    //         break;
    //     }
    // }
    
  return (
    <div className='board-container'>
        {showAddTaskModal ? <AddTask handleAddTaskModal={handleAddTaskModal}/> : null }
        {/* {showAddTaskModal ? <Modal  closeModal={handleAddTaskModal}/> : null} */}
        <div className='active-board-and-add-task-btn-container'>
            <div className='current-board-heading'>{boardName}</div>
            <div className='add-task-btn' >
                <button onClick={(e)=>handleAddTaskModal(e,true)} className='primary-btn'>add task</button>
            </div>
        </div>
        <div className='status-bar-container'>

            {
               board ?  board.boardStatusBars.map((status,idx)=>{
                    return  <StatusBar 
                                key={idx} 
                                statusBarData = {status.value} 
                                StatusBarHeading = {status.name} 
                                index={idx}
                                fromStatus={fromStatus}
                                setFromStatus={setFromStatus}
                                toStatus={toStatus}
                                setToStatus={setToStatus}
                                taskId = {taskId}
                                setTaskId={setTaskId}

                            />
                    
                }) : null
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