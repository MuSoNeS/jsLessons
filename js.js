let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),//псевдоколлекция
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),//метод содержить foreach
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[2].style.backgroundColor = 'red';
btn[2].style.borderRadius = '50%';

// for(let i=0; i<heart.length; i++){
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'grey';
// });

let div = document.createElement('div'),
    text = document.createTextNode('zzzzz');


div.classList.add('black');

document.body.appendChild(div);
 wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[0]);

document.body.replaceChild(heart[2], circle[1]);

div.innerHTML = '<h1>Hello world!</h1>';
div.style.fontSize = '12px';