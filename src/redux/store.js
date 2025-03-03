import { configureStore } from "@reduxjs/toolkit";
import { photoReducer } from "./reducer";

const store = configureStore({
    reducer: {
        photos: photoReducer
    }
});

export default store;