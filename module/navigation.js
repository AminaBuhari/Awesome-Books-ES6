import { navItems, sectionBooks } from './DOM.js';
const navDisplay = navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      for (let i = 0; i < navItems.length; i += 1) {
        sectionBooks[i].style.display = 'none';
      }
      sectionBooks[index].style.display = 'flex';
    });
  });
  
  navItems[0].addEventListener('click', () => {
    window.location.reload();
});

export {navDisplay}
