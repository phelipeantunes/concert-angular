import { Company } from './company.models';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  backendURL = "http://localhost:3000/company"

  constructor(private alertBar: MatSnackBar, private http: HttpClient) { }
  showAlert(alert: string, isError: boolean = false): void {
    this.alertBar.open(alert, 'X', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['pop-up-nok'] : ['pop-up-ok']
    })
  }
  register(company: Company): Observable<Company> {
    return this.http.post<Company>(this.backendURL, company).pipe(
      map(p => p),
      catchError(e => this.errorHandler(e))
    );
  }
  read(): Observable<Company[]> {
    return this.http.get<Company[]>(this.backendURL).pipe(
      map(p => p),
      catchError(e => this.errorHandler(e))
    );
  }
  readById(id: string): Observable<Company> {
    const url = `${this.backendURL}/${id}`
    return this.http.get<Company>(url).pipe(
      map(p => p),
      catchError(e => this.errorHandler(e))
    );
  }
  update(company: Company): Observable<Company> {
    const url = `${this.backendURL}/${company.id}`
    return this.http.put<Company>(url, company).pipe(
      map(p => p),
      catchError(e => this.errorHandler(e))
    );
  }
  delete(id: string): Observable<Company> {
    const url = `${this.backendURL}/${id}`
    return this.http.delete<Company>(url).pipe(
      map(p => p),
      catchError(e => this.errorHandler(e))
    );
  }
  errorHandler(e: any): Observable<any> {
    this.showAlert('Ocorreu um erro!', true)
    return EMPTY
  }
}
