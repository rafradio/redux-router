import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tableDatas } from './data/dataForTable';

const initialState = {
    dataTable: tableDatas(),
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.counterValue += 1
        },
        postAdded: (state, action) => {
            state.posts.push(action.payload);
        }
    },
});

export const { increment, postAdded } = counterSlice.actions;

export default counterSlice.reducer;