/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  isLoading: false,
};
export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
  },
  reducers: {
    getUsersFetch: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUsersFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { getUsersFetch, getUsersSuccess, getUsersFailure } =
  userSlice.actions;

export default userSlice.reducer;
