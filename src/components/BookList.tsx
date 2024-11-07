import React, { useState } from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../assets/config/colors";
import SPACING from "../../assets/config/SPACING";
import { NavigationProp } from "@react-navigation/native";

interface Book {
    id: number;
    name: string;
    isbn: string;
    authors: string[];
    genre: string;
    cover: string;
}

interface BookListProps {
    filteredBooks: Book[];
    onDelete: (id: number) => void;
    navigation: NavigationProp<any>;
}

const BookList: React.FC<BookListProps> = ({
    filteredBooks,
    onDelete,
    navigation,
}) => {
    const renderLeftActions = (item: Book) => (
        <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(item.id)} // Call the delete handler
        >
            <Ionicons name="trash-bin" size={24} color={colors.white} />
        </TouchableOpacity>
    );

    const renderRightActions = (item: Book) => (
        <TouchableOpacity
            style={styles.infoButton}
            onPress={() => navigation.navigate("BookDetails", { book: item })}
        >
            <Ionicons
                name="information-circle"
                size={24}
                color={colors.white}
            />
        </TouchableOpacity>
    );

    return (
        <FlatList
            style={styles.bookList}
            data={filteredBooks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index, separators }) => (
                <Swipeable
                    renderRightActions={() => renderRightActions(item)}
                    renderLeftActions={() => renderLeftActions(item)}
                >
                    <View style={styles.bookItem}>
                        <Text style={styles.bookName}>{item.name}</Text>
                        <Text style={styles.bookAuthor}>
                            {item.authors.join(", ")}
                        </Text>
                        <Text style={styles.bookGenre}>{item.genre}</Text>
                    </View>
                </Swipeable>
            )}
        />
    );
};

const styles = StyleSheet.create({
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
    infoButton: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: SPACING * 5,
        height: SPACING * 5,
        borderRadius: SPACING * 20,
        marginVertical: SPACING / 2,
        marginHorizontal: SPACING,
    },
});

export default BookList;
