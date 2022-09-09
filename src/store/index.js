import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../store/slice/slice'

export const store = configureStore({
    reducer:{
        user: userSlice
    }
})