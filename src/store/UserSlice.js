import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList:[],
    loading:false,
    error:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUserData.pending,(state)=>{
                state.loading = true;
        }).addCase(fetchUserData.fulfilled,(state,data)=>{
            state.loading = false;
            state.userList = data.payload
        }).addCase(fetchUserData.rejected,(state,data)=>{
            state.loading = false;
            state.error = data.error
        })
    }
})


export const fetchUserData = createAsyncThunk('users/getAll', async()=>{
    const res = await fetch(`https://661f4c9616358961cd93f83d.mockapi.io/api/v1/users/`)
    const data = await res.json()
    return data
})

export default userSlice.reducer