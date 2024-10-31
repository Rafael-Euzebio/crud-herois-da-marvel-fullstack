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
    id: '',
    name: '',
    abilities: [],
    origins: ''
  }
}

const formSlice = createSlice({
  name: "form",
  initialState: formInitialState,
  reducers: {
    edit: (state, action: { payload: HeroDto }) => {
      state.editMode = true
      state.editValues = action.payload
    },
    cancelEdit: (state) => {
      state.editMode = false
      state.editValues = formInitialState.editValues
    }
  }
})

export const { edit, cancelEdit} = formSlice.actions
export default formSlice.reducer
export type { FormState }
