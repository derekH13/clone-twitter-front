import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/usuario'
import profileReducer from './reducers/profile'
import connectionReducer from './reducers/connections'

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    connection: connectionReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
