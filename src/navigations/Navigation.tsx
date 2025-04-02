import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "../view/screens/Onboarding";
import { DashboardScreen } from "../view/screens/Dashboard";
import { FavouritesScreen } from "../view/screens/Favourites";
import { DetailsScreen } from "../view/screens/Details";


const Stack = createNativeStackNavigator();
const AppNavigatior = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
            <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
    );
}
export default AppNavigatior;