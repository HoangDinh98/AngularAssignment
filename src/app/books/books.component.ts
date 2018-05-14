import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books: Book[];

  // selectedStar: Star;

  ngOnInit() {
    this.getBooks();
  }

  // onSelect(star: Star): void {
  //   this.selectedStar = star;
  // }

  getBooks(): void {
    this.bookService.getBooks()
        .subscribe(books => this.books = books);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bookService.addBook({ name } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }

  delete(book: Book): void {
    this.books = this.books.filter(s => s !== book);
    this.bookService.deleteBook(book).subscribe();
  }

}
