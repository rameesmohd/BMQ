import { createSlice } from '@reduxjs/toolkit';

export const AdminAuth = createSlice({
  name: 'Admin',
  initialState: { 
    token : null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    logout: (state,action)=>{
      state.user_id = null
      state.token = null
    },  
  },
});

export const {setToken ,logout} = AdminAuth.actions;
export default AdminAuth.reducer;