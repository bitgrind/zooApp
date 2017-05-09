import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li [class]="priorityFeed(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}}<button (click)="editNameHasBeenClicked(currentAnimal)">Edit Name</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editClickSender = new EventEmitter();

  priorityFeed(currentAnimal){
    console.log("you have fed the beast name: " + currentAnimal.name);
  }

  editNameHasBeenClicked(animalToEdit: Animal) {
    console.log(animalToEdit);
    this.editClickSender.emit(animalToEdit);
  }
}