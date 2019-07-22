import { Component } from '@angular/core';

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

  fontChanged() {
    this.fontStyleElement = document.getElementById('font-style');
    this.val1 = this.fontStyleElement.options[this.fontStyleElement.selectedIndex].value;
    const abc = document.getElementsByTagName('my-input-field')[0];
    abc.style.setProperty('--global-font-family', `${this.val1}`);
  }
  sizeChanged() {
    console.log('Size changed');
    this.fontSizeElement = document.getElementById('font-size');
    this.val2 = this.fontSizeElement.options[this.fontSizeElement.selectedIndex].value;
    const abc = document.getElementsByTagName('my-input-field')[0];
    abc.style.setProperty('--global-font-size', `${this.val2}` + `px`);
  }
}
