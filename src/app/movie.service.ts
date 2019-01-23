import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private http: HttpClient
  ) { }

  getMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        catchError(this.handleError('getMovies', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
getMovie(id: number): Observable<Movie> {
  const url = `${this.moviesUrl}/${id}`;
  return this.http.get<Movie>(url).pipe(
    catchError(this.handleError<Movie>(`getHero id=${id}`))
  );
}

  

  searchMovies(term: string): Observable<Movie[]> {
    if(!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    return this.http.get<Movie[]>(`${this.moviesUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }

  private moviesUrl = 'api/movies';

 

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}