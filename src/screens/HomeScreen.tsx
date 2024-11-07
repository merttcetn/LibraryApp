import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import SearchField from "../components/SearchField";
import SortingField from "../components/SortingField";
import BookList from "../components/BookList";
import books from "../../assets/config/books";
import { RootStackParamList } from "../navigation/AppNavigator"; // Import the navigation types
import SPACING from "../../assets/config/SPACING";
import colors from "../../assets/config/colors";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [filteredBooks, setFilteredBooks] = useState(books);
    const selectedSort = useSelector((state: any) => state.sort.selectedSort);

    const handleSearch = (text: string) => {
        const filtered = books.filter((book) => {
            const lowerCaseText = text.toLowerCase();
            const nameMatch = book.name.toLowerCase().includes(lowerCaseText);
            const authorMatch = book.authors.some((author) =>
                author.toLowerCase().includes(lowerCaseText)
            );
            const isbnMatch =
                book.isbn && book.isbn.toLowerCase().includes(lowerCaseText);
            return nameMatch || authorMatch || isbnMatch;
        });
        setFilteredBooks(filtered);
    };

    const handleDelete = (id: number) => {
        setFilteredBooks((prevBooks) =>
            prevBooks.filter((book) => book.id !== id)
        );
    };

    useEffect(() => {
        const sortedBooks = [...filteredBooks].sort((a, b) => {
            if (selectedSort === "name") return a.name.localeCompare(b.name);
            if (selectedSort === "author")
                return a.authors[0].localeCompare(b.authors[0]);
            if (selectedSort === "isbn" && a.isbn && b.isbn)
                return a.isbn.localeCompare(b.isbn);
            return 0;
        });
        setFilteredBooks(sortedBooks);
    }, [selectedSort]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Library App</Text>
            </View>

            <SearchField onChange={handleSearch} />

            <SortingField />

            <BookList
                filteredBooks={filteredBooks}
                onDelete={handleDelete}
                navigation={navigation}
            />

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate("AddBook")}
            >
                <Text style={styles.addButtonText}>Add Book to Library</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: colors.dark,
    },
    container: {
        padding: SPACING,
        flexDirection: "row",
        alignItems: "center",
    },
    sortingText: {
        color: colors.light,
        fontSize: SPACING * 1.5,
        padding: SPACING,
    },
    innerContainer: {
        borderRadius: SPACING,
        overflow: "hidden",
        width: SPACING * 4,
        height: SPACING * 4,
    },
    blurView: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    titleContainer: {
        width: "100%",
        alignItems: "center",
    },
    title: {
        color: colors.white,
        fontSize: SPACING * 3,
        fontWeight: "700",
    },
    bookList: {
        marginBottom: SPACING * 1.75,
        borderRadius: SPACING * 2,
    },
    bookItem: {
        padding: SPACING,
        backgroundColor: colors.secondary,
        marginVertical: SPACING / 2,
        borderRadius: SPACING,
        marginHorizontal: SPACING,
    },
    bookName: {
        color: colors.white,
        fontSize: SPACING * 2,
        fontWeight: "600",
    },
    bookAuthor: {
        color: colors.white,
        fontSize: SPACING * 1.5,
        marginTop: SPACING / 4,
    },
    bookGenre: {
        color: colors.white,
        fontSize: SPACING * 1.5,
        marginTop: SPACING / 4,
        fontStyle: "italic",
    },
    deleteButton: {
        backgroundColor: colors.red,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: SPACING * 5,
        height: SPACING * 5,
        borderRadius: SPACING * 20,
        marginVertical: SPACING / 2,
        marginHorizontal: SPACING,
    },
    addButton: {
        backgroundColor: colors.primary,
        padding: SPACING * 1.5,
        marginHorizontal: SPACING * 2,
        borderRadius: SPACING,
        alignSelf: "center",
        justifyContent: "center",
        width: SPACING * 25,
    },
    addButtonText: {
        color: colors.white,
        fontSize: SPACING * 2,
        fontWeight: "600",
        alignSelf: "center",
    },
});
