import { createSlice } from "@reduxjs/toolkit";
import { createUUID } from "../../../Utils/Utils";


const appboardSlice = createSlice({
    name : "appBoard",
    initialState: {
        board1 : {
            board_id : "",
            boardStatusBars : {
                todo:[],
                inProgess : [],
                completed : []
            }
        }
    },
    reducers:{
        addTask(state, action){
            console.log(state.task, action);
            // payload should contains board ID, status bar, task details
            let boardName = action.payload.boardName;
            let newTask = action.payload.task;

            console.log(boardName, newTask)
            
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