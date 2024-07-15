import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { ListeAuthorsComponent } from './liste/liste-authors/liste-authors.component';
import { ListeBooksComponent } from './liste/liste-books/liste-books.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateAuthorComponent } from './liste/update-author/update-author.component';
import { CreateAuthorComponent } from './liste/create-author/create-author.component';
import { CreateBookComponent } from './liste/create-book/create-book.component';
import { UpdateBookComponent } from './liste/update-book/update-book.component';

export const routes: Routes = [

  {path: '', redirectTo: 'liste', pathMatch: 'full'},

  {path: 'liste', component: ListeComponent},

  {path: 'auteurs', component: ListeAuthorsComponent},

  {path: 'livres', component: ListeBooksComponent},

  {path: 'auteurs/:id', component: UpdateAuthorComponent},

  {path: 'creerauteur', component: CreateAuthorComponent},

  {path: 'books/:id', component: UpdateBookComponent},

  {path: 'creerlivre', component: CreateBookComponent},

  {path: '**', component: NotfoundComponent}

];
