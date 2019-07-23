import { Component } from '@angular/core';
import { UpdateCssService } from './update-css.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontStyleElement = null;
  fontSizeElement = null;
  fontColorElement = null;
  fontStyleValue = '';
  fontSizeValue = '';
  fontColorValue = '';
  updateCss = new UpdateCssService();

  constructor() {
  }

  fontChanged(event: any) {
    this.fontStyleElement = document.getElementById('font-style');
    this.fontStyleValue = event.target.value;
    //  css update service
    this.updateCss.changeCss('--global-font-family', `${this.fontStyleValue}`);
  }
  sizeChanged(event: any) {
    this.fontSizeElement = document.getElementById('font-size');
    this.fontSizeValue = event.target.value;
    //  css update service
    this.updateCss.changeCss('--global-font-size', `${this.fontSizeValue}` + `px`);
  }

  colorChanged(event: any) {
    this.fontColorElement = document.getElementById('font-color');
    this.fontColorValue = event.target.value;
    //  css update service
    this.updateCss.changeCss('--global-primary-color', `${this.fontColorValue}`);
  }
}
