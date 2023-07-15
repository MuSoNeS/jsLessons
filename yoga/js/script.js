'use strict';
window.addEventListener('DOMContentLoaded', function(){

    let tab = this.document.querySelectorAll('.info-header-tab'),
    info = this.document.querySelector('.info-header'),
    tabContent = this.document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for(let i = a; i<tabContent.length;i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
   hideTabContent(1); 

   function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
   }

   info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i <tab.length;i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
   });
});

let className = document.querySelector('.description-text'),
    btn = document.querySelector('description-btn');

console.log(className.getBoundingClientRect().top);
console.log(document.documentElement.clientHeight);

//modal
let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    closed = document.querySelector('.popup-close');
more.addEventListener('click', function(){
    overlay.style.display = 'block';
    this.classList.add('more-splash');
});

closed.addEventListener('click', function(){
    overlay.style.display = 'none';
    this.classList.remove('more-splash');
});

//интерполяция

// let name = 'Ramil',
//     age = 17,
//     mail = 'examp@.ru';
// document.writeln(`user ${name} age ${age}. And his mail:  ${mail}`);

// //let and const
// function makeArray(){
//     var items = [];
//     for(let i = 0; i <10;i++){//var создается 1 на весь цикл, let создается для каждой итерации новая
//         var item = function(){
//             console.log(i);
//         };
//         items.push(item);
//     };
//     return items;
// };

// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();

// //стрелочные функции
// let fun = () => {
//  console.log(this);
// };

// fun();

// let obj = {
//     number: 5,
//     sayNumber: function(){
//         let say = () => {
//             console.log(this);
//         };
//     }
// };

// obj.sayNumber();

// function calcOrDouble(number, basis = 2){//ES6
//     // basis = basis || 2; ES5
//     console.log(number*basis);
// }

// calcOrDouble(3,5);

// calcOrDouble(22);

// class Rectangle{
//     constructor(heigth, weigth = heigth){
//         this.weigth = weigth;
//         this.heigth = heigth;
//     }
//     calcArea(){
//         return this.heigth* this.weigth;
//     }
// }

// const square = new Rectangle(30);
// console.log(square.calcArea());

// let video = ['y', 'wm', 'rut'],
//     blogs = ['y', 'a', 'adaf'],
//     internet = [...ar, ...gl, 'gf'];
// console.log(internet);

// function log(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let numbers = [2,3,4];

// log(...numbers);

//lessons

class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv() {
		let elem = document.createElement('div');
		document.body.appendChild(elem);
		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		elem.style.cssText = param;
	}
}

const item = new Options(300, 350, "red", 14, "center");

item.createDiv();