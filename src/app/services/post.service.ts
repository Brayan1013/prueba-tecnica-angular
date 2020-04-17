import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../interfaces/post";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostService {
  urlBase = "http://localhost:8080/api/v1/authors";
  constructor(private http: HttpClient) {}

  makeAPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.urlBase, post);
  }
}
