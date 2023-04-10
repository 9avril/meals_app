import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as favoriteReducer} from './favorites/favorite.slice';
import {userSlice} from "./user/user.slice.js";
import {recipeApi} from "./api/recipe.api.js";
import {api} from "./api/api.js";
import {createLogger} from "redux-logger";

const logger = createLogger({
    collapsed: true,
})

const reducers = combineReducers({
    favorites: favoriteReducer,
    users: userSlice.reducer,
    [api.reducerPath]: api.reducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware).concat(logger)
});

