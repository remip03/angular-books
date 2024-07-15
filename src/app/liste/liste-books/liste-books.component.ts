import { Component, Input, OnInit } from '@angular/core';
import { DetailBookComponent } from '../detail-book/detail-book.component';
import { BookService } from '../../services/book.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-books',
  standalone: true,
  imports: [DetailBookComponent, RouterLink, CommonModule],
  templateUrl: './liste-books.component.html',
  styleUrl: './liste-books.component.css'
})
export class ListeBooksComponent implements OnInit {

  @Input() livres: any[] = []

  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res) => {this.livres = res})
  }

}
