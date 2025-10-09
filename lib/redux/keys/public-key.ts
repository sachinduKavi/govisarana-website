import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: string | null = null

const publicKeySlice = createSlice({
  name: 'publicKeySlice',
  initialState,
  reducers: {
    setPublicKey: (state, action: PayloadAction) => {
      return action.payload
    },

    clearPublicKey: (state) => {
      return null
    },
  },
})

export const { setPublicKey, clearPublicKey } = publicKeySlice.actions
export default publicKeySlice.reducer
