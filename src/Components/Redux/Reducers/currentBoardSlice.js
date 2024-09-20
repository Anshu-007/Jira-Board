import { createSlice } from "@reduxjs/toolkit";
const currentTask = [];

const currentBoardSlice = createSlice({
    name: "allTasks",
    initialState: currentTask,
    reducers :{}
})
export default currentBoardSlice.reducer 
export const {} = currentBoardSlice.actions

