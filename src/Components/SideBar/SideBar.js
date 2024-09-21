import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import jiraLogo from "../../Assets/jira-logo-png.png";
import boardLogo from "../../Assets/board-logo.png";
import leftArrow from "../../Assets/left-arrow.png";
import rightArrow from "../../Assets/right-arrow.png";
import plusSign from "../../Assets/plus-logo.png"
import logout from "../../Assets/logout.png"
import Modal from '../Modals/Modal';
// import {appBoards} from "../../Constants"
import { useSelector, useDispatch } from 'react-redux';
import { getBoard } from '../../Utils/Utils';
// import { allBoards } from '../Redux/Reducers/appBoardSlice'
import { Button } from 'antd';

const SideBar = () => {
  const [activeBoardName,setActiveBoardName] = useState("");
  const [activeSideBar, setActiveSideBar] = useState(true);
  const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
const reduxState = useSelector(state=>state.appBoard)
  const [boards, setBoards] = useState();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    // console.log(reduxState);
    
    async function getBoardData() {
      try {
        let boards = await fetch("http://localhost:8080/board/getAllBoards");
        let response = await boards.json();
        setBoards(response);
        setActiveBoardName(response[0].name)
        
        // dispatch(allBoards(response))

        
      } catch (error) {
        console.log( error);
      }
    }
    getBoardData();
    // setBoards(reduxState);
  },[])

  function toggleSideBar(){

    let sideBar = document.getElementById("sidebar");
    let logoName = document.getElementById("logo-name");

    if(activeSideBar === true){
      sideBar.style.width = "75px";
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

  const navigateToBoard = (board)=>{
    // console.log(board.boardName,"sdjfhk")
    let boardID = board.id;
    console.log(board)
    navigate(`/board/${boardID}`, {state:{boardName: board.name}});
    setActiveBoardName(board.name);
    console.log(board.name)
  }

  const logoutUser = ()=>{
    localStorage.removeItem('authorisedUser')
    navigate('/')
  }

  return (
    <div id="sidebar" className='sideBar-menu'>
      <div className="logo-and-name-cont" onClick={()=>toggleSideBar()}>
        <div className="logo-cont">
          <img className="jira-logo" src={jiraLogo} alt="jiralogo" />
          <div id='logo-name' className="name-cont">
          JIRA
        </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------------------- */}
      <div className = "tab-and-hidebar-cont">
        <div  className="tab-add-cont">
          <div className="Tabs-cont">
            {boards && boards.map((board, idx)=>{
              return (
                
                  <div
                    onClick={()=>{navigateToBoard(board)}}
                    className={board.name===activeBoardName? "active-Board-Name" : "tabs" } 
                    key={idx}
                  >
                    <div className="tooltext-board">
                      <img className='board-logo' src={boardLogo} alt='B'/> 
                      {activeSideBar ?
                      null :
                      <span className='board-tooltext'>
                        {board.name}
                      </span>
                      }
                    </div>
                    {/* <img className='board-logo' src={boardLogo} alt='B'/>  */}
                  
                    <div className={activeSideBar ? "active-tab-name" : "inactive-tab-name"} >
                      {board.name}
                    </div>
                  </div>
              )
            })}
          </div>
          <div>
          </div>
          <div className="add-tab-cont">
            {activeSideBar ? (
              <Button className="primary-btn" onClick={(e)=>handleModalView(true)} ><img className='arrow' src={plusSign} alt='plus' />Add New Board</Button>
            ):(
              <Button className="primary-btn" onClick={(e)=>handleModalView(true)} >+
              <span className='add-tool-text'>
                Add Board
              </span>
              </Button>
            )}
            
          </div>
        </div>
<div>

        <div className="hidebar-cont">
          {activeSideBar ? (
            <Button className="primary-btn" onClick={()=>toggleSideBar()} ><img className='arrow' src={leftArrow} alt='left' /><div className={activeSideBar ? "active-tab-name" : "inactive-tab-name"} >Show Side Bar</div></Button>
          ):(
            
            <Button className="primary-btn-right-arrow" onClick={()=>toggleSideBar()} ><img className='arrow' src={rightArrow} alt='left' />
            <span className='tooltiptext'>
              Show Side Bar
            </span>
            </Button>
            
          )}  

          </div>
          <div className="hidebar-cont">
          <div
            onClick={()=>{logoutUser()}}
            className="tabs"
          >
            <div className="tooltext-board">
              <img className='board-logo' src={logout} alt='B'/> 
              {activeSideBar ?
              null :
              <span className='board-tooltext'>
                Logout
              </span>
              }
            </div>
            {/* <img className='board-logo' src={boardLogo} alt='B'/>  */}
          
            <div className={activeSideBar ? "active-tab-name" : "inactive-tab-name"} >
              Logout
            </div>
          </div>
          </div>
        </div>

      
      </div>
      {showModal ? <Modal title={"Board"} closeModal = {handleModalView}/> : null}

    </div>
  )
}

export default SideBar