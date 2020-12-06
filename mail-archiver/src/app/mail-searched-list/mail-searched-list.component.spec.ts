import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSearchedListComponent } from './mail-searched-list.component';

describe('MailSearchedListComponent', () => {
  let component: MailSearchedListComponent;
  let fixture: ComponentFixture<MailSearchedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailSearchedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailSearchedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
