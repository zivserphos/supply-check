import { combineReducers } from "@reduxjs/toolkit";
import equipmentReducer from "./equpListReducer/equip-reducer";
import workerReducer from "./userReducer/user-reducer";
// import shopReducer from "./shopping/shopping-reducer";

const rootReducer = combineReducers({ equipmentReducer, workerReducer });

export default rootReducer;
