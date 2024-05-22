import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '@/services/apiClient';
import handleRequestError from '@/utils/authHandleError';
import { logout } from './authSlice';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async ({ page, limit }, { rejectWithValue, dispatch }) => {
    try {
        const res = await apiClient.get('/books', {
            params: { page, limit }
        });
        return res.data;
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error);
    }
});

const initialState = {
    books: [],
    page: 1,
    limit: 10,
    totalPages: 0,
    loading: false,
    error: null
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload.books;
                state.totalPages = action.payload.totalPages;
                state.page = action.payload.page;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    }
});

export default bookSlice.reducer;
