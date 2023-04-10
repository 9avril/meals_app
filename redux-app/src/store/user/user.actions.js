import {createAsyncThunk} from "@reduxjs/toolkit";

const fetchUserById = (userId) => {
    return new Promise((resolve) => setTimeout(() => resolve({id: 1, name: 'artsiom'}), 1000))
}

export const getUserById = createAsyncThunk('users/by-id', async (userId, thunkAPI) => {
    try {
        return await fetchUserById(userId)
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})