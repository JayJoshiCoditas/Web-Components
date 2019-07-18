class TryOuts extends HTMLParagraphElement{

    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ 'mode' : 'open'})
    }

    connectedCallback(){
        this.attachTemplate()
    }

    disconnectedCallback(){

    }

    attributeChangedCallback(name,oldVal,newVal){

    }

    attachTemplate(){
        var template = `
            <style></style>
            <div>
                Hello Try outs
                <br>
                <slot name="tryout-slots">Appears when no named-slot is provided</slot>
            </div>
        `;

        this._shadowRoot.innerHTML = template;
    }
}

window.customElements.define('try-outs',TryOuts,{ extends: 'p'});