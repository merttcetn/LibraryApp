export interface Book {
    id: number; // Kitap kimliği
    title: string; // Kitap adı
    author: string[]; // Yazarlar (birden fazla yazar olabileceği için dizi)
    isbn: string; // ISBN numarası
    genre?: string; // Tür (isteğe bağlı)
    cover?: string; // Kitap kapağı (isteğe bağlı)
}
