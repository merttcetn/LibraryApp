import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../features/sort/sortSlice";
import colors from "../../assets/config/colors";
import SPACING from "../../assets/config/SPACING";

const SortingField = () => {
    const dispatch = useDispatch();
    const selectedSort = useSelector((state: any) => state.sort.selectedSort);

    const handleSortChange = (sort: string) => {
        dispatch(setSort(sort));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sortByText}>Sort by:</Text>
            {["name", "author", "isbn"].map((sortOption) => (
                <TouchableOpacity
                    key={sortOption}
                    onPress={() => handleSortChange(sortOption)}
                    style={[styles.filterButton]}
                >
                    <Text
                        style={[
                            styles.filterText,
                            selectedSort === sortOption && styles.selectedText, // Change text color if selected
                        ]}
                    >
                        {sortOption === "isbn"
                            ? "ISBN" // Display as "ISBN" if the option is "isbn"
                            : sortOption.charAt(0).toUpperCase() +
                              sortOption.slice(1)}
                    </Text>
                    {selectedSort === sortOption && <View style={styles.dot} />}
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: SPACING,
        paddingHorizontal: SPACING,
        flexDirection: "row",
    },
    sortByText: {
        color: colors.light,
        fontSize: SPACING * 1.75,
        alignSelf: "center",
        fontWeight: "700",
        marginBottom: SPACING,
    },
    filterOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    filterButton: {
        paddingVertical: SPACING / 2,
        paddingHorizontal: SPACING * 3,
        borderRadius: SPACING,
        alignItems: "center", // Center align text and dot
    },
    filterText: {
        color: colors["white-smoke"], // Default text color
        fontSize: SPACING * 1.5,
        fontWeight: "600",
    },
    selectedText: {
        color: colors.primary, // Change this to the color you want when selected
        fontWeight: "800",
    },
    dot: {
        width: 8, // Dot width
        height: 8, // Dot height
        borderRadius: 4, // Make it a circle
        backgroundColor: colors.primary, // Dot color
        marginTop: 4, // Space between text and dot
    },
});

export default SortingField;
