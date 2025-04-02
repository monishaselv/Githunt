import React, { useEffect, useMemo, useState } from "react";
import DarkTheme from "./src/theme/DarkTheme";
import LightTheme from "./src/theme/LightTheme";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigatior from "./src/navigations/Navigation";
import { ThemeContext } from "./src/theme/AppContext";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { Alert, Appearance } from "react-native";
import NetInfo from '@react-native-community/netinfo';



const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(Appearance.getColorScheme() === "dark");
  const theme = isDarkTheme ? 'dark' : 'light';
  const themeContext = useMemo(() => {
    return {
      isDarkTheme,
      setIsDarkTheme,
      theme,
      navTheme: isDarkTheme ? DarkTheme : LightTheme,
    };
  }, [isDarkTheme]);
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkTheme(colorScheme === "dark");
    });
    return () => subscription.remove();
  }, []);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        Alert.alert(
          "No Internet",
          "Please check your network connection.",
          [{ text: "OK" }]
        );
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
        <ThemeContext.Provider value={themeContext}>
            <AppNavigatior />
        </ThemeContext.Provider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
