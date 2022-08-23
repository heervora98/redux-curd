import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = [
  {
    id: 0,
    name: "Heer Vora",
    number: "1234567890",
    email: "heer@g.com"
  },
  {
    id: 1,
    name: "Secound Name",
    number: "0987654321",
    email: "secound@g.com"
  }
]


// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );


// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,

//   reducers: {
//     increment: (state) => {

//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },

//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.value += action.payload;
//       });
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;


// export const selectCount = (state) => state.counter.value;


// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

// export default counterSlice.reducer;
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      state = [...state, action.payload];
      return state;
    case "UPDATE_USER":
      const updateState = state.map((user) => user.id === action.payload.id ? action.payload : user)
      state = updateState;
      return state;
    case "DELETE_USER":
      const filterUser = state.filter((user) => user.id !== action.payload && user);
      state = filterUser;
      return state
    default:
      return state;
  }
};

export default userReducer;