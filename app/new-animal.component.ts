import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:`
    <div id="newAnimal">
      <h1>New Animal</h1>
      <div class="control-form">
        <label>Enter Name</label>
        <input class="form-input" #newName>
      </div>
      <div class="control-form">
        <label>Species</label>
        <select #newSpecies>
          <option value="large cat">Large Cat</option>
          <option value="bear">Bear</option>
          <option value="wolf">Wolf</option>
        </select>
      </div>
      <div class="control-form">
        <label>Age</label>
        <input #newAge>
      </div>
      <div class="control-form">
        <label>Diet</label>
        <input #newDiet>
      </div>
      <div class="control-form">
        <label>Location</label>
        <input #newLocation>
      </div>
      <div class="control-form">
        <label>Caretakers</label>
        <input #newCaretakers>
      </div>
      <div class="control-form">
        <label>Sex</label>
        <select #newSex>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="control-form">
        <label>Likes</label>
        <input #newLikes>
      </div>
      <div class="control-form">
        <label>Dislikes</label>
        <input #newDislikes>
      </div>
      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.values)">Add</button>
    </div>
  `
})

  export class NewAnimalComponent {
    @Output() newAnimalSender = new EventEmitter();

    submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string) {
      var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
      console.log("new animal to add" + JSON.stringify(newAnimalToAdd));
      this.newAnimalSender.emit(newAnimalToAdd);
    }
}
