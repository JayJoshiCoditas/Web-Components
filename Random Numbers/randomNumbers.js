class RandomNumbers extends HTMLElement{

    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ 'mode' : 'open'})
        this._number = 0;
    }

    get number(){
        return this._number;
    }

    set number(val){
        this.setAttribute('number',val);
    }

    connectedCallback(){

    }

    disconnectedCallback(){

    }

    static get observedAttributes(){
        return ['number'];
    }

    attributeChangedCallback(name,oldVal,newVal){
        
        if(!this._shadowRoot.innerHTML){
            this.attachTemplate();
            var innerBar = this._shadowRoot.querySelector('.number-inner');
        }

        var innerBar = this._shadowRoot.querySelector('.number-inner');

        switch(name){
            case 'number':
                this._number = parseInt(newVal,10) || 0;
                innerBar.innerHTML = this.number
                break;
        }

    }

    attachTemplate(){
        var template = `
            <style>
                .number-inner {
                        height: 70px;
                        width: 70px;
                        background-color: darkturquoise;
                        border-radius: 22px;
                }
            </style>
            <div class="number">
                <button class="number-inner">${this.number}</button>
            </div>
        `;

        this._shadowRoot.innerHTML = template;
    }
}

window.customElements.define('random-numbers',RandomNumbers)