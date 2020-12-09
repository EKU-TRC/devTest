import { Component } from '@angular/core';
import { Budget } from './budget';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  model = new Budget(100, 2020, "19234", "tester budget")

  onSubmit() {
    console.log(this.model)
  }

}
