import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   title: '',
//   stage: 0,
//   id: 0,
//   display: true,
//   qa: '',
//   img: '',
//   text: '',
// }

const initialState = {
  cardData: [],
  stage: 0,
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    initData: (state, action): void => {
      state.cardData = action.payload
      state.stage = 0
    },
  },
})

export const { initData } = cardSlice.actions
export default cardSlice.reducer
