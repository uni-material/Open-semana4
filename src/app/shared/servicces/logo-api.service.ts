import { Injectable } from '@angular/core';
import any = jasmine.any;

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = 'https://logo.clearbit.com';
  constructor() {}

  getUrlToLogo(source:any){
    return `${this.baseUrl}${new URL(source).hostname}`;
  }
}
