import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pokemonName: string = '';

  constructor(private router: Router) { }

  searchPokemon() {
    if (this.pokemonName) {
      this.router.navigate(['/pokemon'], { queryParams: { name: this.pokemonName.toLowerCase() } });
    }
  }
}
