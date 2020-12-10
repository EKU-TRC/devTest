import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { CodeService } from "./../code.service";

@Component({
  selector: "app-add-code",
  templateUrl: "./add-code.component.html",
  styleUrls: ["./add-code.component.css"],
})
export class AddCodeComponent implements OnInit {
  addCodeForm: FormGroup;
  hasAddError = false;
  errorMsg = "";
  errorSub: Subscription;

  constructor(private codeService: CodeService) {}

  ngOnInit() {
    this.errorSub = this.codeService.error.subscribe((errorObject) => {
      console.log(errorObject);
      this.hasAddError = errorObject["hasError"];
      this.errorMsg = errorObject["message"];
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
    console.log("Error message when onSubmit", this.errorMsg);
    if (!this.hasAddError) {
      console.log("Has no add error");
      this.addCodeForm.reset();
    }
    // console.log(this.codeService.operationMessage);
    // if (this.codeService.operationStatus === "Success") {
    //   this.hasAddError = false;
    //   this.errorMsg = "";
    //   this.addCodeForm.reset();
    // } else {
    //   this.hasAddError = true;
    //   this.errorMsg = this.codeService.operationMessage;
    // }
  }

  onClearError() {
    this.hasAddError = false;
    this.errorMsg = "";
  }

  validateYear(control: FormControl): { [s: string]: boolean } {
    if (!control.value) {
      return null;
    }
    const convertedYear = +control.value;
    if (!Number.isInteger(convertedYear)) {
      return { invalidYear: true };
    }
    console.log("converted year is ", convertedYear);
    if (convertedYear < 1970 || convertedYear > 2099) {
      console.log("fiscal year is outside of range");
      return { invalidYear: true };
    }
    console.log("fiscal year is within range");
    return null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
