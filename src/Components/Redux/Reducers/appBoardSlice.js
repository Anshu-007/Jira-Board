import { createSlice } from "@reduxjs/toolkit";
import { createUUID } from "../../../Utils/Utils";


const appboardSlice = createSlice({
    name : "appBoard",
    initialState: {
        board1 : {
            board_id : "",
            boardStatusBars : {
                todo:[],
                inProgress : [],
                completed : []
            }
        }
    },
    reducers:{
        addTask(state, action){
            console.log(state.task, action);
            
            let boardName = action.payload.boardName;
            let newTask = action.payload.task;

            let taskStatus = newTask.status;
            if(taskStatus === "INPROGRESS"){
                state[boardName].boardStatusBars["inProgress"].push(newTask);
            }else if(taskStatus === "TODO"){
                state[boardName].boardStatusBars["todo"].push(newTask);
            }else if(taskStatus === "COMPLETED"){
                state[boardName].boardStatusBars["completed"].push(newTask);
            }
            
        },
        addBoard(state, action){
            state = {...state, [action.payload] : {
                board_id : createUUID(),
                boardStatusBars : {
                    todo:[],
                    inProgess : [],
                    completed : []
                }
            }};
            console.log(state);
        },
        addStatusBar(state,action){
            console.log(state.task,action);
        }
    }
})

export default appboardSlice.reducer;
export const {addTask , addBoard, addStatusBar} = appboardSlice.actions