import { StarWarsService } from './../star-wars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters: any = []
  activatedRoute: ActivatedRoute
  starWarsService: StarWarsService

  constructor(activatedRoute: ActivatedRoute, starWarsService: StarWarsService) {
    this.activatedRoute = activatedRoute
    this.starWarsService = starWarsService
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.starWarsService.getCharacters(params['side'])
      }
    )
  }
}
