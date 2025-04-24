// src/features/crypto/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { cryptoData } from '../../data/initialData';

const initialState = {
  assets: cryptoData,
  loading: false,
  error: null
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      const { id, price, change1h, change24h, change7d, volume24h } = action.payload;
      const asset = state.assets.find(a => a.id === id);
      if (asset) {
        asset.price = price;
        asset.change1h = change1h;
        asset.change24h = change24h;
        asset.change7d = change7d;
        asset.volume24h = volume24h;
      }
    },
    updateAllPrices: (state, action) => {
      state.assets = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { updatePrice, updateAllPrices, setLoading, setError } = cryptoSlice.actions;

export const selectAllAssets = (state) => state.crypto.assets;
export const selectLoading = (state) => state.crypto.loading;
export const selectError = (state) => state.crypto.error;

export default cryptoSlice.reducer;