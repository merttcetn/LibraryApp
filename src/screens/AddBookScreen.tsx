import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import colors from "../../assets/config/colors";
import SPACING from "../../assets/config/SPACING";
import { addBook } from "../../assets/config/books";

// Navigation prop tipini tanımla
type AddBookScreenProps = {
    navigation: StackNavigationProp<any>;
};

/**
 * Yeni kitap ekleme ekranı
 * Kullanıcıdan kitap bilgilerini alır ve kitaplığa ekler
 */
const AddBookScreen: React.FC<AddBookScreenProps> = ({ navigation }) => {
    // Form alanları için state tanımlamaları
    const [bookName, setBookName] = useState("");
    const [isbn, setIsbn] = useState("");
    const [authors, setAuthors] = useState("");
    const [genre, setGenre] = useState("");
    const [bookCover, setBookCover] = useState("");

    /**
     * Kitap ekleme işlemini gerçekleştirir
     * - Zorunlu alanları kontrol eder
     * - Yeni kitabı oluşturur ve ekler
     * - Başarılı ekleme sonrası ana ekrana döner
     */
    const handleAddBook = () => {
        // Zorunlu alan kontrolü
        if (!bookName || !authors || !genre) {
            Alert.alert(
                "Missing Information",
                "Please fill in at least the book name, author(s), and genre."
            );
            return;
        }

        // Yeni kitap objesi oluştur
        const newBook = {
            name: bookName,
            isbn: isbn,
            authors: authors.split(",").map((author) => author.trim()), // Yazarları virgülle ayır ve boşlukları temizle
            genre: genre,
            cover: bookCover,
        };

        // Kitabı ekle ve kullanıcıya bildir
        addBook(newBook);
        Alert.alert("Success", "Book added successfully!", [
            {
                text: "OK",
                onPress: () => navigation.goBack(), // Ana ekrana dön
            },
        ]);
    };

    /**
     * Kitap ekleme işlemini iptal eder ve ana ekrana döner
     */
    const cancelAdding = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Başlık */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Add Book to Library</Text>
            </View>

            {/* Form alanları */}
            <View style={styles.innerContainer}>
                {/* Kitap adı - Zorunlu alan */}
                <Text style={styles.label}>Book Name*</Text>
                <TextInput
                    style={styles.input}
                    value={bookName}
                    onChangeText={setBookName}
                    placeholderTextColor={colors.light}
                    placeholder="Book Name"
                />

                {/* ISBN - Opsiyonel alan */}
                <Text style={styles.label}>ISBN Number</Text>
                <TextInput
                    style={styles.input}
                    value={isbn}
                    onChangeText={setIsbn}
                    placeholder="ISBN Number"
                    placeholderTextColor={colors.light}
                    keyboardType="numeric"
                />

                {/* Yazarlar - Zorunlu alan */}
                <Text style={styles.label}>Author(s)*</Text>
                <TextInput
                    style={styles.input}
                    value={authors}
                    onChangeText={setAuthors}
                    placeholder="Author(s) - separate with commas"
                    placeholderTextColor={colors.light}
                    multiline={true}
                />

                {/* Tür - Zorunlu alan */}
                <Text style={styles.label}>Genre*</Text>
                <TextInput
                    style={styles.input}
                    value={genre}
                    onChangeText={setGenre}
                    placeholder="Genre"
                    placeholderTextColor={colors.light}
                />

                {/* Kapak resmi URL - Opsiyonel alan */}
                <Text style={styles.label}>Book Cover (URL)</Text>
                <TextInput
                    style={styles.input}
                    value={bookCover}
                    onChangeText={setBookCover}
                    placeholder="Book Cover URL"
                    placeholderTextColor={colors.light}
                />

                {/* Zorunlu alan bildirimi */}
                <Text style={styles.note}>* Required fields</Text>
            </View>

            {/* Aksiyon butonları */}
            <View style={styles.buttonContainer}>
                {/* İptal butonu */}
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={cancelAdding}
                >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>

                {/* Ekleme butonu */}
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

// Stil tanımlamaları
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
    note: {
        color: colors.light,
        fontSize: SPACING * 1.2,
        fontStyle: "italic",
        textAlign: "center",
        marginTop: SPACING,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: SPACING * 10,
        justifyContent: "center",
    },
    addButton: {
        backgroundColor: colors.primary,
        padding: SPACING * 1.5,
        alignItems: "center",
        borderRadius: SPACING,
        width: SPACING * 15,
        marginLeft: SPACING * 3,
    },
    addButtonText: {
        color: colors.white,
        fontSize: SPACING * 2,
        fontWeight: "600",
    },
    cancelButton: {
        backgroundColor: colors.red,
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
