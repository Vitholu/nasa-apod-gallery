import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  isLogged: false,
  userEmail: "",
  logOrReg: "",
}



const modalSlice = createSlice({
  name: "toggleModal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.value = !state.value
    },
    toggleLogin: (state) => {
      state.isLogged = !state.isLogged
    },
    addEmail: (state, action) => {
      state.userEmail = action.payload
    },
    loginOrRegister: (state, action) => {
      state.logOrReg = action.payload
    }
  }
});

export const {toggleModal, toggleLogin, addEmail, loginOrRegister} = modalSlice.actions

export default modalSlice.reducer