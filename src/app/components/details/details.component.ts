import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { async } from "@angular/core/testing";
import { AuthorService } from "src/app/services/author.service";
import { Author } from "src/app/interfaces/author";
import { Post } from "src/app/interfaces/post";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  author: Author;
  post: Post = {
    author: null,
    content: null,
    likes: null,
    title: null,
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private authorService: AuthorService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.authorService.getAuthor(params["id"]).subscribe(
        (response) => {
          console.log(response);

          this.author = response;
        },
        (error) => console.log(error)
      );
    });
  }
}
