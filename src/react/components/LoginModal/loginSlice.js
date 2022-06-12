import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authenticate from "../../services/AuthenticationService";

const initialState = {
    status: "loggedOut", //Possible status are: loggedOut, loggedIn, failed
    token: undefined,
};

export const loginAsync = createAsyncThunk("login/login", async (userData) => {
    const { name, password } = userData;
    return await authenticate(name, password);
});

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        logout: (state) => {
            state.status = "loggedOut";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state, action) => {
                //could add a loading screen in the future
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = "loggedIn"; //needed to spawn the red login text
                state.token = action.payload; //puts the token into the state
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = "failed"; //needed to spawn the red login text
            });
    },
});

export const { logout } = loginSlice.actions;
// Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStatus = (state) => state.login.status;
export const selectToken = (state) => state.login.token;

export default loginSlice.reducer;
