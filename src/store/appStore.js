import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const appStore=configureStore({
  reducer:{
    authSlice:authSlice
  }
})
export default appStore;