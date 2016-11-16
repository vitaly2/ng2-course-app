import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ICharacterEntry} from "../worker-data.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-archetype-list-display',
    templateUrl: './archetype-list-display.component.html',
    styleUrls: ['./archetype-list-display.component.css']
})
export class ArchetypeListDisplayComponent implements OnInit {
    @Input() characters: Observable<ICharacterEntry[]>;
    @Input() formValid: boolean;
    @Output() selectChar = new EventEmitter<ICharacterEntry>();

    constructor() {
    }

    ngOnInit() {
    }
}
