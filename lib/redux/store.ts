import { configureStore } from '@reduxjs/toolkit';
    
import siteLockSlice from './sitelock/sitelock-slice';


export const store = configureStore({
        reducer: {
            siteLockSlice: siteLockSlice,
        }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
