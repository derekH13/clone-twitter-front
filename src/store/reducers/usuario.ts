import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProps } from '../../share/interface/interface'

type initialType = {
  itens: UserProps | null
}

const initialState: initialType = {
  itens: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    guardarUser: (state, action: PayloadAction<UserProps>) => {
      console.log(action.payload)

      state.itens = action.payload
    },
    removerUser: (state) => {
      state.itens = null
    }
  }
})

export const { guardarUser } = userSlice.actions
export default userSlice.reducer
