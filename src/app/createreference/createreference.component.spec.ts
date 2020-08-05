import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereferenceComponent } from './createreference.component';

describe('CreatereferenceComponent', () => {
  let component: CreatereferenceComponent;
  let fixture: ComponentFixture<CreatereferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatereferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatereferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
