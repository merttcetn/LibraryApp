import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../navigation/AppNavigator";
import colors from "../../assets/config/colors";
import SPACING from "../../assets/config/SPACING";
import { BlurView } from "expo-blur";

// Define props type using NativeStackScreenProps
type BookDetailsScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "BookDetails"
>;

const BookDetailsScreen = ({ route, navigation }: BookDetailsScreenProps) => {
    const { book } = route.params;

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ImageBackground
                    source={{ uri: book.cover }}
                    style={styles.imageBackground}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.topIcons}>
                        <TouchableOpacity
                            style={styles.iconContainer}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons
                                name="arrow-back"
                                color={colors["white-smoke"]}
                                size={SPACING * 2}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.blurViewContainer}>
                        <BlurView
                            intensity={80}
                            tint="dark"
                            style={styles.blurView}
                        >
                            <View>
                                <Text style={styles.bookTitle}>
                                    {book.name}
                                </Text>
                                <Text style={styles.bookAuthor}>
                                    {book.authors}
                                </Text>
                                <Text style={styles.bookGenre}>
                                    {book.genre}
                                </Text>
                                <Text style={styles.isbnText}>
                                    ISBN: {book.isbn}
                                </Text>
                            </View>
                        </BlurView>
                    </View>
                </ImageBackground>
                <View style={styles.warningContainer}>
                    <Text style={styles.warningText}>
                        If the cover image cannot be seen, image URL may not be
                        working properly.
                    </Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: colors.dark, height: "100%", width: "100%" },
    imageBackground: {
        height: 700,
        justifyContent: "space-between",
    },
    imageStyle: {
        borderRadius: SPACING * 3,
    },
    topIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: SPACING * 2,
    },
    iconContainer: {
        backgroundColor: colors.dark,
        padding: SPACING,
        borderRadius: SPACING * 1.5,
    },
    blurViewContainer: {
        borderRadius: SPACING * 3,
        overflow: "hidden",
        color: colors.light,
    },
    blurView: {
        padding: SPACING * 2,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bookTitle: {
        fontSize: SPACING * 3,
        color: colors.white,
        fontWeight: "700",
        marginBottom: SPACING,
    },
    bookAuthor: {
        fontSize: SPACING * 2.25,
        color: colors["white-smoke"],
        fontWeight: "500",
        marginBottom: SPACING,
    },
    bookGenre: {
        fontSize: SPACING * 1.75,
        color: colors["white-smoke"],
        fontWeight: "500",
        marginBottom: SPACING,
    },
    isbnText: {
        color: colors.white,
        fontStyle: "italic",
        fontSize: SPACING * 1.25,
    },
    warningContainer: {
        padding: SPACING * 3,
        marginTop: SPACING,
        alignSelf: "center",
    },
    warningText: {
        color: colors["white-smoke"],
        fontSize: SPACING * 1.1,
        marginBottom: SPACING,
        alignSelf: "center",
        textAlign: "center",
        fontStyle: "italic",
    },
});

export default BookDetailsScreen;
