import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAuthorsComponent } from './liste-authors.component';

describe('ListeAuthorsComponent', () => {
  let component: ListeAuthorsComponent;
  let fixture: ComponentFixture<ListeAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAuthorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
