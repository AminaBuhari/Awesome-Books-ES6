import {booksCollection } from './libary.js'
import {formTitle, formAuthor, form} from './DOM.js'
import {storageAvailable} from './storage.js'
const add = () => {
if (storageAvailable('localStorage')) {
    booksCollection.add({ title: 'book 1', author: 'author 1' });
    booksCollection.add({ title: 'book 2', author: 'author 2' });
    booksCollection.checkStorage();
  
    booksCollection.showCollection();
  
    for (let i = 0; i < booksCollection.collection.length; i += 1) {
      const removeButtons = window.document.querySelectorAll('.remove-button');
      removeButtons[i].addEventListener('click', () => {
        booksCollection.delete(i);
      });
    }
  
    form.addEventListener('submit', () => {
      booksCollection.add({ title: formTitle.value, author: formAuthor.value });
      booksCollection.save();
      formTitle.value = '';
      formAuthor.value = '';
    });
  
    // window.localStorage.clear();
    // save();

}
}

export {add}