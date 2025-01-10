# Library App

Bu uygulama, kitap koleksiyonunuzu yönetmenize yardımcı olan modern bir React Native uygulamasıdır.

## Özellikler

-   Kitap ekleme, silme ve detaylarını görüntüleme
-   İsim, yazar ve ISBN numarasına göre kitap arama
-   Kitapları türlerine göre filtreleme
-   İsim, yazar ve ISBN'e göre sıralama
-   Kaydırmalı kitap listesi ve interaktif kullanıcı arayüzü

## Kullanılan Teknolojiler

### Ana Teknolojiler

-   **React Native**: Mobil uygulama geliştirme çatısı
-   **TypeScript**: Tip güvenli JavaScript süper kümesi
-   **Redux Toolkit**: State yönetimi için
-   **React Navigation**: Ekranlar arası gezinme için

### Önemli Kütüphaneler

-   `@react-navigation/native`: Temel navigasyon işlevleri
-   `@react-navigation/stack`: Stack tabanlı ekran geçişleri
-   `react-native-gesture-handler`: Dokunma ve hareket işlemleri
-   `@reduxjs/toolkit`: Modern Redux state yönetimi
-   `expo`: React Native geliştirme araçları

## Proje Yapısı

```
LibraryApp/
├── src/
│   ├── components/          # Yeniden kullanılabilir UI bileşenleri
│   │   ├── BookList.tsx    # Kitap listesi bileşeni
│   │   ├── FilterField.tsx # Tür filtreleme bileşeni
│   │   ├── SearchField.tsx # Arama bileşeni
│   │   └── SortingField.tsx# Sıralama bileşeni
│   ├── screens/            # Uygulama ekranları
│   │   ├── HomeScreen.tsx  # Ana ekran
│   │   ├── AddBookScreen.tsx # Kitap ekleme ekranı
│   │   └── BookDetailsScreen.tsx # Kitap detay ekranı
│   ├── features/           # Redux özellikleri
│   │   └── sort/          # Sıralama ile ilgili Redux kodları
│   ├── navigation/         # Navigasyon yapılandırması
│   └── store.ts           # Redux store yapılandırması
├── assets/                 # Statik dosyalar (resimler, fontlar)
└── App.tsx                # Ana uygulama bileşeni
```

## Bileşenler ve İşlevleri

### Ana Bileşenler

#### BookList

-   Kitapların listesini görüntüler
-   Sağa/sola kaydırma ile silme ve detay görüntüleme
-   Performans optimizasyonu için FlatList kullanır

#### FilterField

-   Kitapları türlerine göre filtreleme
-   Dropdown menü ile kolay seçim
-   Tüm türleri dinamik olarak listeler

#### SearchField

-   Gerçek zamanlı arama işlevi
-   İsim, yazar ve ISBN'e göre arama
-   Büyük/küçük harf duyarsız arama

#### SortingField

-   Kitapları farklı kriterlere göre sıralama
-   Redux ile sıralama durumu yönetimi
-   Anlık sıralama güncellemesi

### Ekranlar

#### HomeScreen

-   Ana uygulama arayüzü
-   Tüm filtreleme ve sıralama kontrolleri
-   Kitap listesi görünümü

#### AddBookScreen

-   Yeni kitap ekleme formu
-   Form doğrulama
-   Resim yükleme desteği

#### BookDetailsScreen

-   Kitap detaylarını görüntüleme
-   Düzenleme seçenekleri
-   Kapsamlı kitap bilgileri

## State Yönetimi

Redux Toolkit kullanılarak uygulama durumu yönetilir:

-   Sıralama durumu
-   Filtreleme durumu
-   Kitap listesi
-   Arama durumu

## Kurulum ve Çalıştırma

1. Projeyi klonlayın:

```bash
git clone [repo-url]
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Uygulamayı başlatın:

```bash
npm start
```
