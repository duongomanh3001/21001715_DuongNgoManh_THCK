// slices/bicycleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBicycles = createAsyncThunk(
  'bicycles/fetchBicycles',
  async (category) => {
    const apiUrl = `https://6710657ba85f4164ef2dd6db.mockapi.io/bicycle${category ? `?category=${category}` : ''}`;
    const response = await axios.get(apiUrl);
    return response.data;
  }
);

const bicycleSlice = createSlice({
  name: 'bicycles',
  initialState: {
    items: [],
    loading: false,
    selectedCategory: '',
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBicycles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBicycles.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBicycles.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSelectedCategory } = bicycleSlice.actions;
export default bicycleSlice.reducer;
