import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemsPerPage = 5;
  totalItems = 100;
  page = 1;
  previousPage = 1;

  books: Book[] = [];
  allbooks: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
    this.getBooks();
  }

  ngDoCheck() {
    this.totalItems = this.allbooks.length;
    // console.log(this.totalItems);
  }

  getAllBooks(): void {
    this.bookService.getAllBooks().subscribe(allbooks => this.allbooks = allbooks);
  }

  getBooks(): void {
    const size = this.itemsPerPage;
    this.bookService.getBooks(this.page, size).subscribe(books => this.books = books);
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.getBooks();
    }
  }

  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book).subscribe();
  }

}
