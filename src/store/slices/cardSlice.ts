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
  selectData: [],
  stage: 0,
  id: '',
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    initData: (state, action): void => {
      state.cardData = action.payload
      state.stage = 0
    },
    selectCard: (state, action): void => {
      state.selectData.push(action.payload)
    },
    popCard: (state): void => {
      state.selectData.pop()
    },
    changeStage: (state, action): void => {
      if (0 <= state.stage && state.stage < 3) {
        state.cardData[state.stage].map((item) => (item.display = false))
        action.payload === 'up' ? state.stage++ : state.stage--
        state.cardData[state.stage].map((item) => (item.display = true))
      }
    },
  },
})

export const { initData, selectCard, popCard, changeStage } = cardSlice.actions
export default cardSlice.reducer
