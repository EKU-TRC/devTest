import { ComponentFixture } from "@angular/core/testing";
import { ResponseData } from "./response-data";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { BudgetCode } from "./budget-code.model";
import { URL_ADD_CODE, URL_ALL_CODES } from "./constants";

@Injectable({
  providedIn: "root",
})
export class CodeService {

  private codes: BudgetCode[] = [];

  constructor(private http: HttpClient) {}

  createCode(code: BudgetCode) {
    this.http.post(URL_ADD_CODE, code).subscribe(
    );
    this.fetchCodes();
  }

  fetchCodes() {
    this.http.get(URL_ALL_CODES).subscribe(
      (responseData) => {
        const codesData = responseData["data"];
        console.log(codesData);
        for (const key in codesData) {
          if (codesData.hasOwnProperty(key)) {
            this.codes.push(codesData[key]);
          }
        }
        this.codes.sort((a, b) => (a.fiscalYear > b.fiscalYear ? -1 : 1));
      }
    );
  }

  // fetchCodes() {
  //   this.http.get<BudgetCode[]>(URL_ALL_CODES).subscribe( responseData => {
  //     // this.codes = [...responseData.data];
  //     this.codes = responseData;
  //   });
  // }

  getCodes() {
    return this.codes;
  }
}
