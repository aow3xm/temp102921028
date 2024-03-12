import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};
export interface RootState {
  user: {
    isLoggedIn: boolean;
  };
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
