import { createSlice } from '@reduxjs/toolkit';

export const UserAuth = createSlice({
  name: 'Client',
  initialState: { 
    user_id : null,
    token : null,
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
    addCompletedChapter :(state,action)=>{
      state.completed_chapters = action.payload
      console.log(state.completed_chapters,'inside redux')
    }
    
  },
});

export const {setUser ,logout,addCompletedChapter} = UserAuth.actions;
export default UserAuth.reducer;