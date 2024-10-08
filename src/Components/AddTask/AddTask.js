import React from 'react'
import "./addtask.css"
import { useState , useEffect } from 'react';
import plusSign from "../../Assets/plus-logo2.png"
import '../Modals/modals.css'
import SubTaskForm from './SubTaskForm';
import { useDispatch, useSelector } from 'react-redux';
// import { addTask } from '../Redux/Reducers/appBoardSlice';
import { createUUID, getBoard, getPath, getStatusOptions } from '../../Utils/Utils';
import { useLocation } from 'react-router';

import { Input ,DatePicker,Select,Modal,Form } from 'antd';





const AddTask = (props) => {
  const [showSubTask, setShowSubTask] = useState(false);
  const [statusOptions , setStatusOptions] = useState([])
  let boardId = getPath();
    const [ task ,setTask] = useState({
      // id : "",
      boardId:boardId,
      name : "",
      description :"",
      dueDate : "",
      assignTo : "",
      assignBy : "",
      status : "",
    });
    const [validateError , setValidateError]  = useState({
      name : "",
      description :"",
      dueDate : "",
      assignTo : "",
      assignBy : "",
      status : "",
    })
    // const [subtaskDetails, setSubTaskDetails] = useState({
    //   id : "",
    //   name : "",
    //   description : "",
    //   assigned_To : "",
    //   assigned_By : "",
    //   status : "TODO",
    // });
    // const [subTask,setSubTask] = useState([]);
    // const appBoards = useSelector(state=>state.appBoard)    
    // const dispatch = useDispatch();
    // const location = useLocation();
    
    // console.log(appBoards)                   
    // let board = getBoard(appBoards, boardId);
    // console.log(boardId,'boardId')
    // let statusOptions = getStatusOptions(props.board) || []  ;
    // console.log(statusOptions)

    async function submit(e){
        e.preventDefault();
        let newTask = task;
        // newTask = {...newTask, id : createUUID()};
        for(let val in newTask){
          validateFields(val,newTask[val])
        }
        for(let val in validateError){
          if(validateError[val] !== "") return 
        }

        // let boardId = getPath();

        // dispatch(addTask({task : newTask, boardId : boardId }));
        try {
            const response = await fetch('http://localhost:8080/task/create', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({...newTask}),
            });
        
            if (response.ok) {
              const data = await response.json();
              console.log('Board saved:', data);
            } else {
              console.error('Error saving board:', response.statusText);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        //   setTitleName("");
        // props.closeModal(false);
        

    

        // setTask({
        //     id : "",
        //     heading : "",
        //     description :"",
        //     subtask :[],
        //     status : ""
        // })
        props.handleAddTaskModal(false);

    }

    async function getStatusOptions(){
      try{
        let data = await fetch(`http://localhost:8080/board/getBoard/${boardId}`)
        let response = await data.json();
        console.log(response,"RESPONSE")
        let bars = response.statusBar.split(',').filter((val)=>val != undefined && val != "");
        let newBar = bars.map((value)=>{
          return { value : value , label : value}
        })
        // console.log(bars)
        console.log(newBar,"hello")
        setStatusOptions([...newBar])
        
      }catch(error){
        console.log(error)
      }
    }


    // const handleSubTaskDetails = (e)=>{
    //     const {name, value} = e.target;
    //     setSubTaskDetails((prevState)=>({
    //         ...prevState,
    //         [name] : value
    //     }))
        
    // }
    const validateFields = (name,value)=>{
      if(name === "name"){
        if(value.length > 100){
          setValidateError((preState)=>({...preState,[name] : "maximum length should be hundered"}))
        }else if(value === ""){
          setValidateError((preState)=>({...preState,[name] : "field cannot be empty"}))
        }else{
          setValidateError((preState)=>({...preState,[name] : ""}))
        }
      }
    }
    const handleTaskInput = (e)=>{
        const {name, value} = e.target;
       validateFields(name,value);
        setTask((prevState)=>({
            ...prevState,
            [name]  : value
        }))
        if(task.status == ""){
          setTask((prevState)=>({
            ...prevState,
            status  : "TODO"
        }))
        }
    }
    const handleTaskDate = (date,dateString)=>{
      const value = dateString
      // console.log(date,dateString)
      setTask((preState)=>({
        ...preState,
        dueDate : value
      }))

    }
    const handleTaskStatus=(value)=>{
      setTask((preState)=>({
        ...preState,
        status : value
      }))
    }

    // const createSubtask = ()=>{
       
    //     let subObject = subtaskDetails;
    //     subObject = {...subObject, id : createUUID()}
    //     let temp = task.subtask;
    //     temp.push(subObject);
    //     setTask((prevState)=>({
    //         ...prevState,
    //         subtask : temp
    //     }))
    //     setSubTaskDetails({
    //         id : "",
    //         heading : "",
    //         description : "",
    //         assigned_To : "",
    //         assigned_By : "",
    //         status : "TODO",
    //     })
    //     setShowSubTask(false);
    // }
    useEffect(()=>{
      getStatusOptions();
    },[])
    

  return (
    // <div className='add-task-modal-background'>
        <Modal open={props.showAddTaskModal} onOk={submit} onCancel={props.handleAddTaskModal}  okText = {"Add Task"}>
            <Form onSubmit={(e)=>{submit(e)}}  >
                <div className='add-task-heading'>
                Add new task
                </div>
                <div className='form-upperpart'>
                    <Form.Item validateStatus={validateError.name ? "error" : null } help= {validateError.name ? validateError.name : ""}>
                  <div className='label-input-cont'>
                    <Input onChange={(e)=>{handleTaskInput(e)}} name="name"  value={task.name}  type="text" required placeholder="Task name" />
                  </div>
                    </Form.Item>
                    <Form.Item validateStatus={validateError.description ? "error" : null } help= {validateError.description ? validateError.description : ""}>
                  <div className='label-input-cont'>
                    
                    
                      <Input onChange={(e)=>{handleTaskInput(e)}} name='description' value={task.description} placeholder='Description'  type="text" required />
                    
                  </div>
                  </Form.Item>
                  <Form.Item validateStatus={validateError.assignBy ? "error" : null } help= {validateError.assignBy ? validateError.assignBy : ""}>
                  <div className='label-input-cont'>
                    
                    
                      <Input onChange={(e)=>{handleTaskInput(e)}} name="assignBy"  value={task.assignBy} placeholder='Assigned By' type="text" required />
                    
                  </div>
                  </Form.Item>
                  
                  <Form.Item validateStatus={validateError.assignTo ? "error" : null } help= {validateError.assignTo ? validateError.assignTo : ""}>
                  <div className='label-input-cont'>
                    
                      <Input onChange={(e)=>{handleTaskInput(e)}} name="assignTo"  value={task.assignTo} placeholder='Assigned To' type="text" required />
                    
                  </div>
                  </Form.Item>
                  <Form.Item>
                  <div className=''>
                    
                      <DatePicker style={{width : "100%"}}  onChange={handleTaskDate} placeholder='Due Date' required />
                   
                  </div>
                  </Form.Item>
                </div>
                
                
                {/* {subTask.length != 0 ?
                    <div className='created-subtask-wrapper'>
                    {task.subtask.map((item, idx)=>{
                          return (<div key={idx} className='subtask-wrapper'>
                                <div className='subtask-heading-wrapper'>{item.heading}</div>
                                <button type='button' className='danger-btn cross-button'>x</button>
                            </div> ) 
                    })}
                    </div>
                    : 
                    null
                } */}
                {/* {showSubTask && 
                <SubTaskForm 
                    subtaskDetails={subtaskDetails}
                    createSubtask = {createSubtask}
                    handleSubTaskDetails = {handleSubTaskDetails}
                />} */}

                    {/* <div>
                        <div className='add-new-task-button-cont'>
                            <button type="button" className=" add-new-task-button" onClick={()=>setShowSubTask(true)}><img  src={plusSign} alt="" className=' image-add-new-task-plus' /> Add new Sub-task</button> 
                        </div>
                    </div> */}
                
            
                    
                    <Form.Item validateStatus={validateError.dueDate ? "error" : null } help= {validateError.dueDate ? validateError.dueDate : ""}>
                    <Select  style={{width : "100%",marginTop:"10px"}} onChange={handleTaskStatus} placeholder="Select Status" optionFilterProp="label"   
                    options = {statusOptions} />
                    </Form.Item>
                    
                    
                        
                                  
                    

                    {/* <div>
                        <div className='add-new-task-button-cont'>
                            <button type="submit" className='primary-btn'>Create task</button> 
                            <button type='button' className='danger-btn' onClick={()=>props.handleAddTaskModal(false)}>Close</button>
                        </div>
                    </div> */}
                {/* </div>  */}
            </Form>
        </Modal>
    // </div>
  )
}

export default AddTask