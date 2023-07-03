'use strict';

newItemInMenuBar();
moveItemInMenuBar();
newBackgroundImg();
rewriteTitle();
deleteAdv();
askTheUsers();

function newItemInMenuBar(){

    const li = document.createElement('li'),
          textContent = document.createTextNode('Пятый пункт'),
          pathToUlLi = document.querySelector('.menu').appendChild(li);

    li.appendChild(textContent);
    li.className = "menu-item";
    console.log(pathToUlLi);
}

function moveItemInMenuBar(){

    const pathToLiInTwoCount = document.getElementsByClassName('menu-item'),
          pTwo = pathToLiInTwoCount[2],
          pThree = pathToLiInTwoCount[1],
          parentNodeInUlLi = pTwo.parentNode;

    parentNodeInUlLi.insertBefore(pTwo, pThree);
}


function newBackgroundImg(){
    document.body.style.backgroundImage = 'url("img/apple_true.jpg")';
}

function rewriteTitle(){
    const rewriteTitlePath = document.getElementById('title');
    rewriteTitlePath.textContent = "Мы продаем только подлинную технику Apple";
}

function deleteAdv(){
    const deleteClassAdvPath = document.querySelector('.adv');
    deleteClassAdvPath.remove();
}

function askTheUsers(){
    const userName = prompt("Как вас зовут?");
    const answer = prompt("Как вы относитесь к рекламе?");

    const writeToPromptInPage = document.getElementById('prompt');
    writeToPromptInPage.textContent = userName+" говорит, что относится к рекламе..."+answer;
}