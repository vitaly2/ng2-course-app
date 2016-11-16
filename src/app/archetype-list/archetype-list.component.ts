import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {ICharacterEntry, WorkerDataService} from "../worker-data.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-archetype-list',
  templateUrl: './archetype-list.component.html',
  styleUrls: ['./archetype-list.component.css'],
  providers: [WorkerDataService]
})
export class ArchetypeListComponent implements OnInit {
  characters$: Observable<ICharacterEntry[]>;
  @Input() formValid: boolean;
  @Output() selectChar = new EventEmitter<ICharacterEntry>();

  constructor(private wds: WorkerDataService) {
    this.characters$ = wds.getArchetypes();
  }

   ngOnInit() {
  }
}
