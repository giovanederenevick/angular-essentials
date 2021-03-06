import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private characters = [
    {
      name: 'Luke Skywalker',
      side: ''
    },
    {
      name: 'Darth Vader',
      side: ''
    }
  ]

  private logService: LogService
  charactersChanged = new Subject<void>()
  http: HttpClient

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService
    this.http = http
  }

  fetchCharacters() {
    this.http.get('https://swapi.dev/api/people/').subscribe(
      (response: any) => {
        this.characters = response.results.map((char: {name: any}) => {
          return {name: char.name, side: ''}
        })
        this.charactersChanged.next()
      }
    )
  }

  getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice()
    }

    return this.characters.filter((char) => {
      return char.side === chosenList
    })
  }

  onSideChosen(charInfo: any) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name
    })

    this.characters[pos].side = charInfo.side
    this.charactersChanged.next()
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side)
  }

  addCharacter(name: string, side: string) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name
    })

    if (pos !== -1) {
      return
    }

    const newChar = {name: name, side: side}
    this.characters.push(newChar)
  }
}
