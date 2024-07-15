import { Component, OnInit } from '@angular/core';
import { ListeAuthorsComponent } from './liste-authors/liste-authors.component';
import { ListeBooksComponent } from './liste-books/liste-books.component';
import Author from '../models/author.model';
import Book from '../models/book.model';
import { BookService } from '../services/book.service';
import { AuthorService } from '../services/author.service';


@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [ListeAuthorsComponent,ListeBooksComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {

  auteurs: Author[] = [];
  livres: Book[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService
  ){}


  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res) => {this.livres = res})
    this.authorService.getAuthors().subscribe((res) => {this.auteurs = res})

  }

}
