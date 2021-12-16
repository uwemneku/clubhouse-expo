import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface UISliceState {
    isRoomUiOpen: boolean;
}

const initialState: UISliceState = {isRoomUiOpen:false};

export const  uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleRoomUiDisplayState: (state) => {
            state.isRoomUiOpen = !state.isRoomUiOpen;
        },
    }
})

export const {toggleRoomUiDisplayState} = uiSlice.actions
export default uiSlice.reducer