import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblesComponent } from './bibles.component';

describe('BiblesComponent', () => {
  let component: BiblesComponent;
  let fixture: ComponentFixture<BiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
