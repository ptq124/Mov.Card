import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  stage: 0,
  id: 0,
  display: true,
  qa: '',
  img: '',
  text: '',
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
})

export const {} = cardSlice.actions
export default cardSlice.reducer
