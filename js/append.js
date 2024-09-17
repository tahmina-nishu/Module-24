//adding new element
const placesList = document.getElementById('container');    //where to add
const newList = document.createElement('li');   // where to be added
newList.innerText = 'new place 2';   //what to be added
placesList.appendChild(newList);    //push the element

//adding a new section jekhane ekta list ad hobe
const sectionContainer = document.getElementById('main-container');
console.log(sectionContainer);

const newSection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My favourite fooods';
newSection.appendChild(h1);
sectionContainer.appendChild(newSection);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'biriyani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'biriyani';
ul.appendChild(li3);

newSection.appendChild(ul);

//adding a new section in another easy way
const sectionDresses = document.createElement('section');
sectionDresses.innerHTML = `
<h1> Dress section </h1>
<ul>
    <li> T-Shirt </li>
    <li> Shirt </li>
    <li> Sharee </li>
</ul>
`

sectionContainer.appendChild(sectionDresses);