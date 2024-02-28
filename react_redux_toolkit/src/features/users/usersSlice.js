import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Lê Đinh Duy Thức' },
    { id: '1', name: 'Nguyễn Văn A' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer