import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

const modalSlice = createSlice({
  name: "toggleModal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.value = !state.value
    },
  }
});

export const {toggleModal} = modalSlice.actions

export default modalSlice.reducer