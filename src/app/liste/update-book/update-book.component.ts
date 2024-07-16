import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Book from '../../models/book.model';
import { CommonModule } from '@angular/common';
import Author from '../../models/author.model';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit {

  bookUpdate: FormGroup;
  bookID!: number;
  validation: boolean = false;
  authors: Author[] = [];

  constructor(
    private formbuild: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.bookUpdate = this.formbuild.group({
      title: ['',Validators.required],
      coverText: ['',Validators.required],
      comment: ['',Validators.required],
      idAuthor: [null,[Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }

  changeBook(): void{

    this.validation = true;
    if(this.bookUpdate.invalid){
      return ;
    }

    if(this.bookID){
      const updatedBook = {...this.bookUpdate.value, id: this.bookID};
      this.bookService.updateBook(updatedBook).subscribe({
        next: () => {
          alert('Les données du livre ont été modifiées avec succès.');
          this.router.navigate(['/livres'])
        },
        error: (error) =>{
          console.error('Echec de la modification', error);
        }
      });
    }

  }

  public get form(){
    return this.bookUpdate.controls
  }

  ngOnInit(): void {
    this.bookID = Number(this.route.snapshot.paramMap.get('id'));
    if (this.bookID){
      this.bookService.getBook(this.bookID).subscribe((data: Book) => this.bookUpdate.patchValue(data))
    }
  }

}
