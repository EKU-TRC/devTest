import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { CodeService } from "./../code.service";

@Component({
  selector: "app-add-code",
  templateUrl: "./add-code.component.html",
  styleUrls: ["./add-code.component.css"],
})
export class AddCodeComponent implements OnInit, OnDestroy {
  addCodeForm: FormGroup;
  hasAddError = false;
  submitted = false;
  errorMsg = "";
  errorSub: Subscription;

  constructor(private codeService: CodeService) {}

  ngOnInit() {
    this.errorSub = this.codeService.error.subscribe((errorObject) => {
      this.hasAddError = errorObject["hasError"];
      this.errorMsg = errorObject["message"];
      console.log("this.hasAddError: ", this.hasAddError);
      if (!this.hasAddError) {
      console.log("Has no add error");
      this.addCodeForm.reset();
    }
    });
    this.addCodeForm = new FormGroup({
      fiscalYear: new FormControl(null, [
        Validators.required,
        this.validateYear.bind(this),
      ]),
      budgetCode: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      budgetTitle: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
    });
  }

  onSubmit() {
    this.codeService.createCode(this.addCodeForm.value);
    this.submitted = true;
    if (!this.hasAddError) {
      this.addCodeForm.reset();
    }
  }

  onClearError() {
    this.hasAddError = false;
    this.errorMsg = "";
  }

  onClearAlert() {
    this.submitted = false;
  }

  validateYear(control: FormControl): { [s: string]: boolean } {
    if (!control.value) {
      return null;
    }
    const convertedYear = +control.value;
    if (!Number.isInteger(convertedYear)) {
      return { invalidYear: true };
    }
    if (convertedYear < 1970 || convertedYear > 2099) {
      return { invalidYear: true };
    }
    return null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
