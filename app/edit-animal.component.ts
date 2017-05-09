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
        <label></label>
        <input type="radio" [(ngModel)]="childSelectedAnimal.species" [value]="cat">Cat
        <input type="radio" [(ngModel)]="childSelectedAnimal.species" [value]="bear">Bear
        <input type="radio" [(ngModel)]="childSelectedAnimal.species" [value]="wolf">Wolf
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