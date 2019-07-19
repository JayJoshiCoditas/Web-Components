import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'custom-button',
  styleUrls: ['custom-button.css'],
  shadow: true
})
export class CustomButton {
    @Prop() buttonText: string;
    @Prop() iconName: string = 'fas fa-caret-left';

  render() {
    return (<div>
        <br></br>
        <button class="hybridButton">
          <span class="buttonLabel">{this.buttonText}</span>
          <span class="buttonIcon"><i class={this.iconName}></i></span>
        </button>
      </div>
    );
  }
}

