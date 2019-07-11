import { LitElement, html } from 'lit-element';

class Counter extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();

    this.count = 0;
  }

  render() {
    return html`
      <div>
        Current count: [${this.count}]
        <button @click=${() => this.count += 1}>+</button>

        <button @click=${this._onDecrement}>-</button>
      </div>
    `;
  }

  _onDecrement() {
    this.count -= 1;
  }
}

customElements.define('counter-increment-decrement', Counter);