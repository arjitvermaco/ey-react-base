import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    vanillaCake :10,
    pineappleCake:8,
    chocoCake:5
}

const cakeSlice = createSlice({
    name:"cakes",
    initialState,
    reducers:{
        buyVanillaCake(state){
            state.vanillaCake--
        },
        buyChocoCake(state){
            state.chocoCake--
        },
        buyPineappleCake(state){
            state.pineappleCake--
        },
        addVanillaCake(state,data){
            console.log(data)
            state.vanillaCake = state.vanillaCake + data.payload
        },
        addChocoCake(state,data){
            state.chocoCake = state.chocoCake + data.payload
        },
        addPineappleCake(state,data){
            state.pineappleCake = state.pineappleCake + data.payload
        }
    }
})

export const {buyChocoCake,buyPineappleCake,buyVanillaCake,addVanillaCake,addChocoCake,addPineappleCake} = cakeSlice.actions;
export default cakeSlice.reducer