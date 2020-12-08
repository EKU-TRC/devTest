import { ResponseData } from "./response-data";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";
import { throwError } from "rxjs";
import { BudgetCode } from "./budget-code.model";
import { URL_ADD_CODE, URL_ALL_CODES } from "./constants";

@Injectable({
  providedIn: "root",
})
export class CodeService {
  constructor(private http: HttpClient) {}

  createCode(code: BudgetCode) {
    this.http.post(URL_ADD_CODE, code).subscribe();
  }

  getCodes() {
    return this.http.get<{ [key: string]: ResponseData }>(URL_ALL_CODES).pipe(
      map((responseData) => {
        // const codesArr: BudgetCode[] = [...responseData.data];
        const codesArr: BudgetCode[] = [];
        // for(const key in responseData) {
        //   if(key === )
        //   codesArr.push({...})
        // }
        return codesArr;
      }),
      catchError((errorResponse) => {
        return throwError(errorResponse);
      })
    );
  }
}
