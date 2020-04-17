import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Author } from "../interfaces/author";

@Injectable({
  providedIn: "root",
})
export class AuthorService {
  urlBase: string = "http://localhost:8080/api/v1/authors";
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<any> {
    return this.http.get<any>(this.urlBase);
  }

  getAuthor(id: number): Observable<Author> {
    let urlGetAuthorById = `${this.urlBase}/${id}`;
    return this.http.get<Author>(urlGetAuthorById);
  }

  saveAuthor(author: Author): Observable<any> {
    return this.http.post<any>(this.urlBase, author);
  }

  deleteAuthor(id: number): Observable<any> {
    let urlDelete = `${this.urlBase}/${id}`;
    return this.http.delete(urlDelete);
  }
}
