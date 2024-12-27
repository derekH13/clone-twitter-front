import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile } from '../../share/interface/interface'

type initialType = {
  itens: Profile | null
}

const initialState: initialType = {
  itens: null
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    guardarProfile: (state, action: PayloadAction<Profile>) => {
      console.log(action.payload)

      state.itens = action.payload
    }
  }
})

export const { guardarProfile } = profileSlice.actions
export default profileSlice.reducer
