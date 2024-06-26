import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:'authantication',
    initialState:{
        currentUserName:null,
        currentUserEnail:null,
        userUID:null,
        isLoggedIn:false,
        isFireBaseInitilize:false
    },
    reducers:{
        initAuthData:(state,action)=>{
            return {...state,...action.payload}
        }
    }
})
export const {initAuthData}=authSlice.actions
export default authSlice.reducer;