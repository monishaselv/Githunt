import { createSlice } from "@reduxjs/toolkit";
interface dashboardState {
    loading: boolean;
    error: string | null;
    repo: any[];
    query: string;
    details: any;
    dialogVis: boolean;
}
const initialState: dashboardState = {
    loading: false,
    error: null,
    repo: [],
    query: '',
    details: null,
    dialogVis: false,
};
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setLoading: (state, actions) => {
            state.loading = actions.payload;
        },
        setError: (state, actions) => {
            state.error = actions.payload
        },
        setRepo: (state, actions) => {
            state.repo = actions.payload
        },
        setQuery: (state, actions) => {
            state.query = actions.payload
        },
        setDetails: (state, actions) => {
            state.details = actions.payload
        },
        setDialogVis: (state, actions) => {
            state.dialogVis = actions.payload
        }
    }
})
export const { setLoading, setError, setRepo, setQuery, setDetails, setDialogVis } = dashboardSlice.actions;
export default dashboardSlice.reducer;
