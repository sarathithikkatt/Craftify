import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodworkComponent } from './woodwork.component';

describe('WoodworkComponent', () => {
  let component: WoodworkComponent;
  let fixture: ComponentFixture<WoodworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
