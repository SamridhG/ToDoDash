import { createSlice } from "@reduxjs/toolkit";
const listSlice=createSlice({
    name:'todolist',
    initialState:{
        list:[]
    },
    reducers:{
        updatelist:(state,action)=>{
           state.list= action.payload
        }
    }
})
export const {updatelist}=listSlice.actions
export default listSlice.reducer;