import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Repo = {
    id: number;
    name: string;
    owner: { login: string; avatar_url: string };
    stargazers_count: number;
    forks: number;
    language: string;
};

type FavouritesState = {
    favs: Repo[];
};

const initialState: FavouritesState = {
    favs: [],
};

const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        setFavourites: (state, action: PayloadAction<Repo[]>) => {
            state.favs = action.payload;
        },
        addFavourite: (state, action: PayloadAction<Repo>) => {
            state.favs.push(action.payload);
            saveFavouritesToStorage(state.favs);
        },
        removeFavourite: (state, action: PayloadAction<number>) => {
            state.favs = state.favs.filter(repo => repo.id !== action.payload);
            saveFavouritesToStorage(state.favs);
        },
    },
});
export const { setFavourites, addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
const saveFavouritesToStorage = async (favs: Repo[]) => {
    try {
        await AsyncStorage.setItem("favourites", JSON.stringify(favs));
    } catch (error) {
        console.log("Error saving favorites:", error);
    }
};
