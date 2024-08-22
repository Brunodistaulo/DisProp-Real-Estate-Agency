import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    userAppointment:[],
}


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {...state, ...action.payload};
    },
    addAppointment: (state, action) => {
      return {...state, userAppointment:action.payload};
    }
  },
});

export const { addUser, addAppointment } = userSlice.actions;
