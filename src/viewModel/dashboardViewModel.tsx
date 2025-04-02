import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setDetails, setError, setLoading, setRepo } from "../redux/slice/dashboardSlice";
import { addFavourite, removeFavourite } from "../redux/slice/favSlice";
import { Alert, Platform, ToastAndroid } from "react-native";

const DashboardViewModel = () => {
    const dispatch = useDispatch();
    const query = useSelector((state: RootState) => state.dashboard.query);
    const dets = useSelector((state: RootState) => state.dashboard.details);
    const showToast = (message: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert(message);
        }
    };
    //Api Calls
    const searchRepositories = async () => {
        const DEFAULT_URL = 'https://api.github.com/search/repositories?q=stars:>10000&sort=stars&order=desc';
        const SEARCH_URL = `https://api.github.com/search/repositories?q=${query}`;
        const apiUrl = query.trim() ? SEARCH_URL : DEFAULT_URL;
        console.log('Fetching from:', apiUrl);
        dispatch(setLoading(true))
        dispatch(setError(null));
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.items) {
                dispatch(setRepo(data.items));
            } else {
                dispatch(setError("No repositories found."));
            }
        } catch (err) {
            dispatch(setError("Error fetching repositories."));
        } finally {
            dispatch(setLoading(false));
        }
    };
    const repoDetails = async (owner: any, repo: any) => {
        dispatch(setLoading(true))
        dispatch(setError(null));
        console.log("dat...", owner);
        try {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
            const data = await response.json();
            console.log("dat...", data);
            if (data) {
                dispatch(setDetails(data));
                console.log("the...........", dets);
            } else {
                dispatch(setError("No repositories found."));
            }
        } catch (err) {
            dispatch(setError("Error fetching repositories."));
        } finally {
            dispatch(setLoading(false));
        }
    };
    //Functions
    const formatNumber = (num: number) => {
        if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(1) + "M";
        } else if (num >= 1_000) {
            return (num / 1_000).toFixed(1) + "K";
        }
        return num.toString();
    };
    const handleAddToFavs = (repo: any) => {
        dispatch(addFavourite(repo));
        showToast('🎉 Added To Favourites');
    };

    const handleRemoveFromFavs = (repoId: number) => {
        dispatch(removeFavourite(repoId));
        showToast('Removed from Favourites');
    };

    return { searchRepositories, formatNumber, repoDetails, handleAddToFavs, handleRemoveFromFavs }
}
export default DashboardViewModel;