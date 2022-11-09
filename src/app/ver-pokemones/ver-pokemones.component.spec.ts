import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPokemonesComponent } from './ver-pokemones.component';

describe('VerPokemonesComponent', () => {
  let component: VerPokemonesComponent;
  let fixture: ComponentFixture<VerPokemonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPokemonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
