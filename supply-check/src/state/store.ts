import { configureStore } from "@reduxjs/toolkit";
import equipmentReducer from "./equpListReducer/equip-reducer";

const store = configureStore({ reducer: equipmentReducer });

export default store;
