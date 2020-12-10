import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject} from "rxjs";
import { BudgetCode } from "./budget-code.model";
import { URL_ADD_CODE, URL_ALL_CODES } from "./constants";

@Injectable({
  providedIn: "root",
})
export class CodeService {
  private codes: BudgetCode[] = [];
  error = new Subject();

  constructor(private http: HttpClient) {}

  createCode(code: BudgetCode) {
    return this.http.post(URL_ADD_CODE, code, { observe: "body" }).subscribe(
      (responseData) => {
        if (responseData["results"] === "Failed") {
          this.error.next({ hasError: true, message: responseData["message"] });
        }
      }
    );
  }

  fetchCodes() {
    this.codes = [];
    return this.http.get(URL_ALL_CODES).subscribe((responseData) => {
      const codesData = responseData["data"];
      console.log(codesData);

      for (const key in codesData) {
        if (codesData.hasOwnProperty(key)) {
          this.codes.push(codesData[key]);
        }
      }
      this.codes.sort((a, b) => (a.fiscalYear > b.fiscalYear ? -1 : 1));
    });
  }

  getCodes() {
    return this.codes;
  }
}
