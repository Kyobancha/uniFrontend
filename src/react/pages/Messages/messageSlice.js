import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    threadID: "",
};

export const threadSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        openThread: (state, action) => {
            state.threadID = action.payload;
        },
    },
});

export const { openThread } = threadSlice.actions;

// Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectThreadID = (state) => state.message.threadID;

export default threadSlice.reducer;
