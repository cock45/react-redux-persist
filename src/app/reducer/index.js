import { combineReducers } from "@reduxjs/toolkit";

import { reducer as counter } from "./couterSlice";

export const rootReducer = combineReducers({
    counter,
});
