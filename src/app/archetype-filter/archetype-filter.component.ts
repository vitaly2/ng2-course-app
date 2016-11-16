import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archetype-filter',
  templateUrl: './archetype-filter.component.html',
  styleUrls: ['./archetype-filter.component.css']
})
export class ArchetypeFilterComponent implements OnInit {
  sex: string='all';

  constructor() { }

  ngOnInit() {
  }

  selectSex(sex: string): void {
    this.sex = sex;
  }
  classForSexBtn(sex: string): string {
    if (this.sex == sex )
      return 'active';
    return '';
  }
}
