import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    showToast: false,
    message: '',
    showModal: false,
    component: null,
    config: {}
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showToast(state, action) {
            state.showToast = true
            state.message = action.payload
        },
        dismisToast(state, action) {
            state.showToast = false
            state.message = ''
        },
        showModal(state, action) {
            state.showModal = true
            state.component = action.payload.component
            state.config = action.payload.config
        },
        dismisModal(state, action) {
            state.showModal = false
        },
        clearModal(state, action) {
            state.component = null
            state.config = {}
        },
    }

})
export const { showToast, dismisToast, showModal, dismisModal, clearModal } = modalSlice.actions

export default modalSlice.reducer