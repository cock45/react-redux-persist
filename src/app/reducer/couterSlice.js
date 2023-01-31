import { useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const { actions, ...slice } = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        login: (state, { payload }) => payload,
        logout: () => ({}),
    },
});

const persistConfig = {
    key: "auction-auth",
    version: 1,
    storage,
};

export const reducer = persistReducer(persistConfig, slice.reducer);

export function useLogin() {
    const dispatch = useDispatch();
    return (payload) => dispatch(actions.login(payload));
}

export function useLogout() {
    const dispatch = useDispatch();
    return () => dispatch(actions.logout());
}
