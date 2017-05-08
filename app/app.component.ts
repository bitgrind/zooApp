import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Angular2 CLI</h1>
  <h2>{{firstTask.description}}</h2>
  </div>`
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

    firstTask = {
      description: "Build dope-ass apps"
    }

}

export class Task {
  public done: boolean = false;
  constructor(public description: string){
    
  }

}
