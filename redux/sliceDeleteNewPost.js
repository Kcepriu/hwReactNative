const { createSlice } = require('@reduxjs/toolkit');

const deleteNewPostsSlice = createSlice({
  name: 'filter',
  initialState: {
    isDelete: false,
  },
  reducers: {
    changeFilter(state, action) {
      state.request = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
