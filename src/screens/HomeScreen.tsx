// Ana ekran bileşeni - Kütüphane uygulamasının ana görünümü
import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
// Özel bileşenler
import SearchField from "../components/SearchField";
import SortingField from "../components/SortingField";
import FilterField from "../components/FilterField";
import BookList from "../components/BookList";
// Yardımcı fonksiyonlar ve yapılandırmalar
import { getBooks } from "../../assets/config/books";
import { RootStackParamList } from "../navigation/AppNavigator";
import SPACING from "../../assets/config/SPACING";
import colors from "../../assets/config/colors";

// Navigation tipleri
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen: React.FC = () => {
    // Navigasyon ve state yönetimi
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [allBooks, setAllBooks] = useState(getBooks());
    const [filteredBooks, setFilteredBooks] = useState(allBooks);
    const [searchText, setSearchText] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const selectedSort = useSelector((state: any) => state.sort.selectedSort);

    // Ekran her odaklandığında kitap listesini güncelle
    useFocusEffect(
        React.useCallback(() => {
            const books = getBooks();
            setAllBooks(books);
            filterBooks(searchText, selectedGenre, books);
        }, [])
    );

    // Kitapları filtrele - Arama metni ve türe göre
    const filterBooks = (text: string, genre: string, books = allBooks) => {
        let filtered = books;

        // Metin araması filtrelemesi
        if (text) {
            const lowerCaseText = text.toLowerCase();
            filtered = filtered.filter((book) => {
                const nameMatch = book.name
                    .toLowerCase()
                    .includes(lowerCaseText);
                const authorMatch = book.authors.some((author) =>
                    author.toLowerCase().includes(lowerCaseText)
                );
                const isbnMatch =
                    book.isbn &&
                    book.isbn.toLowerCase().includes(lowerCaseText);
                return nameMatch || authorMatch || isbnMatch;
            });
        }

        // Tür filtrelemesi
        if (genre !== "All") {
            filtered = filtered.filter((book) => book.genre === genre);
        }

        setFilteredBooks(filtered);
    };

    // Arama işleyicisi
    const handleSearch = (text: string) => {
        setSearchText(text);
        filterBooks(text, selectedGenre);
    };

    // Tür değişikliği işleyicisi
    const handleGenreChange = (genre: string) => {
        setSelectedGenre(genre);
        filterBooks(searchText, genre);
    };

    // Kitap silme işleyicisi
    const handleDelete = (id: number) => {
        const updatedBooks = allBooks.filter((book) => book.id !== id);
        setAllBooks(updatedBooks);
        filterBooks(searchText, selectedGenre, updatedBooks);
    };

    // Sıralama değiştiğinde kitapları yeniden sırala
    useEffect(() => {
        if (selectedSort) {
            const sortedBooks = [...filteredBooks].sort((a, b) => {
                if (selectedSort === "name")
                    return a.name.localeCompare(b.name);
                if (selectedSort === "author")
                    return a.authors[0].localeCompare(b.authors[0]);
                if (selectedSort === "isbn" && a.isbn && b.isbn)
                    return a.isbn.localeCompare(b.isbn);
                return 0;
            });
            setFilteredBooks(sortedBooks);
        }
    }, [selectedSort]);

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Başlık ve filtre alanı */}
            <View style={styles.titleContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Library App</Text>
                    <FilterField
                        selectedGenre={selectedGenre}
                        onGenreChange={handleGenreChange}
                    />
                </View>
            </View>

            {/* Arama, sıralama ve kitap listesi bileşenleri */}
            <SearchField onChange={handleSearch} />
            <SortingField />
            <BookList
                filteredBooks={filteredBooks}
                onDelete={handleDelete}
                navigation={navigation}
            />

            {/* Yeni kitap ekleme butonu */}
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

// Stil tanımlamaları
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
        paddingHorizontal: SPACING,
        marginBottom: SPACING,
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
