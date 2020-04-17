import { Component, OnInit } from "@angular/core";
import { Author } from "src/app/interfaces/author";
import { AuthorService } from "src/app/services/author.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"],
})
export class CreateUserComponent implements OnInit {
  author: Author = {
    name: null,
    userName: null,
    authorscol: null,
    email: null,
  };
  constructor(private authorService: AuthorService, private router: Router) {}

  ngOnInit() {}

  onSubmit(authForm: any) {
    this.authorService.saveAuthor(authForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/home"]);
      },
      (error) => console.log(error)
    );
  }
}
