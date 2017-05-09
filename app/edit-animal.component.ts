import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'edit-animal',
  template:`
    <div *ngIf="childSelectedAnimal">
      <h2>Selected Animal: {{selectedAnimal.name}}</h2>
      <div>
        <label>Change Name</label>
        <input [(ngModel)]="selectedAnimal.name">
      </div>
      <div>
        <label></label>
        <input type="radio" [(ngModel)]="selectedAnimal.species" [value]="cat">Cat
        <input type="radio" [(ngModel)]="selectedAnimal.species" [value]="bear">Bear
        <input type="radio" [(ngModel)]="selectedAnimal.species" [value]="wolf">Wolf
      </div>
      <button (click)="doneButtonClickedSender()">Done</button>
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