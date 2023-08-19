import { CreateSliceOptions, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItemToCart : (state, action) => {
            state.items.push(action.payload); 
        },
        clearCart : (state) => {
            state.items = [];
        },
        removeFromCart : (state, action) => {
            state.items.pop();
        } 
    }
})

export default cartSlice.reducer;
export const {addItemToCart, removeFromCart, clearCart} = cartSlice.actions 