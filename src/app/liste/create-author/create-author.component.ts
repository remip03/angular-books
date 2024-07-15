import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-create-author',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './create-author.component.html',
  styleUrl: './create-author.component.css'
})
export class CreateAuthorComponent {

  authorCreate: FormGroup;
  validation: boolean = false;

  constructor(
    private formbuild: FormBuilder,
    private authorService: AuthorService,
    private router: Router
  ){
    this.authorCreate = this.formbuild.group({
      FirstName:['', Validators.required],
      LastName:['', Validators.required]
    })
  }

  createAuthor(): void {

    this.validation = true;
    if(this.authorCreate.invalid){
      return ;
    }
    const newAuthor = this.authorCreate.value;

    this.authorService.addAuthor(newAuthor).subscribe({
      next: () => {
        alert('Un(e) nouvel(le) auteur(e) a été ajouté(e).');
        this.router.navigate(['/auteurs'])
      },

      error: (error) =>{
        console.error('Echec de l\'ajout à la liste', error);
      }
    })

  }

  public get form(){
    return this.authorCreate.controls
  }

}
