//Add book
import { add } from './module/addbook.js';
add();
// Add Nav Display
import {navDisplay} from './module/navigation.js'
navDisplay;
// Add date
import {DateTime} from './node_modules/luxon/src/luxon.js';
const date = window.document.getElementById('date');
const nowdate= () => {
    let year = DateTime.now().year;
    let month = DateTime.now().month;
    let day = DateTime.now().day;
    let hour = DateTime.now().hour;
    let minute = DateTime.now().minute;
    let second = DateTime.now().second;
    date.innerHTML = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
}
setInterval(nowdate, 1000);