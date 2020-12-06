import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailArchiverComponent } from './mail-archiver.component';

describe('MailArchiverComponent', () => {
  let component: MailArchiverComponent;
  let fixture: ComponentFixture<MailArchiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailArchiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailArchiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
