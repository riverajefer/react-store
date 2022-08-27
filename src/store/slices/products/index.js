import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const productSlice = createSlice({
    name: 'products',
    initialState: {
        list: []
    },
    reducers: {
        setProductsList: (state, action) => {
            state.list = action.payload;
        }
    }

})

export const { setProductsList } = productSlice.actions;

export default productSlice.reducer;