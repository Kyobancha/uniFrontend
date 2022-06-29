import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authenticate from "../../services/AuthenticationService";
import jwt_decode from 'jwt-decode';

const initialState = {
    token: "",
    user: {},
    status: "loggedOut", //Possible status are: loggedOut, loggedIn, pending, failed
};

export const loginAsync = createAsyncThunk("user/login", async (userData) => {
    const { name, password } = userData;
    return await authenticate(name, password);
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.token = "";
            state.user = {};
            state.status = "loggedOut";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.token = action.payload; //puts the token into the state
                state.user = jwt_decode(action.payload);
                state.status = "loggedIn"; //needed to spawn the red login text
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = "failed"; //needed to spawn the red login text
            });
    },
});

export const { logout } = userSlice.actions;
// Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectToken = (state) => state.user.token;
export const selectStatus = (state) => state.user.status;
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;