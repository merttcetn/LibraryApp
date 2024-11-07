import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/store"; // Import your Redux store
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./src/navigation/AppNavigator"; // Import your navigation setup

export default function App() {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <AppNavigator />
                <StatusBar style="auto" />
            </GestureHandlerRootView>
        </Provider>
    );
}
