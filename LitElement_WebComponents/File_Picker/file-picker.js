import { LitElement, html } from 'lit-element';

class FilePicker extends LitElement {
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
      <h1>File upload</h1>
      <p>Show a file-select field which allows a file to be chosen for upload:</p>
      <form">
        Select a file: <input type="file" name="myFile"><br><br>
        <input type="submit">
      </form>
      </div>
    `;
  }
}

customElements.define('file-picker', FilePicker);