import { StarWarsService } from './star-wars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private starWarsService: StarWarsService

  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService
  }

  ngOnInit(): void {
    this.starWarsService.fetchCharacters()
  }
}
