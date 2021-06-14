import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MingAngularTestLibComponent } from './ming-angular-test-lib.component';

describe('MingAngularTestLibComponent', () => {
  let component: MingAngularTestLibComponent;
  let fixture: ComponentFixture<MingAngularTestLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MingAngularTestLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MingAngularTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
