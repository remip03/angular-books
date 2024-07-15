import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Author from '../../models/author.model';
import { ActivatedRoute, Router, RouterLink} from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-author',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './update-author.component.html',
  styleUrl: './update-author.component.css'
})
export class UpdateAuthorComponent implements OnInit{

  authorUpdate: FormGroup;
  auteurID!: number;
  validation: boolean = false;

  constructor(
    private formbuild: FormBuilder,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.authorUpdate = this.formbuild.group({
      FirstName:['', Validators.required],
      LastName:['', Validators.required]
    })
  }


  changeAuthor(): void{
    this.validation = true;
    if(this.authorUpdate.invalid){
      return ;
    }
    if(this.auteurID){

      const updatedAuthor = {...this.authorUpdate.value, id: this.auteurID};

      this.authorService.updateAuthor(updatedAuthor).subscribe({
        next: () => {
          alert('Les données de l\'auteur ont été modifiées avec succès.');
          this.router.navigate(['/auteurs'])
        },
        error: (error) =>{
          console.error('Echec de la modification', error);
        }
      });
    }
  }

  public get form(){
    return this.authorUpdate.controls
  }

  ngOnInit(): void {
    this.auteurID = Number(this.route.snapshot.paramMap.get('id'));
    if (this.auteurID){
      this.authorService.getAuthor(this.auteurID).subscribe((data: Author) => this.authorUpdate.patchValue(data))
    }
  }

}
