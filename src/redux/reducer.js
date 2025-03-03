import { createReducer } from "@reduxjs/toolkit";

export const photoReducer = createReducer({ loading: true }, {

    randomPhotoRequest: (state) => {
        state.loading = true;
    },

    randomPhotoSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
    },

    randomPhotoFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    searchRequest: (state) => {
        state.loading = true;
    },

    searchSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload.data.results;
    },

    searchFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    searchByIdRequest: (state) => {
        state.loading = true;
    },

    searchByIdSuccess: (state, action) => {
        state.loading = false;
        state.photodata = action.payload.data;
    },

    searchByIdFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearError: (state) => {
        state.error = null;
    },
});