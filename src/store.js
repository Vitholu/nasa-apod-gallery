import { configureStore } from '@reduxjs/toolkit'
import modalSlice from "./features/modal/modalSlice"

export default configureStore({
  reducer: {
    toggle: modalSlice,
  },
})