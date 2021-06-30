console.log('tong');
const calculator = {
   displayNumber: '0',
   operator: null,
   firstNumber: null,
   waitingForSecondNumber: false
};
 
function updateDisplay() {
   document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
 
function clearCalculator() {
   calculator.displayNumber = '0';
   calculator.operator = null;
   calculator.firstNumber = null;
   calculator.waitingForSecondNumber = false;
}
 
function inputDigit(digit) {
   if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
       calculator.displayNumber = digit;
   } else {
       if (calculator.displayNumber === '0') {
           calculator.displayNumber = digit;
       } else {
           calculator.displayNumber += digit;
       }
   }
}
 
function inverseNumber() {
   if (calculator.displayNumber === '0') {
       return;
   }
   calculator.displayNumber = calculator.displayNumber * -1;
}
 
function handleOperator(operator) {
   if (!calculator.waitingForSecondNumber) {
       calculator.operator = operator;
       calculator.waitingForSecondNumber = true;
       calculator.firstNumber = calculator.displayNumber;
   } else {
       alert('Operator sudah ditetapkan')
   }
}
 
function performCalculation() {
   if (calculator.firstNumber == null || calculator.operator == null) {
       alert("Anda belum menetapkan operator");
       return;
   }
 
   let result = 0;
   if (calculator.operator === "+") {
       result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
   } else {
       result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
   }
 
   calculator.displayNumber = result;
}
 
 
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('clear')) {
           clearCalculator();
           updateDisplay();
           return;
       }
 
       if (target.classList.contains('negative')) {
           inverseNumber();
           updateDisplay();
           return;
       }
 
       if (target.classList.contains('equals')) {
           performCalculation();
           updateDisplay();
           return;
       }
 
       if (target.classList.contains('operator')) {
           handleOperator(target.innerText)
           updateDisplay();
           return;
       }
 
       inputDigit(target.innerText);
       updateDisplay()
   });
}



// console.log('Hello World');

// const calculator = {
//   displayNumber: '0',
//   operator: null,
//   firstNumber: null,
//   waitingForSecondNumber: false
// };

// //fungsi umum yang dilakukan kalkulator seperti meng-update angka pada layar dan menghapus data pada kalkulator.
// function updateDisplay() {
//    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
// }
 
// function clearCalculator() {
//    calculator.displayNumber = '0';
//    calculator.operator = null;
//    calculator.firstNumber = null;
//    calculator.waitingForSecondNumber = false;
// }

// //Lalu kita buat juga fungsi untuk memasukkan angka ke dalam nilai displayNumber kalkulator.
// // function inputDigit(digit) {
// //    calculator.displayNumber += digit;
// // }

// //Untuk memperbaikinya, pada fungsi inputDigit(), tambahkan sebuah kondisi dimana jika displayNumber bernilai ‘0’, maka angka yang pertama dimasukkan pengguna akan menggantikan keseluruhan nilai displayNumber selain itu, lakukan seperti biasanya. 
// function inputDigit(digit) {
//    if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
//            calculator.displayNumber = digit;
//    } else {
//        if (calculator.displayNumber === '0') {
//            calculator.displayNumber = digit;
//        } else {
//            calculator.displayNumber += digit;
//        }
//    }
// }


// //Kemudian kita buat variabel buttons dengan menginisialisasikan nilai seluruh elemen button yang ada, dan berikan event click pada tiap elemennya.
// // Untuk mendapatkan nilai seluruh elemen button kita gunakan querySelectorAll(“#button”) kemudian kita looping nilainya dan berikan event click pada tiap itemnya.
// // for (let button of buttons) {
// //    button.addEventListener('click', function(event) {
 
// //        // mendapatkan objek elemen yang diklik
// //        const target = event.target;
 
// //        inputDigit(target.innerText);
// //        updateDisplay()
// //    });
// // }



// //Kemudian kita akan membuat fungsi clear pada kalkulator

// const buttons = document.querySelectorAll(".button");
// for (let button of buttons) {
//   button.addEventListener('click', function(event) {
   
//          // mendapatkan objek elemen yang diklik
//          const target = event.target;
   
//          if(target.classList.contains('clear')) {
//              clearCalculator();
//              updateDisplay();
//              return;
//          }

//           if(target.classList.contains('negative')) {
//            inverseNumber();
//            updateDisplay();
//            return;
//        }
 
//          if(target.classList.contains('equals')) {
//              performCalculation();
//              updateDisplay();
//              return;
//          }
   
//          if(target.classList.contains('operator')) {
//              handleOperator(target.innerText)
//              updateDisplay();
//              return;
//          }
  

//          inputDigit(target.innerText);
//          updateDisplay()
//      });
// }

// function inverseNumber() {
//    if (calculator.displayNumber === '0') {
//        return;
//    }
//    calculator.displayNumber = calculator.displayNumber * -1;
// }

// function handleOperator(operator) {
//    if (!calculator.waitingForSecondNumber) {
//        calculator.operator = operator;
//        calculator.waitingForSecondNumber = true;
//        calculator.firstNumber = calculator.displayNumber;
//    } else {
//        alert('Operator sudah ditetapkan')
//    }
// }


// function performCalculation() {
//    if (calculator.firstNumber == null || calculator.operator == null) {
//        alert("Anda belum menetapkan operator");
//        return;
//    }
 
//    let result = 0;
//    if (calculator.operator === "+") {
//        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
//    } else {
//        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
//    }
 
//    calculator.displayNumber = result;
// }



// console.log('HELLOOOO WORLD!!!');
// var firstName = "Harry";
// console.log(firstName);

// firstName = "Ron";
// console.log(firstName);

// /* output: 
// Harry
// Ron
// */


// x = 100;
// var x;
// console.log(x);

// /* output: 100 */


// y = 100;
// let y;
// console.log(y);

// /* ReferenceError: z is not defined */

// const z = 100;
// console.log(z);

// z = 200;
// console.log(z)

// /* TypeError: Assignment to constant variable. */

// let w;
// console.log(typeof(x));
// /* output: undefined */


// let x = 10;
// console.log(typeof(x))
 
// /* output: number */
 
// let y = 17.25;
// console.log(typeof(y))
 
// /* output: number */

// let a = 12;
// let b = 9;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);//sisa hasil bagi : 12/9 = 1 = 9 = sisa 3

/* Increment dan Decrement */
 
// let postfix = 5;
// console.log(postfix++);
// /* output: 5 */
 
// let prefix = 5;
// console.log(++prefix);
// /* output: 6 */

// let greet = "Hello";
// console.log(typeof(greet))
 
// /* output: string */

// let greet = "Hello";
// let moreGreet = greet + greet;
// console.log(moreGreet);
 
// /* output: HelloHello */

// let x = true;
// let y = false;
 
// console.log(typeof(x))
// console.log(typeof(y))
 
// /* output: 
// boolean
// boolean
// */

// const a = 10;
// const b = 12;
 
// let isGreater = a > b;
// let isLess = a < b;
 
// console.log(isGreater);
// console.log(isLess);
 
// /* output:
// false
// true
// */

// let someLaterData = null;
// console.log(someLaterData);
 
// /* output:
// null
// */


// let myArray = ["Coklat", 42.5, 22, true, "Programming"];
// console.log(myArray);
 
// /* output:
// [ 'Coklat', 42.5, 22, true, 'Programming' ]
// */

// let myArray = ["Coklat", 42.5, 22, true, "Programming"];
// console.log(myArray[1]);
 
// /* output:
// 42.5
// */

// let myArray = ["Coklat", 42.5, 22, true, "Programming"];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[5]);
// console.log("Panjang nilai myArray adalah " + myArray.length + ".");
 
// /* output:
// Coklat
// 42.5
// 22
// true
// Programming
// undefined
// Panjang nilai myArray adalah 5.
// */


// let userf = {firstName: "Harry", lastName: "Potter",  age: 20, isMuggle: false, stuff: ["Wand", "Flying Car", "Owl"]};

// // Lebih disarankan di enter, jgn memanjang
// let user = {
//     firstName: "Harry",
//     lastName: "Potter", 
//     age: 20, 
//     isMuggle: false,
//     stuff: ["Magic Wind", "Flying Car", "Owl"]
// };

// console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
// console.log("Umur saya " + user.age + " tahun");
 
// /* output
// Hallo, nama saya Harry Potter
// Umur saya 20 tahun
// */

// let usere = {
//     name: {
//         first: "Harry",
//         last: "Potter"
//     },
//     age: 20, 
//     isMuggle: false,
//     stuff: ["Magic Wind", "Flying Car", "Owl"]
// }

// console.log("Hallo, nama saya " + usere.name.first + " " + usere.name.last);
 
// /* output
// Hallo, nama saya Harry Potter
// */


/*Assignment Operator yaitu (=)
x = y; */

// let x = 10;
// let y = 5
 
// x += y; // artinya -> x = x + y;
// x -= y; // artinya -> x = x - y;
// x *= y; // artinya -> x = x * y;
// x /= y; // artinya -> x = x / y;
// x %= y; // artinya -> x = x % y;
 
// console.log(x);


//Operator Komparasi
// let a = 10;
// let b = 12;
 
// console.log(a < b);
// console.log(a > b);
 
// /* output
// true
// false
// */

// const aString = '10';
// const aNumber = 10
 
// console.log(aString == aNumber) // true, karena nilainya sama-sama 10
// console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
 
// /* output
// true
// false
// */


// let a = 10;
// let b = 12;
 
// /* AND operator -> && Operator dan (and), logika akan menghasilkan true apabila semua kondisi terpenuhi (bernilai true).*/
// console.log(a < 15 && b > 10); // (true && true) -> true
// console.log(a > 15 && b > 10); // (false && true) -> false
 
// /* OR operator -> || Operator atau (or), logika akan menghasilkan true apabila ada salah satu kondisi terpenuhi (bernilai true).*/
// console.log(a < 15 || b > 10); // (true || true) -> true
// console.log(a > 15 || b > 10); // (false || true) -> true
 
// /* NOT operator -> ! Operator tidak (not), digunakan untuk membalikan suatu kondisi. */
// console.log(!(a < 15)); // !(true) -> false
// console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false
 
// /* output
// true
// false
// true
// true
// false
// false
// */

//If/Else Statement
// let x = 50;
 
// if(x > 70) {
//     console.log(x);
// } else {
//     console.log("Nilai kurang dari 70");
// }
 
// /* output
// Nilai kurang dari 70
// */

// let language = "English";
// let greeting = "Selamat Pagi!"
 
// if(language === "English") {
//     greeting = "Good Morning!";
// }
 
// console.log(greeting);
 
// /* output
// Good Morning!
// */

// let language = "French";
// let greeting = "Selamat Pagi"
 
// if(language === "English") {
//     greeting = "Good Morning!";
// } else if(language === "French") {
//     greeting = "Bonjour!"
// } else if(language === "Japanese") {
//     greeting = "Ohayogozaimasu!"
// }
 
// console.log(greeting);
 
// /* output
// Bonjour!
// */

//Loop
//for loop

// for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
    // do something
// }

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }
 
/* output
0
1
2
3
4
*/

 
// for(let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }
 
/* output
Harry
Ron
Hermione
Tom
*/

//for of loop
// for(arrayItem of myArray) {
    // do something
// }

// let myArray = ["Harry", "Ron", "Hermione", "Tom"];
 
// for(const arrayItem of myArray) {
//     console.log(arrayItem)
// }
 
/* output
Harry
Ron
Hermione
Tom
*/

//function
// function greeting() {
//     console.log("Good Morning!")
// }

// function greeting() {
//     console.log("Good Morning!")
// }
 
// greeting();
 
// /* output
// Good Morning!
// */

// function greeting(name, language) {
//     if(language === "English") {
//         console.log("Good Morning " + name + "!");
//     } else if (language === "French") {
//         console.log("Bonjour " + name + "!");
//     } else {
//         console.log("Selamat Pagi " + name + "!");
//     }
// }

// function greeting(name, language) {
//     if(language === "English") {
//         console.log("Good Morning " + name + "!");
//     } else if (language === "French") {
//         console.log("Bonjour " + name + "!");
//     } else {
//         console.log("Selamat Pagi " + name + "!");
//     }
// }
 
// greeting("Harry", "French");
 
// /* output
// Bonjour Harry!
// */

// function multiply(a, b) {
//     return a * b;
// }
 
// let result = multiply(10, 2)
// console.log(result)
 
// /* output
// 20
// */

// function greeting(name, language) {
//     if(language === "English") {
//         return "Good Morning " + name + "!";
//     } else if (language === "French") {
//         return "Bonjour " + name + "!";
//     } else {
//         return "Selamat Pagi " + name + "!";
//     }
// }
 
// let greetingMessage = greeting("Harry", "French");
// console.log(greetingMessage);
 
// /* output
// Bonjour Harry!
// */

//Variable Scope
// global variable, dapat diakses pada parent() dan child()
// const a = 'a'; 
 
// function parent() {
//     // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
//     const b = 'b'; 
    
//     function child() {
//         // local varible, dapat diakses hanya pada fungsi child().
//         const c = 'c';
//     }
// }


// function multiply(num) {
//     total = num * num;
//     return total;
// }
 
// let total = 9;
// let number  = multiply(20);
 
// console.log(total)
 
// /* output
// 400
// */

// const firstName = prompt("Siapa nama depanmu?");
// const lastName = prompt("Siapa nama belakangmu?");
// const language = prompt("Bisa berbahasa apa?");
 
// const user = {
//    name: {
//        first: firstName,
//        last: lastName,
//    },
//    language: language
// };
 
// if (user.language === "English") {
//    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "French") {
//    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "Japanese") {
//    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
// } else {
//    alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
// }

// mengubah nilai atribut src pada elemen <img id=”catImage”> melalui JavaScript.
// let catImage = document.querySelector("#catImage");
// catImage.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");

//mengambil nilai dari atribut elemen yang sedang diterapkan dengan menggunakan method getAttribute()
// catImage.getAttribute("src");


// Memanipulasi Konten Elemen
// Dengan JavaScript juga kita dapat mengubah konten yang ada di dalam HTML. Konten pada elemen disimpan di dalam properti innerHTML (konten dalam bentuk HTML) atau innerText (konten dalam bentuk Teks). Hasilnya, dalam memanipulasi konten kita dapat melakukannya dengan mengubah nilai dari properti tersebut.
// let caption = document.querySelector("#caption");
// caption.innerHTML = '<em>Tiga Anak Kucing</em>'
// Lihat perubahan terjadi pada caption gambar! Sekarang caption gambar tampak miring karena kita membungkus teks dalam elemen emphasize. Kita dapat memberikan nilai HTML pada konten elemen dengan menggunakan properti innerHTML.

// Berbeda ketika kita menggunakan innerText, nilai apapun yang terdapat pada properti ini adalah merupakan sebuah teks. Sehingga walaupun kita menginisialisasi teks yang merupakan sebuah tag html, maka teks tersebut akan tampil apa adanya tanpa terformat sebagai HTML.
// caption.innerText = "<em>Tiga Anak Kucing</em>";


// let newElement = document.createElement('p');
// newElement.innerHTML = 'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali';
// document.body.appendChild(newElement);

// catImage.addEventListener('click', function(event) {
//    document.querySelector('#count').innerText++;
// });