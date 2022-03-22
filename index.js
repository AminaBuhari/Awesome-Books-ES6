// Add book
import add from './module/addbook.js';
// Add Nav Display
import navDisplay from './module/navigation.js';
// Add date
import { DateTime } from './node_modules/luxon/src/luxon.js';

add();
navDisplay();
const date = window.document.getElementById('date');
const nowdate = () => {
  const { year } = DateTime.now();
  const { month } = DateTime.now();
  const { day } = DateTime.now();
  const { hour } = DateTime.now();
  const { minute } = DateTime.now();
  const { second } = DateTime.now();
  date.innerHTML = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
};
setInterval(nowdate, 1000);