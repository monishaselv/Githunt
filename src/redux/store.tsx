import { combineReducers, createStore } from "redux";
import dashboardSlice from "./slice/dashboardSlice";
import favouritesSlice from './slice/favSlice';

const rootReducer = combineReducers({
    dashboard: dashboardSlice,
    favourites: favouritesSlice,

});
export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;