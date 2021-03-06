import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <animal-list [childAnimalList]="masterAnimalList" (editClickSender)="editName($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal("Cat", "Simba", 6, "cat food", "Portland", "Keith", "Male", "Petting", "Being Sprayed with water"),
    new Animal("Bear","Baloo", 5, "Salmon", "Sitka", "Dave", "Male", "Berries", "Loud Noises"),
    new Animal("Cat", "Shearkon", 8, "Gazel", "Jungle", "Moglie", "Male", "Naps", "Fire"),
    new Animal("Wolf", "Balto", 16, "Young Moose", "Anchorage", "Wild", "Male", "Running", "Beta Wolfs"),
    new Animal("Turtle", "Tommi", 1, "Lettus", "Hawaii", "Jim", "Female", "turtling", "Being on his back")
  ];


  editName(clickedAnimal) {
    console.log("animal recived for edit: "+clickedAnimal);
    this.selectedAnimal = clickedAnimal;
    console.log("selected animal set to: "+ JSON.stringify(this.selectedAnimal));
  }

  finishedEditing() {
    console.log("finished Editing");
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
