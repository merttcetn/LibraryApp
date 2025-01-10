// Redux Toolkit ile sıralama durumu yönetimi
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Sıralama durumu için tip tanımı
interface SortState {
    selectedSort: string;
}

// Başlangıç durumu - Varsayılan olarak isme göre sıralama
const initialState: SortState = {
    selectedSort: "name",
};

// Sıralama slice'ı - Kitapların sıralama durumunu yönetir
const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        // Sıralama türünü değiştirme action'ı
        setSort(state, action: PayloadAction<string>) {
            state.selectedSort = action.payload;
        },
    },
});

// Action ve reducer'ı dışa aktar
export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
