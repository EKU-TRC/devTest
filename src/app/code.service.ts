import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor(private http: HttpClient) { }

  
}
