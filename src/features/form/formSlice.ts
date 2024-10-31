import { createSlice } from "@reduxjs/toolkit";
import { HeroDto } from "../../dto/HeroDto";

interface FormState {
  editMode: true | false
  editValues: {
    id?: string
    name: string
    abilities: string[]
    origins: string
  }
}

const formInitialState: FormState = {
  editMode: false,
  editValues: {
    name: '',
    abilities: [],
    origins: ''
  }
}

const formSlice = createSlice({
  name: "form",
  initialState: formInitialState,
  reducers: {
    toggleEdit: (state) => {
      state.editMode = !state.editMode
    },
    edit: (state, action: { payload: HeroDto }) => {
      state.editMode = true
      state.editValues = action.payload
    }
  }
})

export const { edit, toggleEdit } = formSlice.actions
export default formSlice.reducer
export type { FormState }
