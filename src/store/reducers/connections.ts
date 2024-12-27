import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile } from '../../share/interface/interface'

type initialType = {
  itens: number[]
}

const initialState: initialType = {
  itens: []
}

const connectionsSlice = createSlice({
  name: 'connections',
  initialState,
  reducers: {
    guardarConnections: (state, action: PayloadAction<number[]>) => {
      console.log(action.payload)

      state.itens = action.payload
    }
  }
})

export const { guardarConnections } = connectionsSlice.actions
export default connectionsSlice.reducer
