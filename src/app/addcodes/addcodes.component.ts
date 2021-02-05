import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-addcodes',
  templateUrl: './addcodes.component.html',
  styleUrls: ['./addcodes.component.css']
})
export class AddcodesComponent implements OnInit {
  myform;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  //   this.apiService.addCodes(this.myform).subscribe(data=>{
  //     console.log(data);
  // });
  }

onSubmit(myform) {
  this.apiService.addCodes(myform.value).subscribe(data=>{
  console.log('Your form data : ', myform.value);
  alert('Thank you for your budget submission.');
})

}
}
