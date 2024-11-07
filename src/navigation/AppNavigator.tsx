import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AddBookScreen from "../screens/AddBookScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen";

// Define the types for your stack
export type RootStackParamList = {
    Home: undefined;
    AddBook: undefined;
    BookDetails: { book: any };
};

// Create a Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddBook"
                    component={AddBookScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BookDetails"
                    component={BookDetailsScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
