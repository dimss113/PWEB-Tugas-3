const hamburger = document.querySelector('.hamburger');
const nav_ul = document.querySelector('.nav-ul');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  nav_ul.classList.toggle('active');
})


const root = document.documentElement;
const marque_element_display = getComputedStyle(root).getPropertyValue('--marque-elements-display');

const marque_content = document.querySelector('.marque-content');

root.style.setProperty('--marque-elements', marque_content.children.length);


for (let i = 0; i < marque_element_display; i++)
{
  marque_content.appendChild(marque_content.children[i].cloneNode(true));
}
