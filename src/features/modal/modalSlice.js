import { createSlice } from '@reduxjs/toolkit'

const TOGGLE_MODAL = "TOGGLE_MODAL"


const initialState = {
  value: false,
}

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    modalLogin: (state) => {
      state.value = !initialState
    }
  },

    

});

export const { modalLogin } = modalSlice.actions

export default modalSlice.reducer