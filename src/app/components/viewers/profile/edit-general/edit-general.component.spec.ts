import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneralComponent } from './edit-general.component';

describe('EditGeneralComponent', () => {
  let component: EditGeneralComponent;
  let fixture: ComponentFixture<EditGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
