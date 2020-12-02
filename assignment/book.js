

class Book{

    constructor(title,author, price, rating){
        this.title=title;
        this.author=author;
        this.price=price;
        this.rating=rating;
    }

    static show(book){
        console.log('book',book);
        
    }
}

class BookManager{

    constructor(){
        this.books=[
            new Book("The Accursed God","Vivek Dutta Mishra",299, 4.3),
            new Book("The Brethren","John Grisham",150, 4),
            new Book("Sons of Fortune","Jeffrey Archer",350, 4.8),
            new Book("Summons","John Grisham",200, 3.9),
        ]
    }

    getAll(){
        return this.books;
    }

    getBooksByAuthor(author){
        return this.books.filter( book => book.author === author )
    }

    getBooksInPriceRange(min,max){
        return this.books.filter( book => book.price >= min && book.price <= max )
    }

    getBooksInRatingRange(min,max){
        return this.books.filter( book => book.rating >= min && book.rating <= max )
    }

    search(text){
        return this.books.filter( book => {
            var bookString = JSON.stringify(book)
            return bookString.indexOf(text) > -1    
        })
    }
}


function showBooks(books,message=''){

    console.log(message);
    console.log('price\trating\tauthor\ttitle');
    for(let book of books){
        console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }

}

let manager=new BookManager();

showBooks(manager.getAll(), "All Books");

showBooks(manager.getBooksByAuthor("John Grisham"),"Books by John Grisham");

showBooks(manager.getBooksInPriceRange(150, 200))

showBooks(manager.getBooksInRatingRange(3.5, 4))

showBooks(manager.search("Vivek"))