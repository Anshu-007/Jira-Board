import React, { useState } from "react";
import "./modals.css";
import { useDispatch } from "react-redux";
import { addBoard } from "../Redux/Reducers/appBoardSlice";
import { addStatusBar } from "../Redux/Reducers/appBoardSlice";
import { getPath } from "../../Utils/Utils";
import { createUUID } from "../../Utils/Utils";
import { Input, Button,Form } from "antd";

const Modal = (props) => {
  const [titleName, setTitleName] = useState("");
  const dispatch = useDispatch();

  const createBoard = async (e, title) => {
    // e.preventDefault();
    // console.log("hello")
    let board_id = createUUID();
    let boardStatusBars = [
      {
        name: "TODO",
        value: [],
      },
      {
        name: "INPROGRESS",
        value: [],
      },
      {
        name: "COMPLETED",
        value: [],
      },
    ];

    // if(title == "Board"){
    //     dispatch(addBoard(titleName));
    // }
    // else{
    //     let path = getPath();
    //     dispatch(addStatusBar({statusBarName :titleName,boardId:path}));
    // }
    // setTitleName("");
    // props.closeModal(false);

    try {
      let statusBar = boardStatusBars.reduce((actual, item) => {
        actual += item.name + ",";
        return actual;
      }, "");

      const response = await fetch("http://localhost:8080/board/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: board_id,
          name: titleName,
          statusBar: statusBar,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Board saved:", data);
      } else {
        console.error("Error saving board:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setTitleName("");
    props.closeModal(false);
  };

  
  return (
    <div className="add-board-modal-background">
      <div className="add-board-modal">
        <Form
          onFinish={(e) => {
            createBoard(e,props.title);
          }}
          className="modal-form"
        >
          <label>
            <h1>Enter {props.title} Name</h1>
          </label>
          <Input
            onChange={(e) => setTitleName(e.target.value)}
            value={titleName}
            className="modal-input"
            placeholder={`Enter ${props.title}`}
            type="text"
            required
          />
          <div className="modal-button-wrapper">
            <Button htmlType="submit" className="primary-btn">
              Create {props.title}
            </Button>
            <Button
              type="button"
              onClick={() => {
                props.closeModal(false);
              }}
              className="danger-btn"
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Modal;
