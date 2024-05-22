import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '@/services/apiClient';
import { clearStorage, getStorage, setStorage } from '@/services/localStorage';
import handleRequestError from '@/utils/authHandleError';
import { delay } from '@/utils';

// Async thunks
export const checkIsSignin = createAsyncThunk('auth/checkSignin', async () => {
    const token = await getStorage('token');
    return token ? { isSignin: true } : { isSignin: false };
});

export const checkPhone = createAsyncThunk('auth/checkPhone', async ({ phoneNumber }, { rejectWithValue, dispatch }) => {
    try {
        const res = await apiClient.post('/checkuser', {}, { params: { phone: phoneNumber } });
        return;
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error?.response);
    }
});

export const sendotp = createAsyncThunk('auth/sendotp', async ({ phoneNumber }, { rejectWithValue, dispatch }) => {
    try {
        const res = await apiClient.post('/sendotp', {}, { params: { phone: phoneNumber } });
        return { phoneNumber };
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error?.response);
    }
});

export const signin = createAsyncThunk('auth/signin', async ({ phoneNumber, password }, { rejectWithValue, dispatch }) => {
    try {
        const res = await apiClient.post('/login', {}, { params: { phone: phoneNumber, password } });
        await setStorage('token', res.data.token);
        return { token: res.data.token };
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error);
    }
});

export const resetPass = createAsyncThunk('auth/resetPass', async ({ phoneNumber, password, code }, { rejectWithValue, dispatch }) => {
    try {
        const res = await apiClient.post('/resetpassword', {}, { params: { phone: phoneNumber, password, code } });
        await setStorage('token', res.data.token);
        return { token: res.data.token };
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error);
    }
});

export const verify = createAsyncThunk('auth/verify', async ({ phoneNumber, password }, { rejectWithValue, dispatch }) => {
    try {
        const res = await apiClient.post('/verify', {}, { params: { phone: phoneNumber, code: password } });
        return { ...res.data };
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error);
    }
});

export const createProfile = createAsyncThunk('auth/createProfile', async (data, { rejectWithValue, dispatch }) => {
    try {
        const res = await apiClient.post('/storeuser', {}, { params: { ...data } });
        await setStorage('token', res.data.token);
        return { user: res.data };
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error);
    }
});

export const updateProfile = createAsyncThunk('auth/updateProfile', async (data, { rejectWithValue, dispatch, getState }) => {
    try {
        const res = await apiClient.patch('/user/auth/profile', data);
        const user = { ...getState().auth.user, ...res.data };
        return user;
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error);
    }
});

export const getProfile = createAsyncThunk('auth/getProfile', async (_, { rejectWithValue, dispatch }) => {
    try {
        const token = await getStorage('token');
        await delay(1500);
        if (token) {
            return { isSignin: true, user: {} };
        } else {
            return { isSignin: false, user: null };
        }
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error);
    }
});

export const getUpdatedProfile = createAsyncThunk('auth/getUpdatedProfile', async (_, { rejectWithValue, dispatch }) => {
    try {
        const res = await apiClient.get('/student/profile');
        return res.data;
    } catch (error) {
        handleRequestError(error, dispatch, logout);
        return rejectWithValue(error);
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    await clearStorage();
});

// Initial state
const initialState = {
    startup: true,
    authenticating: false,
    authenticated: false,
    phoneNumber: null,
    token: null,
    code: null,
    user: {}
};

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(checkPhone.rejected, (state, action) => {
                if (action?.meta?.arg?.phoneNumber) {
                    state.phoneNumber = action?.meta?.arg?.phoneNumber;
                }
            })
            .addCase(checkIsSignin.fulfilled, (state, action) => {
                state.startup = false;
                state.authenticating = !action.payload.isSignin;
                state.authenticated = action.payload.isSignin;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.startup = false;
                state.authenticating = !action.payload.isSignin;
                state.authenticated = action.payload.isSignin;
                state.user = action.payload.user;
            })
            .addCase(getUpdatedProfile.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(sendotp.fulfilled, (state, action) => {
                state.phoneNumber = action.payload.phoneNumber;
            })
            .addCase(verify.fulfilled, (state, action) => {
                state.code = action.payload.code;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.startup = true;
                state.authenticating = false;
                state.authenticated = false;
                state.token = action.payload.token;
            })
            .addCase(resetPass.fulfilled, (state, action) => {
                state.startup = true;
                state.authenticating = false;
                state.authenticated = false;
                state.token = action.payload.token;
            })
            .addCase(createProfile.fulfilled, (state, action) => {
                state.startup = true;
                state.authenticating = false;
                state.authenticated = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.startup = true;
                state.authenticating = false;
                state.authenticated = false;
            });
    }
});

export default authSlice.reducer;
