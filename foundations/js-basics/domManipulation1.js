// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const content1 = document.createElement('p');
content1.textContent = 'Hey I\'m red\!';
content1.style.color = 'red';
container.appendChild(content1);

const content2 = document.createElement('h3');
content2.textContent = 'I\'m a blue h3\!';
content2.style.color = 'blue';
container.appendChild(content2);

const content3 = document.createElement('div');
content3.style.cssText = 'background: pink; border-style: solid; border-color: black; border-width: thick;'; 

const content4 = document.createElement('h1');
content4.textContent = 'I\'m a div';
content3.appendChild(content4);

const content5 = document.createElement('p');
content5.textContent = 'ME TOO\!';
content3.appendChild(content5);


container.appendChild(content3);