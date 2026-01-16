import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
}
export const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart: (state, action) => {
            console.log("State Inside Reducer Product : ", action.payload);
            
            state.items = [...state.items, action.payload]
        },

        removeFromCart: (state, action) => {
            //find index for removal

        },
        
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;