import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-budgetcodes',
  templateUrl: './budgetcodes.component.html',
  styleUrls: ['./budgetcodes.component.css']
})
export class BudgetcodesComponent implements OnInit {
  data;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCodes().subscribe((data)=>{
      console.log(data);
      this.data = data['data'];
  });
}
}