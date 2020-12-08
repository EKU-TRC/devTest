import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CodeService } from "./../code.service";

@Component({
  selector: "app-add-code",
  templateUrl: "./add-code.component.html",
  styleUrls: ["./add-code.component.css"],
})
export class AddCodeComponent implements OnInit {
  addCodeForm: FormGroup;

  constructor(private codeService: CodeService) {}

  ngOnInit() {
    this.addCodeForm = new FormGroup({
      // budgetCodeId: new FormControl(null, [Validators.required]),
      fiscalYear: new FormControl(null, [
        Validators.required,
        this.validateYear.bind(this),
      ]),
      budgetCode: new FormControl(null, [Validators.required]),
      budgetTitle: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    // this.codeService.createCode();
    this.addCodeForm.reset();
  }

  validateYear(control: FormControl): { [s: string]: boolean } {
    const convertedYear = Number(control.value);
    if (convertedYear < 1970 && convertedYear > 2099) {
      return { 'invalidYear': true };
    }
    return null;
  }
}
