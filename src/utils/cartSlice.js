import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    //state = initial state of item i.e []
    //action = it will get access to action
    // mutating state in reducers
    reducers: { 
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});
export const { addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
