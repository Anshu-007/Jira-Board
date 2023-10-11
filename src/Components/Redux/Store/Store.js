import { configureStore } from "@reduxjs/toolkit";
import appBoardSlice from "../Reducers/appBoardSlice";

const store = configureStore({
    reducer :{
        appBoard : appBoardSlice,
    }
})

export default store;