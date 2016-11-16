import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ICharacterEntry} from "../worker-data.service";

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.css']
})
export class SelectionScreenComponent implements OnInit {
  selectedCharacter: ICharacterEntry;
  title:Title;
  constructor(t:Title) {
    this.title = t;
  }

  ngOnInit() {
  }

  selectCharacter(character: ICharacterEntry): void {
    this.selectedCharacter = character;
    this.title.setTitle('We build '+character.name);
  }
}
