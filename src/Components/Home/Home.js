import React from 'react'
import SideBar from '../SideBar/SideBar';
import Board from '../Board/Board';
import {Routes, Route, useLocation} from "react-router-dom"
import './home.css'
import Guidance from '../Guidance/Guidance';
import Page404 from '../Page404/Page404'
import TaskDetails from '../TaskDetails/TaskDetails'

const Home = () => {
    const location = useLocation();
  return (
    <div className='home'>
        <SideBar />
        {location.pathname === "/home" ? 
            <Guidance/> 
            :
            <div className='components-container'>
                < Routes>
                    <Route path='/board' element={<Board/>} />
                    <Route path='/taskDetails' element={<TaskDetails/>}/>
                    <Route path='/task' element={<h1>space for task details page</h1>} />
                    <Route path='/*' element={<Page404/>} />
                </Routes>
            </div>
        }
        
    </div>
  )
}

export default Home
