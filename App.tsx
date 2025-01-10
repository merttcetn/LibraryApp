// Ana uygulama bileşeni - Tüm uygulamanın başlangıç noktası
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
// Redux store'u - Global durum yönetimi için
import store from "./src/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// Ana navigasyon yapılandırması
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    return (
        // Redux Provider ile tüm uygulamaya state yönetimi sağlanıyor
        <Provider store={store}>
            {/* Gesture Handler ile hareket işlemleri için gerekli wrapper */}
            <GestureHandlerRootView style={{ flex: 1 }}>
                <AppNavigator />
                {/* Durum çubuğu stilini otomatik ayarla */}
                <StatusBar style="auto" />
            </GestureHandlerRootView>
        </Provider>
    );
}
