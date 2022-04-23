import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice"
import { headerReducer } from './features/header/headerSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer
  },
})