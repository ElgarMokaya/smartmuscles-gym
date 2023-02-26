import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {

  trainings :any[]=[
    {
      "icon":"fitness_center",
      "task":"First Training"
    },
    {
      "icon":"fitness_center",
      "task":"Second Training"
    },
    {
      "icon":"fitness_center",
      "task":"Third Training"
    },
    
      {
        "icon":"fitness_center",
        "task":"Fourth Training"
      }
    
  ]

}
