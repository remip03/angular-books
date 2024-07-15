import { AuthorService } from './../../services/author.service';
import { Component, Input } from '@angular/core';
import Author from '../../models/author.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-author',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-author.component.html',
  styleUrl: './detail-author.component.css'
})
export class DetailAuthorComponent{

  @Input() auteur!: any;

  constructor(
    private authorService: AuthorService
  ){}

  deleteAuteur(){
    this.authorService.deleteAuthor(this.auteur.id);
  }

}
