import React from "react";
import "./subTaskDetails.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSubtask } from "../Redux/Reducers/appBoardSlice";

const SubTaskDetails = (props) => {
  const { subTask, closePopUp , statusOptions } = props;
  
  const [subtaskDetail, setSubTaskDetail] = useState({
    id: subTask.id,
    heading: subTask.heading,
    description: subTask.description,
    assigned_To: subTask.assigned_To,
    assigned_By: subTask.assigned_By,
    status: subTask.status,
  });

  const [editEnable, setEditEnable] = useState(false);

  const dispatch = useDispatch();

  function handleChange(e) {
    let key = e.target.getAttribute("name");

    let val = e.target.value;
    let a = { ...subtaskDetail , [key] : val};
    // a[key] = val;
    setSubTaskDetail(a);
  }

  function dispatchEditSubTask() {
    dispatch(editSubtask(subtaskDetail));
  }

  function save() {
    dispatchEditSubTask();
    closePopUp();
  }

  function openEditForm() {
    setEditEnable(true);
  }

  function openViewForm() {
    setEditEnable(false);
  }

  return (
    <div id="main" display="none" className="subtaskdetails-cont">
      <div
        id="view-subtask-popup"
        style={{ display: "block" }}
        className="task-details"
      >
        <div className="sub-main-task-details">
          <div className="task-details-heading">Sub Task Details.</div>
          <div className="main-task-headings-cont">
            <div className="task-heading">Task Id :</div>
            {editEnable ? (
              <input
                disabled
                className="subtask-edit-input"
                name="id"
                value={subtaskDetail.id}
              />
            ) : (
              <div className="task-content-cont"> {subtaskDetail.id}</div>
            )}
          </div>
          <div className="main-task-headings-cont">
            <div className="task-heading">Task Name :</div>
            {editEnable ? (
              <input
                className="subtask-edit-input"
                name="heading"
                onChange={handleChange}
                value={subtaskDetail.heading}
              />
            ) : (
              <div className="task-content-cont">{subtaskDetail.heading}</div>
            )}
          </div>
          <div className="description">
            <div className="task-heading">Task Description :</div>
            {editEnable ? (
              <textarea
                className="subtask-edit-input-description"
                name="description"
                onChange={handleChange}
                value={subtaskDetail.description}
              />
            ) : (
              <div className="task-content-cont falseDiscription">
                {subtaskDetail.description}
              </div>
            )}
          </div>
          <div className="main-task-headings-cont">
            <div className="task-heading"> Assigned To :</div>
            {editEnable ? (
              <input
                className="subtask-edit-input"
                name="assigned_To"
                onChange={handleChange}
                value={subtaskDetail.assigned_To}
              />
            ) : (
              <div className="task-content-cont">{subtaskDetail.assigned_To}</div>
            )}
          </div>
          <div className="main-task-headings-cont">
            <div className="task-heading">Assigned By:</div>
            {editEnable ? (
              <input
                className="subtask-edit-input"
                name="assigned_By"
                onChange={handleChange}
                value={subtaskDetail.assigned_By}
              />
            ) : (
              <div className="task-content-cont">{subtaskDetail.assigned_By}</div>
            )}
          </div>
          <div className="main-task-headings-cont">
            <div className="task-heading">Status :</div>
            {editEnable ? (
              <select
                className="subtask-edit-input"
                name="status"
                onChange={handleChange}
                value={subtaskDetail.status}
              >
                {statusOptions.map((status,idx)=>{
                  return (<option key={idx} value={status.toUpperCase()}>{status.toUpperCase()}</option>)
                })}
              </select>
            ) : (
              <div className="task-content-cont">{subtaskDetail.status}</div>
            )}
          </div>
          <div className="add-new-task-button-cont">
            <div className="">
              {editEnable ? (
                <button className="primary-btn" onClick={() => save()}>
                  Save
                </button>
              ) : (
                <button className="primary-btn" onClick={() => openEditForm()}>
                  Edit
                </button>
              )}
            </div>
            <div className="">
              {editEnable ? (
                <button className="danger-btn" onClick={() => openViewForm()}>
                  Cancel
                </button>
              ) : (
                <button onClick={(e) => closePopUp(e)} className="danger-btn">
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTaskDetails;
