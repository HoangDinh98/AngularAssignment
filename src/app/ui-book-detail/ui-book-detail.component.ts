import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ui-book-detail',
  templateUrl: './ui-book-detail.component.html',
  styleUrls: ['./ui-book-detail.component.css']
})
export class UiBookDetailComponent implements OnInit {

  books: Book[] = [];
  book = new Book();

  constructor(
    private route: ActivatedRoute,    
    private bookService: BookService,
    private cdr: ChangeDetectorRef,    
  ) { }

  ngOnInit() {
    this.getBook();
    this.getBooks();
  }
  // ngAfterViewChecked() {
  //   //your code to update the model
  //   this.cdr.detectChanges();
  // }
  
  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  getBooks(): void {
    this.bookService.getBooks(1, 4).subscribe(books => this.books = books);
  }

}
