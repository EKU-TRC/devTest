import { Component } from '@angular/core';
import { Budget } from './budget';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  model = new Budget(100, 2020, "19234", "tester budget")
  
  constructor(public http: HttpService) { }

  onSubmit() {
    console.log(this.model)
    this.http.addBudget(this.model).subscribe(data => {
      console.log(data)
    })
  }
}
