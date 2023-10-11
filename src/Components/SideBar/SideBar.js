import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import jiraLogo from "../../Assets/jira-logo-png.png";
import boardLogo from "../../Assets/board-logo.png";
import leftArrow from "../../Assets/left-arrow.png";
import rightArrow from "../../Assets/right-arrow.png";
import plusSign from "../../Assets/plus-logo.png"
import Modal from '../Modals/Modal';
import {appBoards} from "../../Constants"



const SideBar = () => {

  const [activeSideBar, setActiveSideBar] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [boards, setBoards] = useState(Object.keys(appBoards));
  const navigate = useNavigate();

  function toggleSideBar(){

    let sideBar = document.getElementById("sidebar");
    let logoName = document.getElementById("logo-name");

    if(activeSideBar === true){
      sideBar.style.width = "50px";
      logoName.style.display = "none"
      setActiveSideBar(false);
    }else{
      sideBar.style.width = "250px";
      logoName.style.display = "block"
      setActiveSideBar(true);
    }
     
     
  }

  function handleModalView(val){
    setShowModal(val);
  }

  const navigateToBoard = (board, boardName)=>{
    console.log(boardName,"sdjfhk")
    let boardID = board.board_id;
    navigate(`/${boardName}/${boardID}`);
  }

  

  return (
    <div id="sidebar" className='sideBar-menu'>
      <div className="logo-and-name-cont" onClick={()=>toggleSideBar()}>
        <div className="logo-cont">
          <img className="jira-logo" src={jiraLogo} alt="jiralogo" />
        </div> 
        <div id='logo-name' className="name-cont">
          JIRA
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------------------- */}
      <div className = "tab-and-hidebar-cont">
        <div  className="tab-add-cont">
          <div className="Tabs-cont">
            {boards.map((boardName, idx)=>{
              return (
                <div
                  onClick={()=>{navigateToBoard(appBoards[boardName], boardName)}}
                  className="tabs" 
                  key={idx}
                >
                  <div className="tooltext-board">
                    <img className='board-logo' src={boardLogo} alt='B'/> 
                    {activeSideBar ?
                    null :
                    <span className='board-tooltext'>
                       {boardName}
                    </span>
                    }
                  </div>
                  {/* <img className='board-logo' src={boardLogo} alt='B'/>  */}
                
                  <div className={activeSideBar ? "active-tab-name" : "inactive-tab-name"} >
                    {boardName}
                  </div>
                </div>
              )
            })}
           

          </div>
          <div className="add-tab-cont">
            {activeSideBar ? (
              <button className="primary-btn" onClick={(e)=>handleModalView(true)} ><img className='arrow' src={plusSign} alt='plus' />Add New Board</button>
            ):(
              <button className="primary-btn" onClick={(e)=>handleModalView(true)} >+
              <span className='add-tool-text'>
                Add Board
              </span>
              </button>
            )}
            
          </div>

        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------ */}
        <div className="hidebar-cont">
          {activeSideBar ? (
            <button className="primary-btn" onClick={()=>toggleSideBar()} ><img className='arrow' src={leftArrow} alt='left' /><div className={activeSideBar ? "active-tab-name" : "inactive-tab-name"} >Hide Side Bar</div></button>
          ):(
            
            <button className="primary-btn-right-arrow" onClick={()=>toggleSideBar()} ><img className='arrow' src={rightArrow} alt='left' />
            <span className='tooltiptext'>
              Show Side Bar.
            </span>
            </button>
            
          )}  
        </div>

      
      </div>
      {showModal ? <Modal title={"Board"} closeModal = {handleModalView}/> : null}

    </div>
  )
}

export default SideBar
