import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from './features/heroes/heroesSlice'
import formReducer from './features/form/formSlice'

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
    form: formReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.subscribe
