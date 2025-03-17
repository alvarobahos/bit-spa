import { Component, inject } from '@angular/core';
import { PokeapiService } from '../../../services/pokeapi.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-pokeapi',
  imports: [],
  templateUrl: './pokeapi.component.html',
  styleUrl: './pokeapi.component.css',
})
export class PokeapiComponent implements OnInit {
  pokeapiService = inject(PokeapiService);

  pokemons: any;

  ngOnInit(): void {
    this.obtenerPokemons();
  }

  obtenerPokemons(): void {
    this.pokeapiService.getPokemons().subscribe((respuesta: any) => {
      this.pokemons = respuesta.results;
      this.pokemons.forEach((pokemon: any) => {
        this.pokeapiService
          .getPokemonDetails(pokemon.url)
          .subscribe((details: any) => {
            pokemon.image = details.sprites.front_default;
            //console.log('Detalles del pokemon', pokemon.name, pokemon.image);
          });
      });
      //console.log(this.pokemons);
    });
  }
}
