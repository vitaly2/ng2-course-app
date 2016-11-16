import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character-name',
  templateUrl: './character-name.component.html',
  styleUrls: ['./character-name.component.css']
})
export class CharacterNameComponent {
  @Output() formValid = new EventEmitter<boolean>();
  charNameGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.charNameGroup = this.fb.group({
      charname: ['', Validators.required]
    });
    const nameChanges: Observable<string> = this.charNameGroup.controls['charname'].valueChanges;
    nameChanges.subscribe(val => {
      console.log('name: ', val);
      this.formValid.emit(this.charNameGroup.controls['charname'].valid);
    });
  }
}
