import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPokemonsComponent } from './add-pokemons.component';

describe('AddPokemonsComponent', () => {
  let component: AddPokemonsComponent;
  let fixture: ComponentFixture<AddPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
