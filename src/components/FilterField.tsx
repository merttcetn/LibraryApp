import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../assets/config/colors";
import SPACING from "../../assets/config/SPACING";
import { getBooks } from "../../assets/config/books";

// Bileşen prop tipleri
interface FilterFieldProps {
    selectedGenre: string;
    onGenreChange: (genre: string) => void;
}

const FilterField: React.FC<FilterFieldProps> = ({
    selectedGenre,
    onGenreChange,
}) => {
    // State tanımlamaları
    const [modalVisible, setModalVisible] = useState(false);
    const [genres, setGenres] = useState<string[]>([]);

    // Component mount olduğunda türleri yükle
    useEffect(() => {
        updateGenres();
    }, []);

    // Mevcut kitaplardan benzersiz türleri al
    const updateGenres = () => {
        const books = getBooks();
        const uniqueGenres = [
            "All",
            ...new Set(books.map((book) => book.genre)),
        ];
        setGenres(uniqueGenres);
    };

    // Modal açılmadan önce türleri güncelle
    const handleOpenModal = () => {
        updateGenres();
        setModalVisible(true);
    };

    return (
        <>
            {/* Filtre butonu */}
            <TouchableOpacity
                style={styles.filterButton}
                onPress={handleOpenModal}
            >
                <Ionicons name="filter" size={24} color={colors.white} />
            </TouchableOpacity>

            {/* Tür seçim modalı */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        {/* Modal başlığı */}
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>
                                Filter by Genre
                            </Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={styles.closeButton}
                            >
                                <Ionicons
                                    name="close"
                                    size={24}
                                    color={colors.white}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Tür seçim picker'ı */}
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedGenre}
                                onValueChange={(value) => {
                                    onGenreChange(value);
                                    setModalVisible(false);
                                }}
                                style={styles.picker}
                                dropdownIconColor={colors.white}
                            >
                                {genres.map((genre) => (
                                    <Picker.Item
                                        key={genre}
                                        label={genre}
                                        value={genre}
                                        color={colors.dark}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
    filterButton: {
        marginLeft: SPACING,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: colors.dark,
        borderRadius: SPACING,
        padding: SPACING * 2,
        width: "80%",
        maxWidth: 400,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SPACING * 2,
    },
    modalTitle: {
        color: colors.white,
        fontSize: SPACING * 1.8,
        fontWeight: "600",
    },
    closeButton: {
        padding: SPACING / 2,
    },
    pickerContainer: {
        backgroundColor: colors.white,
        borderRadius: SPACING,
    },
    picker: {
        height: SPACING * 15,
    },
});

export default FilterField;
