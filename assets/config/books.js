// kitap listesi
let books = [
    {
        id: 1,
        name: "To Kill a Mockingbird",
        isbn: "9780061120084",
        authors: ["Harper Lee"],
        genre: "Fiction",
        cover: "https://media.glamour.com/photos/56e1f3c462b398fa64cbd304/master/w_1600%2Cc_limit/entertainment-2016-02-18-main.jpg",
    },
    {
        id: 2,
        name: "1984",
        isbn: "9780451524935",
        authors: ["George Orwell"],
        genre: "Dystopian",
        cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b468d093312907.5e6139cf2ab03.png",
    },
    {
        id: 3,
        name: "Pride and Prejudice",
        isbn: "9780141439518",
        authors: ["Jane Austen"],
        genre: "Romance",
        cover: "https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg",
    },
    {
        id: 4,
        name: "The Catcher in the Rye",
        isbn: "9780316769488",
        authors: ["J.D. Salinger"],
        genre: "Fiction",
        cover: "https://www.theliterarygiftcompany.com/cdn/shop/products/the-catcher-in-the-rye-poster-676-p.jpeg?v=1457991398",
    },
    {
        id: 5,
        name: "The Great Gatsby",
        isbn: "9780743273565",
        authors: ["F. Scott Fitzgerald"],
        genre: "Classic",
        cover: "https://static01.nyt.com/images/2013/04/26/business/Gatsbyjp/Gatsbyjp-superJumbo.jpg",
    },
    {
        id: 6,
        name: "Moby Dick",
        isbn: "9781503280786",
        authors: ["Herman Melville"],
        genre: "Adventure",
        cover: "https://images.booksense.com/images/007/839/9781954839007.jpg",
    },
    {
        id: 7,
        name: "War and Peace",
        isbn: "9780199232765",
        authors: ["Leo Tolstoy"],
        genre: "Historical Fiction",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5wjTvI6daSotMDLM0sQSLqENwLtaeP5d4Q&s",
    },
    {
        id: 8,
        name: "The Hobbit",
        isbn: "9780547928227",
        authors: ["J.R.R. Tolkien"],
        genre: "Fantasy",
        cover: "https://cdn.kobo.com/book-images/cf32789f-22db-4ad0-bba4-9c0bf69fb872/353/569/90/False/the-hobbit.jpg",
    },
    {
        id: 9,
        name: "The Da Vinci Code",
        isbn: "9780307474278",
        authors: ["Dan Brown"],
        genre: "Mystery, Thriller",
        cover: "https://m.media-amazon.com/images/I/71y4X5150dL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        id: 10,
        name: "The Alchemist",
        isbn: "9780061122415",
        authors: ["Paulo Coelho"],
        genre: "Fiction, Philosophy",
        cover: "https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg",
    },
];

export const addBook = (book) => {
    const newBook = {
        ...book,
        id: books.length + 1,
    };
    books = [...books, newBook];
    return newBook;
};

export const getBooks = () => books;

export default books;
