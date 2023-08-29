import React from 'react'
import "./board.css"
import plusSign from "../../Assets/plus-logo.png"
import StatusBar from '../StatusBar/StatusBar'
import {appBoards} from "../../Constants"

const Board = () => {
    // console.log(appBoards);
    
    
    let board = appBoards.board1;
    let key = Object.keys(board);
    // console.log(board);
    
  return (
    <div className='board-container'>
        <div className='active-board-and-add-task-btn-container'>
            <div className='current-board-heading'>Board 1</div>
            <div className='add-task-btn' >
                <div className='primary-btn'>add task</div>
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
                
                <div className='task-container task-container-add' style={{marginTop: "18px"}}>
                    <img className='plus-sign-img' src={plusSign} alt="add logo" />
                </div>
            </div>
            
        </div>
        
    </div>
           
  )
}

export default Board