import { LitElement, html } from 'lit-element';

class ColorPicker extends LitElement {
  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();

  }

  render() {
    return html`
      <div>
        <h1> Please Select your favourite color:</h1>
        <span>Color: </span>
        <input type="color" name="favcolor" value="#ff0000">
      </div>
    `;
  }
}

customElements.define('color-picker', ColorPicker);