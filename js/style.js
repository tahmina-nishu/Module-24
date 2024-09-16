const uls = document.querySelectorAll('ul');
for(const ul of uls)
{
    ul.style.border = '2px solid steelblue';
    ul.style.marginBottom = '90px';
    ul.style.borderRadius = '10px';
    ul.style.backgroundColor = 'skyblue';
    ul.style.padding = '10px';
    ul.style.textAlign = 'center';
    ul.style.listStyle = 'none';
}

const fruits = document.getElementById('fruits');
fruits.classList.add('pine-apple');