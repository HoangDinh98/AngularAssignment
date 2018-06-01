import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
// import { STARS } from './mock-stars';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class BookService {

  private booksUrl = 'https://5aebce23046d7b0014fb6e75.mockapi.io/books';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  // getStars(): Observable<Star[]> {
  //   return of(STARS);
  // }

  /** GET heroes from the server */
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(book => this.log(`fetched books`)),
        catchError(this.handleError('getBooks', []))
      );
  }

  getBooks(page: number, itemPerpage: number): Observable<Book[]> {
    const url = `${this.booksUrl}?p=${page}&l=${itemPerpage}`;
    console.log(url);
    return this.http.get<Book[]>(url)
      .pipe(
        tap(book => this.log(`fetched books`)),
        catchError(this.handleError('getBooks', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;

    console.log(url);

    return this.http.get<Book>(url).pipe(
      tap(_ => this.log(`fetched book id=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateBook(book: Book): Observable<any> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;

    return this.http.put(url, book, httpOptions).pipe(
      tap(_ => this.log(`updated book id=${book.id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }

  /** POST: add a new hero to the server */
  addBook(book: Book): Observable<Book> {
    console.log("In service " + book);
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
      tap((star: Book) => this.log(`added book  id=${book.id}`)),
      catchError(this.handleError<Book>('addBook'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteBook(book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;

    return this.http.delete<Book>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted book id=${id}`)),
      catchError(this.handleError<Book>('deleteBook'))
    );
  }


  /* GET heroes whose name contains search term */
  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    // SEARCH TRUE KEYWORD
    // return this.http.get<Star[]>(`http://5aebce23046d7b0014fb6e75.mockapi.io/stars?search=${term}`).pipe(
    //   tap(_ => this.log(`found star matching "${term}"`)),
    //   catchError(this.handleError<Star[]>('searchStars', []))
    // );

    // SEARCH FULL TEXT
    return this.http.get<Book[]>(`http://5aebce23046d7b0014fb6e75.mockapi.io/books?filter=${term}`).pipe(
      tap(_ => this.log(`found star matching "${term}"`)),
      catchError(this.handleError<Book[]>('searchBooks', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('BookService: ' + message);
  }

}
