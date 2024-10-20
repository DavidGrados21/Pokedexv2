import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemosDetailComponent } from './pokemos-detail.component';

describe('PokemosDetailComponent', () => {
  let component: PokemosDetailComponent;
  let fixture: ComponentFixture<PokemosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemosDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
