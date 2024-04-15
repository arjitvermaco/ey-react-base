import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import CakeSlice from "./CakesSlice";


export const store = configureStore({
    reducer:{
        counter:CounterSlice,
        cake:CakeSlice
    }
})