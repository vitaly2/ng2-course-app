import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {ICharacterEntry} from "../worker-data.service";

@Component({
  selector: 'app-archetype-card',
  templateUrl: './archetype-card.component.html',
  styleUrls: ['./archetype-card.component.css']
})
export class ArchetypeCardComponent implements OnInit {
  @Input() character: ICharacterEntry;
  @Input() formValid: boolean;
  @Output() selectChar = new EventEmitter<ICharacterEntry>();
  constructor() { }

  ngOnInit() {
  }


  classForSex(sex: string): string {
    return 'sex-'+(sex ? sex.toLowerCase() : 'unknown');
  }
}
