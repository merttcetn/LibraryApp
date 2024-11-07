import { Text, View, StyleSheet, TextInput } from "react-native";
import React, { Component } from "react";
import { BlurView } from "expo-blur";
import colors from "../../assets/config/colors";
import SPACING from "../../assets/config/SPACING";
import { Ionicons } from "@expo/vector-icons";

interface SearchFieldProps {
    onChange: (text: string) => void; // Add onChange prop to pass search input to parent
}

export class SearchField extends Component<SearchFieldProps> {
    render() {
        return (
            <View style={styles.container}>
                <BlurView
                    intensity={30}
                    style={{ alignItems: "center", justifyContent: "center" }}
                >
                    <TextInput
                        style={styles.inputField}
                        placeholder="Search book by name, author or ISBN"
                        placeholderTextColor={colors.light}
                        onChangeText={(text) => this.props.onChange(text)} // Trigger the prop on change
                    />
                    <Ionicons
                        style={{ position: "absolute", left: SPACING }}
                        name="search"
                        color={colors.light}
                        size={SPACING * 2}
                    />
                </BlurView>
            </View>
        );
    }
}

export default SearchField;

const styles = StyleSheet.create({
    container: {
        marginTop: SPACING,
        marginHorizontal: SPACING,
        borderRadius: SPACING,
        overflow: "hidden",
    },
    inputField: {
        width: "100%",
        color: colors.white,
        fontSize: SPACING * 2,
        padding: SPACING,
        paddingLeft: SPACING * 3.5,
    },
});
