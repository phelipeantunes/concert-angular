import { Person } from './person.models';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  backendURL = "http://localhost:3000/people"

  constructor(private alertBar: MatSnackBar, private http: HttpClient) { }
  showAlert(alert: string, isError: boolean = false): void {
    this.alertBar.open(alert, 'X', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['pop-up-nok'] : ['pop-up-ok']
    })
  }
  register(person: Person): Observable<Person> {
    return this.http.post<Person>(this.backendURL, person).pipe(
      map(p => p),
      catchError(e => this.errorHandler(e))
    );
  }
  errorHandler(e: any): Observable<any> {
    this.showAlert('Ocorreu um erro!', true)
    return EMPTY
  }
  read(): Observable<Person[]> {
    return this.http.get<Person[]>(this.backendURL).pipe(
      map(p => p),
      catchError(e => this.errorHandler(e))
    );
  }
  readById(id: string): Observable<Person> {
    const url = `${this.backendURL}/${id}`
    return this.http.get<Person>(url).pipe(
      map(p => p),
      catchError(e => this.errorHandler(e))
    );
  }
  update(person: Person): Observable<Person> {
    const url = `${this.backendURL}/${person.id}`
    return this.http.put<Person>(url, person).pipe(
      map(p => p),
      catchError(e => this.errorHandler(e))
    );
  }
  delete(id: string): Observable<Person> {
    const url = `${this.backendURL}/${id}`
    return this.http.delete<Person>(url).pipe(
      map(p => p),
      catchError(e => this.errorHandler(e))
    );
  }
}