import React,{useState} from 'react';
import './sidebar.css';
import jiraLogo from "../../Assets/jira-logo-png.png";
import boardLogo from "../../Assets/board-logo.png";
import leftArrow from "../../Assets/left-arrow.png";
import rightArrow from "../../Assets/right-arrow.png";



const SideBar = () => {

  const [activeSideBar, setActiveSideBar] = useState(true);

  function toggleSideBar(){

    let sideBar = document.getElementById("sidebar");
    let logoName = document.getElementById("logo-name");

    if(activeSideBar == true){
      sideBar.style.width = "50px";
      logoName.style.display = "none"
      setActiveSideBar(false);
    }else{
      sideBar.style.width = "250px";
      logoName.style.display = "block"
      setActiveSideBar(true);
    }
     
     
  }

  

  return (
    <div id="sidebar" className='sideBar-menu'>
      <div className="logo-and-name-cont">
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
            <div className="tabs">
              <img className='board-logo' src={boardLogo} alt='B'/> 
              <div className={activeSideBar ? "active-tab-name" : "inactive-tab-name"} >Board 1</div>
            </div>
            <div className="tabs">
              <img className='board-logo' src={boardLogo} alt='B'/> 
              <div className={activeSideBar ? "active-tab-name" : "inactive-tab-name"}>Board 2</div>
            </div>
            <div className="tabs">
              <img className='board-logo' src={boardLogo} alt='B'/> 
              <div className={activeSideBar ? "active-tab-name" : "inactive-tab-name"}>Board 3</div>
            </div>

          </div>
          <div className="add-tab-cont">
            {activeSideBar ? (
              <button className="primary-btn" >Add New Board</button>
            ):(
              <button className="primary-btn" >+</button>
            )}
            
          </div>

        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------ */}
        <div className="hidebar-cont">
          {activeSideBar ? (
            <button className="primary-btn" onClick={()=>toggleSideBar()} ><img className='arrow' src={leftArrow} alt='left' />add New Board</button>
          ):(
            
            <button className="primary-btn-right-arrow" onClick={()=>toggleSideBar()} ><img className='arrow' src={rightArrow} alt='left' /></button>
            
          )}  
        </div>

      
      </div>

    </div>
  )
}

export default SideBar
