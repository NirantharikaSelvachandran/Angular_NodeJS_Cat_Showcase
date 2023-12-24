import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsViewComponent } from './cats-view.component';

describe('CatsViewComponent', () => {
  let component: CatsViewComponent;
  let fixture: ComponentFixture<CatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
