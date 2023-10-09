import React from "react";
import "./taskdetails.css";

import "../../index.css";
import SubTask from "../Subtask/SubTask";

const TaskDetails = () => {
  let object = {
    id: "123456",
    heading: "task1",
    description: "task 1 description",
    position: 1,
    subtask: [
      {
        id: "Abcd121",
        heading: "subtask1",
        description: "subtask 1 description",
        assigned_to: "anshu",
        assigned_by: "deepak",
        status: "PENDING",
      },
      {
        id: "Abcd122",
        heading: "subtask1",
        description: "subtask 1 description",
        assigned_to: "anshu",
        assigned_by: "deepak",
        status: "COMPLETED",
      },
      {
        id: "Abcd123",
        heading: "subtask1",
        description: "subtask 1 description",
        assigned_to: "anshu",
        assigned_by: "deepak",
        status: "COMPLETED",
      },
      {
        id: "Abcd126",
        heading: "subtask1",
        description: "subtask 1 description",
        assigned_to: "anshu",
        assigned_by: "deepak",
        status: "TODO",
      },
      {
        id: "Abcd127",
        heading: "subtask1",
        description: "subtask 1 description",
        assigned_to: "anshu",
        assigned_by: "deepak",
        status: "TODO",
      },
      {
        id: "Abcd128",
        heading: "subtask1",
        description: "subtask 1 description",
        assigned_to: "anshu",
        assigned_by: "deepak",
        status: "TODO",
      },
      {
        id: "Abcd124",
        heading: "subtask1",
        description: "subtask 1 description",
        assigned_to: "anshu",
        assigned_by: "deepak",
        status: "PENDING",
      },
      {
        id: "Abcd125",
        heading: "subtask1",
        description: "subtask 1 description",
        assigned_to: "anshu",
        assigned_by: "deepak",
        status: "COMPLETED",
      },
    ],
  };

  let subtasks = object.subtask;
  

  return (
    <div className="taskdetails-main-cont">
      <div className="task-details">
        <div className="task-details-heading">Task Details.</div>
        <div className="details-wrapper">
          <div className="main-task-details">
            <div className="main-task-headings-cont">
              <div className="task-heading">Task Id :</div>
              <div className="task-content-cont"> {object.id}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">Task Name :</div>
              <div className="task-content-cont">{object.heading}</div>
            </div>
            <div className="main-task-headings-cont description">
              <div className="task-heading">Task Description :</div>
              <div className="task-content-cont">{object.description}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">Total Subtasks :</div>
              <div className="task-content-cont">{subtasks.length}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">To Do's :</div>
              <div className="task-content-cont">{}</div>
            </div>
            <div className="main-task-headings-cont">
              <div className="task-heading">Pending :</div>
              <div className="task-content-cont">{}</div>
            </div>
            <div className="main-task-headings-cont">
                <div  className="task-heading">Completed :</div>
                <div className="task-content-cont">{}</div>
            </div>
          </div>
          <div className="sub-task-details">
            <div>
                Sub-tasks :
            </div>
            <div className="subtask-content">
                {subtasks.map((subtask,idx)=>{
                    return (<SubTask subtask={subtask}/>);
                })}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
