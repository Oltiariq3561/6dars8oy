import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: 0,
  fromCurrency: 'USD',
  toCurrency: 'RUB',
  exchangeRate: 100,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setFromCurrency: (state, action) => {
      state.fromCurrency = action.payload;
    },
    setToCurrency: (state, action) => {
      state.toCurrency = action.payload;
    },
    setExchangeRate: (state, action) => {
      state.exchangeRate = action.payload;
    },
  },
});

export const { setAmount, setFromCurrency, setToCurrency, setExchangeRate } = currencySlice.actions;
export default currencySlice.reducer;
