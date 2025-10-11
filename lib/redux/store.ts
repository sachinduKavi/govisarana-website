import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

// Import your slices
import siteLockSlice from './sitelock/sitelock-slice'
import attributeSlice from './attributes/attribute-slice'
import publicKeySlice from './keys/public-key'

// Combine all reducers
const rootReducer = combineReducers({
  siteLockSlice: siteLockSlice,
  attributeSlice: attributeSlice,
  publicKeySlice: publicKeySlice,
})

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['attributeSlice', 'publicKeySlice', 'siteLockSlice'], // only these slices will be persisted
}

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Create the persistor
export const persistor = persistStore(store)

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
