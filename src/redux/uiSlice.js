import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name: "ui-slice",
    initialState: { errorOccured: false, modalMessage: "Loading..." },
    reducers: {
        setErrorOccured(state) {
            state.errorOccured = true
        },
        setModalMessage(state, actions) {
            state.modalMessage = actions.payload
        },
    },
})
export const uiActions = uiSlice.actions
export default uiSlice
