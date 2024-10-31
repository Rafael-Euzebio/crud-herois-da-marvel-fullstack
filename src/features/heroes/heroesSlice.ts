import { createSlice } from "@reduxjs/toolkit";
import { HeroDto } from "../../dto/HeroDto";

interface HeroesState {
  list: HeroDto[]
}

const heroesInitialState: HeroesState = {
  list: []
}

const heroesSlice = createSlice({
  name: "heroes",
  initialState: heroesInitialState,
  reducers: {
    addMany: (state, action: { payload: HeroDto[]}) => {
      state.list.push(...action.payload)
    },
    addOne: (state, action: { payload: HeroDto}) => {
      state.list.push(action.payload)
    },
      const index = state.list.findIndex(hero => {
        return hero.id === action.payload.id
    deleteOne: (state, action: { payload: HeroDto }) => {
      state.list = state.list.filter((hero) => {
        return hero.id !== action.payload.id
      })
    }
  }
})

export const { addMany, addOne, deleteOne } = heroesSlice.actions
export default heroesSlice.reducer
export type { HeroesState }
