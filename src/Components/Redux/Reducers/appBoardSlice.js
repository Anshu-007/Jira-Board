import { createSlice } from "@reduxjs/toolkit";


const appboardSlice = createSlice({
    name : "appBoard",
    initialState: {
        task:"new Task",
        board : "new board"
    },
    reducers:{
        addTask(state, action){
            console.log(state.task, action);
        }
    }
})

export default appboardSlice.reducer;
export const {addTask} = appboardSlice.actions