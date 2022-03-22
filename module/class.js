import {books} from './DOM.js'
import { newCollection } from "./libary.js";
export default class Books {
    constructor() {
      this.collection = [];
    }
  
    save() {
      window.localStorage.setItem('bookCollection', JSON.stringify(this.collection));
      for (let i = 0; i < this.collection.length; i += 1) {
        window.localStorage.setItem(i.toString(), JSON.stringify(this.collection[i]));
      }
    }
  
    add(book) {
      this.collection.push(book);
    }
  
    delete(index) {
      this.collection.splice(index, 1);
      this.save();
      window.location.reload();
    }
  
    checkStorage() {
      if (window.localStorage.getItem('bookCollection') !== null) {
        const array = JSON.parse(window.localStorage.getItem('bookCollection'));
        for (let i = 0; i < array.length; i += 1) {
          newCollection[i] = JSON.parse(window.localStorage.getItem(i.toString()));
        }
        this.collection = newCollection;
      }
    }
  
    showCollection() {
      for (let i = 0; i < this.collection.length; i += 1) {
        books.innerHTML += `  
        <div class="book-container">
          <p class="book-title">"${this.collection[i].title}" by ${this.collection[i].author}</p> 
          <button type="button" class="remove-button">Remove</button>
        </div>
        `;
      }
    }
  }
  