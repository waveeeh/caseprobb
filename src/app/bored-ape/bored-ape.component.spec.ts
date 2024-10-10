import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredApeComponent } from './bored-ape.component';

describe('BoredApeComponent', () => {
  let component: BoredApeComponent;
  let fixture: ComponentFixture<BoredApeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoredApeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoredApeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
