import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
    selectedSort: string;
}

const initialState: SortState = {
    selectedSort: "name", // Default sort option
};

const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<string>) {
            state.selectedSort = action.payload;
        },
    },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
