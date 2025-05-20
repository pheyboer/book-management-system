import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  title: string = '';
  author: string = '';

  addBook() {
    // add logic for adding book
    console.log('book added', { title: this.title, author: this.author });
  }
}
