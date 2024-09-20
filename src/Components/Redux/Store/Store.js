import { configureStore } from "@reduxjs/toolkit";
import appBoardSlice from "../Reducers/appBoardSlice";
import currentBoardSlice from "../Reducers/currentBoardSlice";

const store = configureStore({
    reducer :{
        appBoard : appBoardSlice,
        allTasks : currentBoardSlice
    }
})

export default store;