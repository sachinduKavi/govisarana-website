import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";



const initialState: boolean = false;

export const siteLockSlice = createSlice({
    name: "sitelockSlice",
    initialState,
    reducers: {
        toggleState: (state, payload: PayloadAction<boolean>) => {
            return payload.payload;
        }
    },
});


export const { toggleState } = siteLockSlice.actions;
export default siteLockSlice.reducer;