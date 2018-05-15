import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresCardComponent } from './stores-card.component';

describe('StoresCardComponent', () => {
  let component: StoresCardComponent;
  let fixture: ComponentFixture<StoresCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
