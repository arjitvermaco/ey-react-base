import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import CakeSlice from "./CakesSlice";
import UserSlice from "./UserSlice";


export const store = configureStore({
    reducer:{
        counter:CounterSlice,
        cake:CakeSlice,
        user:UserSlice
    }
})