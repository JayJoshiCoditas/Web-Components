import {LitElement, html} from 'lit-element';

class ToDoList extends LitElement {

  // initialize variables
  static get properties() {
    return {
      toDoList: {type: Array},
      todoItem: {type : String}
    } 
  }

  constructor(){
    super();
    // set initial values to variables
    this.toDoList = [ {text : "Task 1" }, {text: "Task 2"} ];
    this.todoItem = "";
  }

  render(){
    // write your custom html code
    return html `
    <div>
      <label>Enter your to-do item:</label>
      <input type="text" placeholder="Enter your to-do" @change=${e => this._inputChanged(e)}/>
      <button @click=${this._addIntoToDo}>Add to ToDoList</button>

      <h3> Your To-do-list is : </h3>
      <ul>
        ${this.toDoList.map(item => html`
          <li>${item.text}</li>
        `)}
      </ul>
    </div>
    `;
  }

  _addIntoToDo(){
    if(this.todoItem == '') alert("Please Enter some text !!");
    else{
      const obj = {text: this.todoItem}
      this.toDoList = [
        ...this.toDoList,
        obj
      ]
    }
  }
  _inputChanged(e){
    this.todoItem = e.target.value;
  }
}

// register your custom element
customElements.define('to-do-list', ToDoList);