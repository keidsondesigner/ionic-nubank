import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBottomOffcanvasComponent } from './modal-bottom-offcanvas.component';

describe('ModalBottomOffcanvasComponent', () => {
  let component: ModalBottomOffcanvasComponent;
  let fixture: ComponentFixture<ModalBottomOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBottomOffcanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBottomOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
