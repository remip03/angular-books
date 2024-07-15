import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-detail-book',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-book.component.html',
  styleUrl: './detail-book.component.css'
})
export class DetailBookComponent {

  @Input() book!: any;

  constructor(
    private bookservice: BookService
  ){  }
  deleteLivre(){
    this.bookservice.deleteBook(this.book.id);
    alert('Données supprimées');
  }

}
