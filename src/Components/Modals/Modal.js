import React, { useState } from 'react'
import './modals.css'
import { useDispatch } from 'react-redux';
import { addBoard } from '../Redux/Reducers/appBoardSlice';
import { addStatusBar} from '../Redux/Reducers/appBoardSlice';




const Modal = (props) => {
    const [boardName, setBoardName] = useState("");
    const dispatch = useDispatch();

    const createBoard = (e) =>{
        e.preventDefault();

        // post api to create board 
        // console.log("board created for " ,boardName);
        setBoardName("");
    }
   
    function handleAddBoard(title){
        // console.log(title);
        if(title == "Board"){
            dispatch(addBoard(boardName));
        }
        else{
            dispatch(addStatusBar(boardName));
        }
        
    }



    

  return (
    <div className='add-board-modal-background'>
        <div className='add-board-modal'>
            <form onSubmit={(e)=>{createBoard(e)}}  className='modal-form'>                
                <label><h1>Enter {props.title} Name</h1></label>
                <input onChange={(e)=>setBoardName(e.target.value)} value={boardName} className='modal-input' placeholder={`Enter ${props.title}`} type="text" required />
                <div className='modal-button-wrapper'>
                    <button type='submit'onClick={()=>handleAddBoard(props.title)} className='primary-btn'>
                        Create {props.title}
                    </button>
                    <button type='button' onClick={()=>{props.closeModal(false)}} className='danger-btn'>
                        Cancel
                    </button>
                </div>
                
            </form>
        </div>
        
    </div>
  )
}

export default Modal
