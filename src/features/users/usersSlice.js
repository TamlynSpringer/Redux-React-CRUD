import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'Priscilla Barbosa Rebouças' },
  { id: '1', name: 'Tamlyn Springer' },
  { id: '2', name: 'Andreas Cross' },
  { id: '3', name: 'Andrés Pardo Rodriguez' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;