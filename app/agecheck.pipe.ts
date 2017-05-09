import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "AgeCheck",
  pure: false

})

export class AgeCheck implements PipeTransform {
  transform(input: Animal[], desiredAge) {
    var output: Animal[] = [];
    console.log("input: "+input);
    console.log("desired age: "+desiredAge);
    if(desiredAge === "youngAnimals"){
      console.log(input);
      for(var i = 0; i < input.length; i++) {
        if(input[i].age < 2){
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredAge === "adultAnimals"){
      console.log(input);
      for(var i = 0; i < input.length; i++) {
        if(input[i].age < 10 && input[i].age > 2){
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredAge === "oldAnimals"){
      console.log(input);
      for(var i = 0; i < input.length; i++) {
        if(input[i].age > 10){
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredAge === "allAnimals"){
      return input;
    }
  }
}