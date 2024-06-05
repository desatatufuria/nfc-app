import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcWriterComponent } from './nfc-writer.component';

describe('NfcWriterComponent', () => {
  let component: NfcWriterComponent;
  let fixture: ComponentFixture<NfcWriterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NfcWriterComponent]
    });
    fixture = TestBed.createComponent(NfcWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
