// let name = prompt('Silakan masukkan nama Anda!', 'John Doe');
// console.log(name);

// function alert(nama) {
//     console.log('Hati-hati, ' + nama);
//   }
   
//   alert('Chewbacca'); 

   
//   window.alert('Chewbacca');

// const buttons = document.querySelectorAll(".btn");

// for (const btn of buttons) {
//     console.log(btn);
    
// }

// const makeImg = document.createElement("img");
// makeImg.src = "https://picsum.photos/200/300";

// document.body.appendChild(makeImg);


const buttons = document.getElementsByClassName('button');

for (const button of buttons) {
    button.children[0].style.borderRadius = '6px';
    console.log(button.children[0]);
  }