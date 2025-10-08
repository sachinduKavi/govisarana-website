import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: string = ''

const attributeSlice = createSlice({
  name: 'attributeSlice',
  initialState,
  reducers: {
    setAttribute: (state, payload: PayloadAction<Object>) => {
      return JSON.stringify(payload.payload)
    },

    removeAttributes: (state) => {
      return ''
    },
  },
})

export const { setAttribute, removeAttributes } = attributeSlice.actions
export default attributeSlice.reducer
