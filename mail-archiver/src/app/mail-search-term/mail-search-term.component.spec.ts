import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSearchTermComponent } from './mail-search-term.component';

describe('MailSearchTermComponent', () => {
  let component: MailSearchTermComponent;
  let fixture: ComponentFixture<MailSearchTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailSearchTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailSearchTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
