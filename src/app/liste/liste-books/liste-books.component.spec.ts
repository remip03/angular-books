import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBooksComponent } from './liste-books.component';

describe('ListeBooksComponent', () => {
  let component: ListeBooksComponent;
  let fixture: ComponentFixture<ListeBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
