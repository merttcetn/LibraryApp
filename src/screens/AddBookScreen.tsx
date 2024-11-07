import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import colors from "../../assets/config/colors";
import SPACING from "../../assets/config/SPACING";

// Define your Stack Navigator type
type AddBookScreenProps = {
    navigation: StackNavigationProp<any>; // Adjust the type according to your stack navigator setup
};

const AddBookScreen: React.FC<AddBookScreenProps> = ({ navigation }) => {
    const [bookName, setBookName] = useState("");
    const [isbn, setIsbn] = useState("");
    const [authors, setAuthors] = useState("");
    const [genre, setGenre] = useState("");
    const [bookCover, setBookCover] = useState("");

    const handleAddBook = () => {
        // Handle form submission
        console.log({
            bookName,
            isbn,
            authors: authors.split(","),
            genre,
            bookCover,
        });
        navigation.goBack(); // Go back to the home screen
    };

    const cancelAdding = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Add Book to Library</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.label}>Book Name</Text>
                <TextInput
                    style={styles.input}
                    value={bookName}
                    onChangeText={setBookName}
                    placeholderTextColor={colors.light}
                    placeholder="Book Name"
                />

                <Text style={styles.label}>ISBN Number</Text>
                <TextInput
                    style={styles.input}
                    value={isbn}
                    onChangeText={setIsbn}
                    placeholder="ISBN Number"
                    placeholderTextColor={colors.light}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Author(s)</Text>
                <TextInput
                    style={styles.input}
                    value={authors}
                    onChangeText={setAuthors}
                    placeholder="Author"
                    placeholderTextColor={colors.light}
                    multiline={true}
                />

                <Text style={styles.label}>Genre</Text>
                <TextInput
                    style={styles.input}
                    value={genre}
                    onChangeText={setGenre}
                    placeholder="Genre"
                    placeholderTextColor={colors.light}
                />

                <Text style={styles.label}>Book Cover (URL)</Text>
                <TextInput
                    style={styles.input}
                    value={bookCover}
                    onChangeText={setBookCover}
                    placeholder="Book Cover URL"
                    placeholderTextColor={colors.light}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={cancelAdding}
                >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddBook}
                >
                    <Text style={styles.addButtonText}>Add Book</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        width: "100%",
        alignItems: "center",
    },
    title: {
        color: colors.white,
        fontSize: SPACING * 3,
        fontWeight: "700",
        marginTop: SPACING * 5,
    },
    container: {
        flex: 1,
        padding: SPACING * 2,
        backgroundColor: colors.dark,
    },
    innerContainer: {
        backgroundColor: colors.dark,
        marginTop: SPACING * 5,
    },
    label: {
        color: colors.white,
        fontSize: SPACING * 2,
        fontWeight: "600",
        marginBottom: SPACING / 2,
        alignSelf: "center",
    },
    input: {
        color: colors.white,
        borderWidth: 1,
        borderColor: colors["white-smoke"],
        padding: SPACING * 1.5,
        marginBottom: 15,
        borderRadius: SPACING,
        fontSize: SPACING * 1.5,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: SPACING * 14,
        justifyContent: "center",
    },
    addButton: {
        backgroundColor: colors.primary,
        padding: SPACING * 1.5,
        alignItems: "center",
        borderRadius: SPACING,
        width: SPACING * 15,
        marginLeft: SPACING * 3, // Added margin for spacing between buttons
    },
    addButtonText: {
        color: colors.white,
        fontSize: SPACING * 2,
        fontWeight: "600",
    },
    cancelButton: {
        backgroundColor: colors.red, // You can change the color for better visibility
        padding: SPACING * 1.5,
        alignItems: "center",
        borderRadius: SPACING,
        width: SPACING * 15,
    },
    cancelButtonText: {
        color: colors.white,
        fontSize: SPACING * 2,
        fontWeight: "600",
    },
});

export default AddBookScreen;
