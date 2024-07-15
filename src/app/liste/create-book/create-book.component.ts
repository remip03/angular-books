import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';
import Author from '../../models/author.model';
import { AuthorService } from '../../services/author.service';
import Book from '../../models/book.model';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit {

  bookCreate: FormGroup;
  validation: boolean = false;
  authors: Author[] = [];

  constructor(
    private formbuild: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ){
    this.bookCreate = this.formbuild.group({
      title: ['',Validators.required],
      coverText: ['',Validators.required],
      comment: ['',Validators.required],
      idAuthor: [null,[Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }

  createBook(): void {
    this.validation = true;
    if(this.bookCreate.invalid){
      return ;
    }

    const newBook: Book = this.bookCreate.value
    console.log(newBook)

    this.bookService.addBook(newBook).subscribe({
      next: () => {
        alert('Un nouveau livre a été ajouté.');
        this.router.navigate(['/livres'])
      },

      error: (error) =>{
        console.error('Ce livre n\'a pas été ajouté', error);
      }

    })
  }

  public get form(){
    return this.bookCreate.controls
  }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((res) => {this.authors = res})
  }

}
