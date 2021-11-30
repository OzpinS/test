import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

// Define a type for the slice state
interface UserState {
  username: string
}

// Define the initial state using that type
const initialState: UserState = {
  username: '',
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    change: (state, action) => {
      state.username = action.payload.username
    },
  },
})

export const { change } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUsername = (state: RootState) => state.user.username

export default userSlice.reducer