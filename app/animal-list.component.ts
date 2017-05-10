import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="form-control">
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals Under 2</option>
      <option value="adultAnimals">Adult Animals Over 2-10</option>
      <option value="oldAnimals">Old Animals Over 10</option>
    </select>
  </div>
  <ul class="row">
    <li class="col-md-12" *ngFor="let currentAnimal of childAnimalList | AgeCheck:filterByAge">
      <span class="animal-name">
        {{currentAnimal.name}}
      </span>
      <span class="animal-species">
        {{currentAnimal.species}}
      </span>
      <span class="animal-age">
        {{currentAnimal.age}}
      </span>
      <span class="animal-diet">
        {{currentAnimal.diet}}
      </span>
      <span class="animal-location">
        {{currentAnimal.location}}
      </span>
      <span class="animal-caretakers">
        {{currentAnimal.caretakers}}
      </span>
      <span class="animal-sex">
        {{currentAnimal.sex}}
      </span>
      <span class="animal-likes">
        {{currentAnimal.likes}}
      </span>
      <span class="animal-dislikes">
        {{currentAnimal.dislikes}}
      </span>
      <button class="animal-edit" (click)="editNameHasBeenClicked(currentAnimal)">Edit Animal</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editClickSender = new EventEmitter();

  filterByAge: number = 10;

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editNameHasBeenClicked(animalToEdit: Animal) {
    console.log("edit animal" + animalToEdit);
    this.editClickSender.emit(animalToEdit);
  }
}