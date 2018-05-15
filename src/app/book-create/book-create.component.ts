import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private location: Location,    
    private cdr: ChangeDetectorRef
  ) { }

  books: Book[] = [];


  ngOnInit() {
  }

  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }

  goBack(): void {
    this.location.back();
  }

  add(name: string, price: number, content: string): void {
    name = name.trim();
    content = content.trim();

    if (!name) { return; }

    this.bookService.addBook({ name, price, content } as Book)
      .subscribe(() => this.goBack());
  }

}
