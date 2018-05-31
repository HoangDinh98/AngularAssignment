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

  public bookName: any;
  public bookPrice: any;
  public bookContent: any;
  public image: string;

  constructor(
    private bookService: BookService,
    private location: Location,
    private cdr: ChangeDetectorRef,
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

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  add(name: string, price: number, content: string, image: string): void {
    name = name.trim();
    content = content.trim();
    image = './assets/images/books/book' + this.getRandomArbitrary(1, 9) + '.jpg';

    if (!name) { return; }

    this.bookService.addBook({ name, price, content, image } as Book)
      .subscribe(() => this.goBack());
  }

}
