import { Component, OnInit, Input, ViewChild, ChangeDetectorRef, ComponentFactoryResolver } from '@angular/core';
import { Book } from '../book';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from '../book.service';
import { nextTick } from 'q';
// import { BookDirective } from '../book.directive';
import { EmptyBook } from './mock-book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  @Input() emptyBook: EmptyBook;

  // @ViewChild(BookDirective) bookHost: BookDirective;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private cdr: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
      this.getBook();
  }

  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }

  // createBook(): void {
  //   let emptyBook = this.emptyBook;
    
  //   let componentFactory = this.componentFactoryResolver.resolveComponentFactory(emptyBook.component);

  //   let viewContainerRef = this.bookHost.viewContainerRef;
  //   viewContainerRef.clear();
  //   let componentRef = viewContainerRef.createComponent(componentFactory);
  // }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.bookService.updateBook(this.book)
      .subscribe(() => this.goBack());
  }

}
