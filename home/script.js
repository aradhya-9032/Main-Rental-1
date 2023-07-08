document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const menu = document.getElementById('menu');
  
    toggleButton.addEventListener('click', function() {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
  
    // loginButton.addEventListener('click', function() {
    //   alert('Login button clicked');
    // // document.createElement('div');

    // });
  
    signupButton.addEventListener('click', function() {
      alert('Signup button clicked');
    });
  });
 

//   function loginForm(){

//   }




























// const barLink = document.getElementById("bars").forEach((item) =>{
//   item.addEventListener("click",(event) =>{
//    const image = event.target.getAttribute("src");
//    event.target.setAttribute("src",image);
//   });
// }) ;

// const span = document.querySelector('span');
// span.style.display = "none";










// const homeLink = document.getElementById('home-link');
// const homeImage = document.getElementById('rentals');

// homeLink.addEventListener('mouseover', function(event) {
//   event.preventDefault(); // Prevent default link behavior
//   homeImage.style.display = 'block';
  
//   // Loop through the images and set their display property to 'block'
//   images.forEach(function(image) {
//     image.style.display = 'block';
//   });
// });



// function createNewPage() {
//   var newPage = window.open("", "_blank");

//   // HTML content for the new page
//   var htmlContent = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>New Page with Images</title>
//     </head>
//     <body>
//       <h1>Images on New Page</h1>
//       <img src="image1.jpg" alt="Image 1" />
//       <img src="image2.jpg" alt="Image 2" />
//       <img src="image3.jpg" alt="Image 3" />
//     </body>
//     </html>
//   `;

//   // Write the HTML content to the new page
//   newPage.document.open();
//   newPage.document.write(htmlContent);
//   newPage.document.close();
// }










//.........Btn.......//
// const btn = document.getElementById("btn");

// .....1st way by calling func.....
// function func(){
//   alert("clicked");
// }
// btn.addEventListener("click",func);


//....2nd way by calling function inside the addEvenetListener....
// btn.addEventListener("click",function(){
//   alert("hey you clicked");
// });

//....3rd way by using arrow function.......
// btn.addEventListener("click",() =>{
//   alert("You are done!")
// })




//taking /accessing to divs in js
// const divs = document.getElementsByTagName("div");  // it will gives 2 divs
// const div1 =divs[0]; // this means it give 1st div i.e which div is in the index of 0th place. 
// const div2 = divs[1]; // it give 2nd div which is in the index of 1th palce.

// const btn = document.getElementsByTagName("button")[0];  //we taken btn

// btn.addEventListener("click",() =>{
//   //  here we have to write our logical code ...means what we want.
//   //first we have to creat an element 
//   const element = document.createElement("b");  // we create bold element it has reference #400
//   element.innerText = "new element"; //it take that  #400
//   div1.append(element);//once it append means it access that #400 waht is inside inthat #400
//   div2.append(element);//again we want to append #400 to this div2 then it will show only
//   // inside the div2 not div1 bcoz "THE ELEMENT WITH ONE REFERENCECAN'T BE PUT AT TWO PLACES IN THE UI"
//   setTimeout(() => {
//     div2.append(element)
//   },5000)
// })


// **queueMicrotask => 
//higher priority
//it is same as the settimeout and its task is to registore a function 
// its not use a timer its only registore the function it is a built in function   
// it take the reference of the fucntion and registore in the microtask queue instead of 
// callback queue it does not take any timer its not like settimeout it means it take
// a timer to execute the function but microtask's its task is take a function  and 
// registore in the microtask queue.


// **Event Loop => 
// its task is to manage the callback queue and microtask queue and call stack when the call 
// call stack gets empty the the eventloop its task is to take tha function which is wait in
// the callback or microtask queue and it pushes the reference into the call stack like 
// callback queue.



// const button = document.getElementById("btn");
// // function func(){
// //   alert("HELLO");
// // }
// button.addEventListener("click", () => {
//   alert("HELLO");
// });




// let prom  = new Promise((resolve,reject) =>{
//   queueMicrotask(() =>{
//     console.log(prom); //pending
//     resolve();
//     console.log(prom);
//   })
// })
// console.log(prom); //pending
// console.log(0); //fulfilled

// setTimeout(() => {//callback
//   console.log(1);
// },0)

// console.time("Hi");
// for(let i = 0; i <10e9; i++){

// }
// console.timeEnd("Hi");

// prom.then(()=>{//microtask
//   console.log(2);
// })
// console.log(3);

// let d = new Date();
// console.log(d.getSeconds());


//whta is then ?
//.then is a function /method 
//.then method returns another Promise obj means create a promise obj inside and then returns it

/*
 * A promise obj in Js is regular obj which is instance of promise cls which represent eventual completion 
 (fulfilled)or failure(rejected) of a task.
 */


//  const api1Url = "https://dummyjson.com/posts";
//  const api2Url = "https://dummyjson.com/products";
//  const api3Url = "https://dummyjson.com/todos";
 
//  function fetchDataFromApi1(apiUrl, delay) {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//              fetch(apiUrl)
//                  .then(response => response.json())
//                  .then(data => {
//                      console.log(data.posts);
//                      resolve(data.posts);
//                  })
//                  .catch(error => {
//                      reject(error);
//                  });
//          }, delay);
//      });
//  }
 
//  function fetchDataFromApi2(apiUrl, delay) {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//              fetch(apiUrl)
//                  .then(response => response.json())
//                  .then(data => {
//                      console.log(data.products);
//                      resolve(data.products);
//                  })
//                  .catch(error => {
//                      reject(error);
//                  });
//          }, delay);
//      });
//  }
 
//  function fetchDataFromApi3(apiUrl, delay) {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//              fetch(apiUrl)
//                  .then(response => response.json())
//                  .then(data => {
//                      console.log(data.todos);
//                      resolve(data.todos);
//                  })
//                  .catch(error => {
//                      reject(error);
//                  });
//          }, delay);
//      });
//  }
 
//  function fetchApiData() {
//      const tableBody = document.querySelector("#data-table tbody");
//      const api1Promise = fetchDataFromApi1(api1Url, 1000);
//      const api2Promise = api1Promise.then(() => fetchDataFromApi2(api2Url, 2000));
//      const api3Promise = api2Promise.then(() => fetchDataFromApi3(api3Url, 3000));
 
//      api1Promise
//          .then(api1Data => {
//              api1Data.forEach(item => {
//                  const row = document.createElement("tr");
//                  const cell = document.createElement("td");
//                  cell.innerText = item.title;
//                  row.appendChild(cell);
//                  tableBody.appendChild(row);
//              });
 
//              return true;
//          })
//          .then(api1Resolved => {
//              if (api1Resolved) {
//                  return api2Promise;
//              }
//          })
//          .then(api2Data => {
//              api2Data.forEach(item => {
//                  const row = document.querySelector(`#data-table tbody tr:nth-child(${item.id})`);
//                  const cell = document.createElement("td");
//                  cell.innerText = item.title;
//                  row.appendChild(cell);
//              });
 
//              return true;
//          })
//          .then(api2Resolved => {
//              if (api2Resolved) {
//                  return api3Promise;
//              }
//          })
//          .then(api3Data => {
//              api3Data.forEach(item => {
//                  const row = document.querySelector(`#data-table tbody tr:nth-child(${item.id})`);
//                  const cell = document.createElement("td");
//                  cell.innerText = item.completed;
//                  row.appendChild(cell);
//              });
//          })
//          .catch(error => {
//              console.error(error);
//          });
//  }
 
//  const fetchDataButton = document.querySelector("#fetchDataButton");
//  fetchDataButton.addEventListener("click", fetchApiData);



// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
  
//       const targetSection = document.querySelector(this.getAttribute('href'));
//       targetSection.scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
  











// const $ = str => document.querySelector(str);
// const $$ = str => document.querySelectorAll(str);

// (function() {
//     if (!window.app) {
//         window.app = {};
//     }
//     app.carousel = {
//         removeClass: function(el, classname='') {
//             if (el) {
//                 if (classname === '') {
//                     el.className = '';
//                 } else {
//                     el.classList.remove(classname);
//                 }
//                 return el;
//             }
//             return;
//         },
//         reorder: function() {
//             let childcnt = $("#carousel").children.length;
//             let childs = $("#carousel").children;

//             for (let j=0; j< childcnt; j++) {
//                 childs[j].dataset.pos = j;
//             }
//         },
//         move: function(el) {
//             let selected = el;

//             if (typeof el === "string") {
//             console.log(`got string: ${el}`);
//                 selected = (el == "next") ? $(".selected").nextElementSibling : $(".selected").previousElementSibling;
//                 console.dir(selected);
//             }

//             let curpos = parseInt(app.selected.dataset.pos);
//             let tgtpos = parseInt(selected.dataset.pos);

//             let cnt = curpos - tgtpos;
//             let dir = (cnt < 0) ? -1 : 1;
//             let shift = Math.abs(cnt);

//             for (let i=0; i<shift; i++) {
//                 let el = (dir == -1) ? $("#carousel").firstElementChild : $("#carousel").lastElementChild;

//                 if (dir == -1) {
//                     el.dataset.pos = $("#carousel").children.length;
//                     $('#carousel').append(el);
//                 } else {
//                     el.dataset.pos = 0;
//                     $('#carousel').prepend(el);
//                 }

//                 app.carousel.reorder();
//             }


//             app.selected = selected;
//             let next = selected.nextElementSibling;// ? selected.nextElementSibling : selected.parentElement.firstElementChild;
//             var prev = selected.previousElementSibling; // ? selected.previousElementSibling : selected.parentElement.lastElementChild;
//             var prevSecond = prev ? prev.previousElementSibling : selected.parentElement.lastElementChild;
//             var nextSecond = next ? next.nextElementSibling : selected.parentElement.firstElementChild;

//             selected.className = '';
//             selected.classList.add("selected");

//             app.carousel.removeClass(prev).classList.add('prev');
//             app.carousel.removeClass(next).classList.add('next');

//             app.carousel.removeClass(nextSecond).classList.add("nextRightSecond");
//             app.carousel.removeClass(prevSecond).classList.add("prevLeftSecond");

//             app.carousel.nextAll(nextSecond).forEach(item=>{ item.className = ''; item.classList.add('hideRight') });
//             app.carousel.prevAll(prevSecond).forEach(item=>{ item.className = ''; item.classList.add('hideLeft') });

//         },
//         nextAll: function(el) {
//             let els = [];

//             if (el) {
//                 while (el = el.nextElementSibling) { els.push(el); }
//             }

//             return els;

//         },
//         prevAll: function(el) {
//             let els = [];

//             if (el) {
//                 while (el = el.previousElementSibling) { els.push(el); }
//             }


//             return els;
//         },
//         keypress: function(e) {
//             switch (e.which) {
//                 case 37: // left
//                     app.carousel.move('prev');
//                     break;

//                 case 39: // right
//                     app.carousel.move('next');
//                     break;

//                 default:
//                     return;
//             }
//             e.preventDefault();
//             return false;
//         },
//         select: function(e) {
//         console.log(`select: ${e}`);
//             let tgt = e.target;
//             while (!tgt.parentElement.classList.contains('carousel')) {
//                 tgt = tgt.parentElement;
//             }

//             app.carousel.move(tgt);

//         },
//         previous: function(e) {
//             app.carousel.move('prev');
//         },
//         next: function(e) {
//             app.carousel.move('next');
//         },
//         doDown: function(e) {
//         console.log(`down: ${e.x}`);
//             app.carousel.state.downX = e.x;
//         },
//         doUp: function(e) {
//         console.log(`up: ${e.x}`);
//             let direction = 0,
//                 velocity = 0;

//             if (app.carousel.state.downX) {
//                 direction = (app.carousel.state.downX > e.x) ? -1 : 1;
//                 velocity = app.carousel.state.downX - e.x;

//                 if (Math.abs(app.carousel.state.downX - e.x) < 10) {
//                     app.carousel.select(e);
//                     return false;
//                 }
//                 if (direction === -1) {
//                     app.carousel.move('next');
//                 } else {
//                     app.carousel.move('prev');
//                 }
//                 app.carousel.state.downX = 0;
//             }
//         },
//         init: function() {
//             document.addEventListener("keydown", app.carousel.keypress);
//            // $('#carousel').addEventListener("click", app.carousel.select, true);
//             $("#carousel").addEventListener("mousedown", app.carousel.doDown);
//             $("#carousel").addEventListener("touchstart", app.carousel.doDown);
//             $("#carousel").addEventListener("mouseup", app.carousel.doUp);
//             $("#carousel").addEventListener("touchend", app.carousel.doup);

//             app.carousel.reorder();
//             $('#prev').addEventListener("click", app.carousel.previous);
//             $('#next').addEventListener("click", app.carousel.next);
//             app.selected = $(".selected");

//         },
//         state: {}

//     }
//     app.carousel.init();
// })();























































