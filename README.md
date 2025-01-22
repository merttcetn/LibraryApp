# Library App

Modern ve kullanıcı dostu bir kütüphane yönetim uygulaması. Bu React Native tabanlı uygulama, kişisel kitap koleksiyonunuzu kolayca yönetmenizi sağlar.

## 🌟 Özellikler

### 📚 Kitap Yönetimi

-   Yeni kitap ekleme (isim, yazar, tür, ISBN ve kapak resmi)
-   Kitap silme ve detaylarını görüntüleme
-   Varsayılan kapak resmi desteği

### 🔍 Gelişmiş Arama ve Filtreleme

-   İsim, yazar ve ISBN numarasına göre anlık arama
-   Türe göre filtreleme (modal pencere ile kolay seçim)
-   Tüm filtreleme seçeneklerinin dinamik güncellenmesi

### 📋 Sıralama Özellikleri

-   İsme göre sıralama
-   Yazara göre sıralama
-   ISBN numarasına göre sıralama

### 💫 Kullanıcı Deneyimi

-   Modern ve sezgisel arayüz
-   Kaydırmalı kitap listesi
-   Kolay gezinme
-   Anlık geri bildirimler ve uyarılar

## 🛠 Kullanılan Teknolojiler

### Temel Teknolojiler

-   **React Native**: Mobil uygulama geliştirme çatısı
-   **TypeScript**: Tip güvenli geliştirme
-   **Redux Toolkit**: Durum yönetimi
-   **React Navigation**: Ekranlar arası gezinme

### UI Bileşenleri

-   **@react-native-picker/picker**: Tür seçimi için
-   **@expo/vector-icons**: İkonlar için
-   **React Native Gesture Handler**: Dokunma işlemleri için

## 📁 Proje Yapısı

```
LibraryApp/
├── src/
│   ├── components/
│   │   ├── BookList.tsx       # Kitap listesi
│   │   ├── FilterField.tsx    # Tür filtreleme modalı
│   │   ├── SearchField.tsx    # Arama alanı
│   │   └── SortingField.tsx   # Sıralama seçenekleri
│   ├── screens/
│   │   ├── HomeScreen.tsx     # Ana ekran
│   │   ├── AddBookScreen.tsx  # Kitap ekleme ekranı
│   │   └── BookDetailsScreen.tsx # Kitap detayları
│   ├── features/
│   │   └── sort/             # Sıralama ile ilgili Redux kodları
│   ├── navigation/
│   └── store.ts
└── assets/
    └── config/
        ├── books.js          # Kitap verileri
        ├── colors.js         # Renk tanımları
        └── SPACING.js        # Boşluk sabitleri
```

## 🎯 Temel Bileşenler

### HomeScreen

-   Ana uygulama arayüzü
-   Kitap listesi görünümü
-   Arama, filtreleme ve sıralama kontrolleri

### FilterField

-   Modal tabanlı tür filtreleme
-   Dinamik tür listesi
-   Kolay seçim arayüzü

### AddBookScreen

-   Kapsamlı kitap ekleme formu
-   Form doğrulama
-   Zorunlu alan kontrolleri
-   Otomatik ID atama

### BookList

-   Kaydırılabilir kitap listesi
-   Her kitap için temel bilgiler
-   Silme ve detay görüntüleme seçenekleri

## 🚀 Başlangıç

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

## 📱 Kullanım

1. Ana ekranda mevcut kitapları görüntüleyin
2. Sağ üstteki filtre butonuyla türe göre filtreleme yapın
3. Arama çubuğunu kullanarak kitapları arayın
4. "Add Book to Library" butonuyla yeni kitap ekleyin
5. Kitapları sıralamak için sıralama seçeneklerini kullanın

## 🔄 State Yönetimi

Redux Toolkit ile merkezi state yönetimi:

-   Sıralama durumu
-   Kitap listesi
-   Arama ve filtreleme durumları

## 🎨 Tasarım

-   Koyu tema
-   Tutarlı renk paleti
-   Responsive tasarım
-   Kullanıcı dostu arayüz
