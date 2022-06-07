import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/post/postSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
});