import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import cartReducer from "./reducer/cartReducer"


export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  
});

setupListeners(store.dispatch)