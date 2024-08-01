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
    const [appBoards,setAppBoards] = useState();
    const [board,setBoard] = useState(null);
    const [fromStatus, setFromStatus] = useState(null);
    const [toStatus, setToStatus] = useState(null);
    const [taskId, setTaskId] = useState(null);
    const [barIndex , setBarIndex] = useState({});
    const location = useLocation()
    // let boardName = location.state.boardName;
    let boardName = '';
    let boardId = getPath();

    useEffect(()=>{
        // setAppBoards( reduxState);
        async function getBoardData() {
            try {
              let boards = await fetch(`http://localhost:8080/board/getBoard/${boardId}`);
              let response = await boards.json();
            //   console.log(response);
              let index = {};
              let bars = response.statusBar.split(',').map((val,idx)=>{
                  if(typeof val === "string" && val != ''){
                        // console.log(typeof typeof val)
                        index[val] = idx;

                        return { name : val , value : []  }
                    }
                    
                }).filter((val)=>val != undefined);
                setBarIndex(index);
                setBoard([...bars]);
                // console.log(bars)
                getTasks([...bars],index);
            } catch (error) {
              console.log( error);
            }
          }
          getBoardData();
          
        // let currentBoard = getBoard(appBoards, boardId);
        // setBoard(appBoards);
    },[boardId])
    
    async function getTasks(statusBar,index){
        try {
            let data = await fetch(`http://localhost:8080/task/getAllTask/${boardId}`)
            let response = await data.json();
            // console.log(response)
            let bars = statusBar;
            console.log(bars)
            let obj = {};
            for(let i = 0 ; i < response.length ; i++){
                let status = response[i].status;
                if(obj[status] !== undefined){
                    obj[status].push(response[i])
                }else{
                    obj[status] = [];
                    obj[status].push(response[i])
                }

                
            }
            console.log(bars)
            console.log(barIndex)
            console.log(obj)
            for(let val in obj){
                bars[index[val]].value = [...obj[val]];
            }
                
            // console.log(bars);
            setBoard((prevState)=>{console.log(prevState,bars) 
                return [...bars]})
        } catch (error) {
            console.log(error)
        }
    }
   
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
  return (
    <div className='board-container'>
        {showAddTaskModal ? <AddTask board = {appBoards} handleAddTaskModal={handleAddTaskModal}/> : null }
        {/* {showAddTaskModal ? <Modal  closeModal={handleAddTaskModal}/> : null} */}
        <div className='active-board-and-add-task-btn-container'>
            <div className='current-board-heading'>{boardName}</div>
            <div className='add-task-btn' >
                <button onClick={(e)=>handleAddTaskModal(e,true)} className='primary-btn'>add task</button>
            </div>
        </div>
        <div className='status-bar-container'>

            {
               board ?  board.map((status,idx)=>{
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