import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    username: "",
    fullname: "",
    email: "",
    birthdate: "",
    phone_number: "",
    address: "",
    gender: "",
    profile_picture: "",
    refferal_code: "",
    balance: "",
    point: "",
    role: "",
};

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.fullname = action.payload.fullname;
            state.email = action.payload.email;
            state.birthdate = action.payload.birthdate;
            state.phone_number = action.payload.phone_number;
            state.address = action.payload.address;
            state.gender = action.payload.gender;
            state.profile_picture = action.payload.profile_picture;
            state.refferal_code = action.payload.refferal_code;
            state.balance = action.payload.balance;
            state.point = action.payload.point;
            state.role = action.payload.role;
        },
        logout: () => {
            return initialState;
        },
    },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
