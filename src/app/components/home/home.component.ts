import { Component, OnInit } from "@angular/core";
import { AuthorService } from "src/app/services/author.service";
import { Author } from "src/app/interfaces/author";
import { async } from "@angular/core/testing";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  authors: Author[] = [];
  constructor(private authorService: AuthorService, private router: Router) {}

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors = async () => {
    let response = await this.authorService.getAuthors().toPromise();
    this.authors = response;
  };

  deleteAuthor(id: number) {
    this.authorService.deleteAuthor(id).subscribe(
      (response) => {
        this.getAuthors();
        console.log("The author was deleted successfully");
      },
      (error) => console.log(error)
    );
  }

  redirectToDetails(id: number) {
    this.router.navigate(["/details", id]);
  }
}
