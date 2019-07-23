import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateCssService {

  constructor() { }

  changeCss(globalVar: string, value: string) {
    document.documentElement.style.setProperty(globalVar, value);
  }
}
