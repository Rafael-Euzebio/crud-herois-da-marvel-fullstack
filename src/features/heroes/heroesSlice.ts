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
    }
  }
})

export const { addMany, addOne } = heroesSlice.actions
export default heroesSlice.reducer
export type { HeroesState }
