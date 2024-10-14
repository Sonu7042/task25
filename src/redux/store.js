import {configureStore} from '@reduxjs/toolkit'
import  useReducers from './Reducers'

export const store=configureStore({
    reducer: useReducers
})