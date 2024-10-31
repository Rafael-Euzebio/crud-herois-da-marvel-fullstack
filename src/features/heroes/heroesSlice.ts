import { createSlice } from "@reduxjs/toolkit";
import { HeroResponseDto } from "../../dto/HeroDto";

interface HeroesState {
  list: HeroResponseDto[]
}

const heroesInitialState: HeroesState = {
  list: []
}

const heroesSlice = createSlice({
  name: "heroes",
  initialState: heroesInitialState,
  reducers: {
    addMany: (state, action: { payload: HeroResponseDto[]}) => {
      state.list.push(...action.payload)
    },
    addOne: (state, action: { payload: HeroResponseDto}) => {
      state.list.push(action.payload)
    },
    deleteOne: (state, action: { payload: HeroResponseDto }) => {
      const index = state.list.findIndex(hero => {
        return hero.id === action.payload.id
      })
      state.list.splice(index)
    }
  }
})

export const { addMany, addOne, deleteOne } = heroesSlice.actions
export default heroesSlice.reducer
export type { HeroesState }
