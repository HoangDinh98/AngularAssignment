import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
// import { STARS } from './mock-stars';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class SignUpService {

    public user: User;
    results;

    private booksUrl = 'https://5aebce23046d7b0014fb6e75.mockapi.io/users';  // URL to web api

    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
    }

    /** GET hero by id. Will 404 if id not found */
    checkUniquedEmail(email: String): any {
        const url = `${this.booksUrl}/?filter=${email}`;
        console.log(url);
        // console.log(this.http.get<User>(url));

        let promise = new Promise((resolve, reject) => {
            this.http.get<User>(url)
                .toPromise()
                .then(
                    res => { // Success
                        // this.results = res.json().results;
                        this.results = res;
                        resolve(this.results);                // <===== changed this line
                        console.log("In service " + this.results);
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });
        return promise;
    }

    /** POST: add a new hero to the server */

    signUp(data: any): boolean {
        this.checkUniquedEmail(data.email).subscribe(user => this.user = user);
        console.log(this.user);

        // if (!this.checkUniquedEmail(data.email)) {
        //     // console.log(this.checkUniquedEmail(data.email).subscribe(user => this.user = user)); 
        //     this.addUser(data);
        //     return true;
        // }

        return false;
    }

    addUser(user: any): Observable<any> {
        console.log("Checked")
        return this.http.post<any>(this.booksUrl, user, httpOptions);
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
