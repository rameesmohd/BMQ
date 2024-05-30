import { createSlice } from '@reduxjs/toolkit';

export const UserAuth = createSlice({
  name: 'Client',
  initialState: { 
    user_id : null,
    completed_chapters : []
  },
  reducers: {
    setUser: (state, action) => {
      state.user_id = action.payload.user_id
      state.token = action.payload.token
    },
    logout: (state,action)=>{
      state.user_id = null
      state.token = null
    },
  },
});

export const {setUser ,logout} = UserAuth.actions;
export default UserAuth.reducer;