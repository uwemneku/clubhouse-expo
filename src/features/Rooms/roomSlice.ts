import {createSlice, PayloadAction} from '@reduxjs/toolkit'
interface RoomSliceState {
    activeRoomId: string | null;
}

const initialState: RoomSliceState = {
    activeRoomId: null
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        joinRoom: (state, action: PayloadAction<string | null>) => {
            state.activeRoomId = action.payload
        },
        leaveRoom: (state) => {
            state.activeRoomId = null
        }
    },
})

export const {joinRoom, leaveRoom} = roomSlice.actions
export default roomSlice.reducer