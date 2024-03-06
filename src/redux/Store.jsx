import { configureStore } from "@reduxjs/toolkit";
import cartSLice from "../redux/Slice/Slice";

export const store = configureStore({
    reducer:{
        cart: cartSLice,

    },
});

