import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'edit-animal',
  template:`
    <div *ngIf="childSelectedAnimal">
      <h2>Selected Animal: {{childSelectedAnimal.name}}</h2>
      <div>
        <label>Change Name</label>
        <input [(ngModel)]="childSelectedAnimal.name">
      </div>
      <div>
        <label>Change Age</label>
        <input [(ngModel)]="childSelectedAnimal.age">
      </div>
      <div>
        <label>Change Caretakers</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers">
      </div>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}