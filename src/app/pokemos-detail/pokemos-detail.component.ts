import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemos-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemos-detail.component.html',
  styleUrl: './pokemos-detail.component.css'
})
export class PokemosDetailComponent {
  pokemon: any;
  pokemonName: string = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pokemonName = params['name'];
      if (this.pokemonName) {
        this.pokemonService.getPokemon(this.pokemonName).subscribe(data => {
          this.pokemon = data;
        });
      }
    });
  }

}
