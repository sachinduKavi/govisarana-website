import { configureStore } from '@reduxjs/toolkit'

import siteLockSlice from './sitelock/sitelock-slice'
import attributeSlice from './attributes/attribute-slice'

export const store = configureStore({
  reducer: {
    siteLockSlice: siteLockSlice,
    attributeSlice: attributeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
