import React, { useState } from 'react'
import './modals.css'
import { useDispatch } from 'react-redux';
import { addBoard } from '../Redux/Reducers/appBoardSlice';
import { addStatusBar} from '../Redux/Reducers/appBoardSlice';
import {getPath} from '../../Utils/Utils'




const Modal = (props) => {
    const [titleName, setTitleName] = useState("");
    const dispatch = useDispatch();

    const createBoard = (e, title) =>{
        e.preventDefault();

        if(title == "Board"){
            dispatch(addBoard(titleName));
        }
        else{
            let path = getPath();
            dispatch(addStatusBar({statusBarName :titleName,boardId:path}));
        }
        setTitleName("");
        props.closeModal(false);
    }

  return (
    <div className='add-board-modal-background'>
        <div className='add-board-modal'>
            <form onSubmit={(e)=>{createBoard(e,props.title)}}  className='modal-form'>                
                <label><h1>Enter {props.title} Name</h1></label>
                <input onChange={(e)=>setTitleName(e.target.value)} value={titleName} className='modal-input' placeholder={`Enter ${props.title}`} type="text" required />
                <div className='modal-button-wrapper'>
                    <button type='submit' className='primary-btn'>
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
