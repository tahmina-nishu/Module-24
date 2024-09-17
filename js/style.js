const unorderList = document.querySelectorAll('ul');
for(const item of unorderList)
{
    item.style.backgroundColor = 'skyblue';
    item.style.border = '2px solid steelblue';
    item.style.borderRadius = '10px';
    item.style.padding = '10px';
    item.style.listStyle = 'none';
    item.style.textAlign = 'center';
}