import React, { Children } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getPath, getBoard, getStatusOptions } from '../../Utils/Utils';
import { Drawer,Descriptions,Button ,Card ,Input} from 'antd';
import { useState ,useEffect } from 'react';
import TaskDetails from '../TaskDetails/TaskDetails';

const Todo = ({task,idx, statusName,statusBarData}) => {
  const [open , setOpen] = useState(false)
  const [items , setItems] = useState([]);
  const [activeEdit,setActiveEdit] = useState(false)
  
  

// console.log(statusBarData,'FROM TODO')
  // const appBoards = useSelector(state => state.appBoard);

  const navigate = useNavigate();
  let completedSubTask = 0;
  let totalSubTask = task?.subtask?.length || 0;

  let subTask = task?.subtask || [];
  for(let i = 0; i < subTask.length; i++){
    if(subTask[i].status === "COMPLETED"){
      completedSubTask++;
    }
  }
  const openDrawerHandler =()=>{
    setOpen(true)
    // console.log("OPEN")
  }
  const closeDrawerHandler =()=>{
    // console.log("PRINT")
    setOpen(false)
    // console.log(open)
  }
  const handleEdit = ()=>{
    setActiveEdit(true);
  }
  const handleSave= ()=>{}
  // const navigateToTakDetails = (taskId)=>{
  //   let boardId = getPath();
  //   // let board = getBoard(statusBarData,boardId)
  //   // console.log(board)
  //   // let statusOptions = getStatusOptions(board)
  //   // console.log(statusOptions);
  //   let path = `/taskDetails/${taskId}`
  //   navigate(path,{state:{task,boardId,statusName}})
  // }

useEffect(()=>{
  let arr = [];
  
  eval();

  let count = 1;
  for(let val in task){
    let flex 
    if(val == "boardId") flex = true
    let obj = {key : count , label : val , children : activeEdit ? <Input variant="borderless"  value={task[val]}/> : task[val]}
    arr.push(obj);
   }
   setItems([...arr])
   console.log(arr)
},[activeEdit])
// console.log(open,"OPEN")
  return (
    <>
    {/* <div id={task.id} onClick={openDrawerHandler} key={idx}  className='task' draggable="true">
        
    </div> */}
      <Card onClick={openDrawerHandler}  size="small" title = {task.name}>
      <div className='subtask-count'>Completed : {completedSubTask}/{totalSubTask}</div>
      </Card>
      <Drawer size="large"   id = {task.id} onClose={closeDrawerHandler} open={open}>
        {/* <TaskDetails task={task}/> */}
        <div>

        <Descriptions column={1} bordered  title ="Task Details"  extra={<><Button onClick={activeEdit? (e)=>handleSave(e): (e)=>handleEdit(e)} type="primary">{activeEdit? "Save" :"Edit"}</Button> {activeEdit?<Button>Cancle</Button>:null} </> } items={items}/>
        </div>
      </Drawer>
    </>
  ) 
}

export default Todo