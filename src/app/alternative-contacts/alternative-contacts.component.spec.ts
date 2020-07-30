import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeContactsComponent } from './alternative-contacts.component';

describe('AlternativeContactsComponent', () => {
  let component: AlternativeContactsComponent;
  let fixture: ComponentFixture<AlternativeContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
