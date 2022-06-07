import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Dan Abramov' },
    { id: '1', name: 'Jordan Walke' },
    { id: '2', name: 'Brendan Eich' }
];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;