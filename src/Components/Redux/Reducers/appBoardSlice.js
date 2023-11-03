import { createSlice } from "@reduxjs/toolkit";
import { createUUID } from "../../../Utils/Utils";

let localData = localStorage.getItem("boards");
const boardData = localData ? JSON.parse(localData) : [];

const appboardSlice = createSlice({
  name: "appBoard",
  initialState: boardData,
  reducers: {
    addTask(state, action) {
      let boardId = action.payload.boardId;
      let task = action.payload.task;
      let status = action.payload.task.status.toLowerCase();

      let newState = state;

      let myBoardIndex = 0;
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].board_id === boardId) {
          myBoardIndex = i;
          break;
        }
      }

      let statusBar = newState[myBoardIndex].boardStatusBars;
      let statusIndex = 0;
      for (let i = 0; i < statusBar.length; i++) {
        if (statusBar[i].name === status) {
          statusIndex = i;
          break;
        }
      }
      state[myBoardIndex].boardStatusBars[statusIndex].value.push(task);

      let data = JSON.stringify(state);
      localStorage.setItem("boards", data);
    },
    addBoard(state, action) {
      state.push({
        board_id: createUUID(),
        boardStatusBars: [
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
        ],
        boardName: action.payload,
      });

      let data = JSON.stringify(state);
      localStorage.setItem("boards", data);
    },
    addStatusBar: (state, action) => {
      let boardId = action.payload.boardId;
      let statusBarName = action.payload.statusBarName.toLowerCase();

      let newState = state;

      let myBoard = "My Board";
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].board_id === boardId) {
          myBoard = i;
          break;
        }
      }

      state[myBoard].boardStatusBars.push({ name: statusBarName, value: [] });

      let data = JSON.stringify(state);
      localStorage.setItem("boards", data);
    },
    editSubtask(state, action) {
      let obj = action.payload;
    },
    dragAndDrop(state, action) {
      let newState = state;
      // console.log(newState);
      console.log(action.payload);
      let { boardId, fromStatus, taskId, toStatus } = action.payload;
      //    console.log(taskId);
      //    console.log(boardId);
      if(fromStatus === toStatus){
        return;
      }
      let boardName;
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].board_id == boardId) {
          boardName = newState[i];
          break;
        }
      }

      // =======================================================
      let boardStatusBar = boardName.boardStatusBars;
      let dragArr;
      let dropArr;
      for (let i = 0; i < boardStatusBar.length; i++) {
        if (boardStatusBar[i].name === fromStatus) {
          dragArr = boardStatusBar[i].value;
        }
        if (boardStatusBar[i].name === toStatus) {
          dropArr = boardStatusBar[i].value;
        }
      }

      //===================================================
      let idx;
      for (let i = 0; i < dragArr.length; i++) {
        if (dragArr[i].id === taskId) {
          idx = i;
        }
      }
      
      //    console.log(task);
      if(Array.isArray(dropArr) ){
        let task = dragArr.splice(idx,1);
        dropArr.push(task[0]);
      }

      // =======================
      for (let i = 0; i < boardStatusBar; i++) {
        if (boardStatusBar[i].name === fromStatus) {
          boardStatusBar[i].value = dragArr;
        }
        if (boardStatusBar[i].name === toStatus) {
          boardStatusBar[i].value = dropArr;
        }
      }

      console.log(newState);
      let data = JSON.stringify(newState);
      localStorage.setItem("boards", data);
    },
    deleteTask(state,action){
      console.log(action.payload);
      let { boardId,task,statusName } = action.payload;
      let newState = state;
      let boardName;
      for(let i = 0 ; i < newState.length;i++){
        if(newState[i].board_id === boardId ){
          boardName = newState[i];
          break;
        }
      }
        let boardStatusBar = boardName.boardStatusBars;
        for(let i = 0 ; i < boardStatusBar.length;i++){
          if(boardStatusBar[i].name === statusName){
            let taskArr = boardStatusBar[i].value;
            for(let j = 0 ; j < taskArr.length;j++){
              if(taskArr[j].id === task.id){
                taskArr.splice(j,1);
                // console.log(taskArr);
                break;
              }
            }
            break;
          }
        }
        let data = JSON.stringify(newState);
      localStorage.setItem("boards", data);

    }
  },
});

export default appboardSlice.reducer;
export const {
  addTask,
  addBoard,
  addStatusBar,
  editSubtask,
  changeCounter,
  dragAndDrop,
  deleteTask,
} = appboardSlice.actions;
