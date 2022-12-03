import { configureStore } from '@reduxjs/toolkit'
import modalSlice from "./features/modal/modalSlice.js"

export default configureStore({
  reducer: {
    toggle: modalSlice,
  },
})