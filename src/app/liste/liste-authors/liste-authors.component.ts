import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailAuthorComponent } from '../detail-author/detail-author.component';
import { AuthorService } from '../../services/author.service';
import Author from '../../models/author.model';
import { UpdateAuthorComponent } from '../update-author/update-author.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-authors',
  standalone: true,
  imports: [DetailAuthorComponent, UpdateAuthorComponent, RouterLink],
  templateUrl: './liste-authors.component.html',
  styleUrl: './liste-authors.component.css'
})
export class ListeAuthorsComponent implements OnInit {


  @Input() auteurs: any[] = []

  constructor(
    private authorService: AuthorService
  ){}

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((res) => {this.auteurs = res})
  }

}
