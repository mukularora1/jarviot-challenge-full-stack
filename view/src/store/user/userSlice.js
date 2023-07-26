import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  accessToken: '',
  isLogin: false,
  isLoader: false,
  usage: {
    totalStorage: 0,
    usedStorage: 0,
    remainingStorage: 0,
  },
  graphData: {
    labels: ['Used storage', 'Remaining storage'],
    datasets: [
      {
        data: [],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
      },
    ],
  },
  tableData: [],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setIsLoader: (state, action) => {
      state.isLoader = action.payload;
    },
    setUsage: (state, action) => {
      state.usage = { ...action.payload };
    },
    setTableData: (state, action) => {
      state.tableData = [...action.payload];
    },
    setGraphData: (state, action) => {
      state.graphData.datasets[0].data.push(...action.payload);
    },
    resetState: () => initialState,
  },
});

export default userSlice.reducer;
export const {
  setIsLogin,
  setAccessToken,
  setIsLoader,
  setUsage,
  setTableData,
  setGraphData,
  resetState,
} = userSlice.actions;
export const selectUser = (state) => state.user;
