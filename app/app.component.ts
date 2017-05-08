import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Angular2 CLI</h1>
    <div>
      <ul>
        <li [class]="priorityFeed(currentAnimal)" *ngFor="let currentAnimal of animals">Beast: {{currentAnimal.name}}<button (click)="editName()">Edit!</button></li>
      </ul>
    </div>
    <div>
      <form>
        <h2>Selected: {{selectedAnimal.name}}</h2>
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
      </form>
    </div>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

    animals: Animal[] = [
      new Animal("Cat", "Simba"),
      new Animal("Bear","Baloo"),
      new Animal("Cat", "Shearkon"),
      new Animal("Wolf", "Balto"),
    ];

    selectedAnimal: Animal = this.animals[0];

    editName() {
      console.log("Change that name");
    }

    priorityFeed(currentAnimal){
      console.log("you have fed the beast name: " + currentAnimal.name);
    }

}

export class Animal {
  public done: boolean = false;
  constructor(public species: string, public name: string){

  }

}
