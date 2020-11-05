import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordIndexComponent } from './word-index.component';

describe('WordIndexComponent', () => {
  let component: WordIndexComponent;
  let fixture: ComponentFixture<WordIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
