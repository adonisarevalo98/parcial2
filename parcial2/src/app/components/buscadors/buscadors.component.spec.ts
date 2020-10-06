import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorsComponent } from './buscadors.component';

describe('BuscadorsComponent', () => {
  let component: BuscadorsComponent;
  let fixture: ComponentFixture<BuscadorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
