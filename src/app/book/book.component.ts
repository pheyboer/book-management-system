import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Book {
  id: string,
  title: string,
  author: string,
}

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  title: string = '';
  author: string = '';
  books: Book[] = [];

  ngOnInit() {
    // Load books initally
    this.books = this.getBooks();
  }

  addBook() {
    // add logic for adding book
    console.log('book added', { title: this.title, author: this.author });
    if (this.title.trim() === '' || this.author.trim() === '') {
      return; // Do not add empty books
    }

    // Create new book object with unique ID
    const newBook: Book = {
      id: Date.now().toString(),
      title: this.title,
      author: this.author
    };

    // Get current books from local storage
    const books = this.getBooks();

    //Add a new book
    books.push(newBook);

    // Save updated books array to localstorage
    localStorage.setItem('books', JSON.stringify(books));

    //update components book array
    this.books = books;

    // reset form
    this.title = '';
    this.author = '';

    console.log("Book added to localstorage:", newBook);
  }

  getBooks(): Book[] {
    // get books from localstorage
    const booksJson = localStorage.getItem('books');

    //return parsed books or empty array if none exist
    return booksJson ? JSON.parse(booksJson) : [];
  }

  deleteBook(id: string) {
    // get current books
    let books = this.getBooks();

    //filter out book with matching ID
    books = books.filter(book => book.id !== id);

    //save filtered books back to localstorage
    localStorage.setItem('books', JSON.stringify(books));

    //update components books array
    this.books = books;

    console.log("Book deleted with ID:", id);
  }
}
