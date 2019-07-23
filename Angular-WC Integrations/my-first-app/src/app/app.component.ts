import { Component } from '@angular/core';
import { UpdateCssService } from './update-css.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  globalFontFamily = '';
  globalFontSize = '';
  fontStyleElement = null;
  fontSizeElement = null;
  val1 = '';
  val2 = '';
  updateCss = new UpdateCssService();

  constructor() {
  }

  fontChanged() {
    this.fontStyleElement = document.getElementById('font-style');
    this.val1 = this.fontStyleElement.options[this.fontStyleElement.selectedIndex].value;
    //  css update service
    this.updateCss.changeCss('--global-font-family', `${this.val1}`);
  }
  sizeChanged() {
    this.fontSizeElement = document.getElementById('font-size');
    this.val2 = this.fontSizeElement.options[this.fontSizeElement.selectedIndex].value;
    //  css update service
    this.updateCss.changeCss('--global-font-size', `${this.val2}` + `px`);
  }
}
