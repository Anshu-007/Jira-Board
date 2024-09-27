import React, { useEffect } from 'react'
import SideBar from '../SideBar/SideBar';
import Board from '../Board/Board';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import './home.css'
import Guidance from '../Guidance/Guidance';
import Page404 from '../Page404/Page404'
import TaskDetails from '../TaskDetails/TaskDetails'
import Header from '../Header/Header';

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        let authorisedUser = localStorage.getItem('authorisedUser');
        console.log(authorisedUser)
        if(!authorisedUser){
            navigate('/')
        }
    },[])
    
  return (
    <>
    <div className="header">
        <Header/>
    </div>
      <div className='home'>
          {/* <Header/> */}
        <SideBar />
        {location.pathname === "/home" ? 
            <Guidance/> 
            :
            <div className='components-container'>
                < Routes>
                    <Route path='/:board/:id' element={<Board/>} />
                    <Route path='/taskDetails/:id' element={<TaskDetails/>}/>
                    <Route path='/*' element={<Page404/>} />
                </Routes>
            </div>
        }
        
    </div>
    </>
  )
}

export default Home
