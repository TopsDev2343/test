import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import handleRequestError from '@/utils/authHandleError';
import apiClient from '@/services/apiClient';
import { logout } from './authSlice';
import getStorage from 'redux-persist/es/storage/getStorage';

// Async thunk for getting the report
export const getReport = createAsyncThunk('report/getReport', async ({ start, end }, { rejectWithValue, dispatch }) => {
    try {
        const token = await getStorage('token');
        const res = await apiClient.post(`/${token}/report`, {}, { params: { start, end } });
        return res.data;
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error);
    }
});

// Initial state
const initialState = {
    locations: []
};

// Slice
const slice = createSlice({
    name: 'report',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getReport.fulfilled, (state, action) => {
            state.locations = action.payload.points;
        });
    }
});

export default slice.reducer;
