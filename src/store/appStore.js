import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import listSlice from "./listSlice";
const appStore=configureStore({
  reducer:{
    authSlice:authSlice,
    listSlice:listSlice
  }
})
export default appStore;