import { LitElement, html } from 'lit-element';

class DatePicker extends LitElement {
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
      <h1>Show a date control:</h1>

      <form">
        Birthday: <input type="date" name="bday">
        <input type="submit">
      </form>
      </div>
    `;
  }
}

customElements.define('date-picker', DatePicker);