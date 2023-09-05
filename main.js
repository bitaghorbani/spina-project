let f = "Bita";
let l = "Ghorbani";
console.log(f,l);

let x;
let y = 2;
x = 3;
let z = x + 2;
console.log(z);

//const u;
const number1 = 4;
const number2 = 2;
let sum = number1 + number2;
console.log(sum);

/*   ٪ باقی مانده تقسیم
     / خارج قسمت تقسیم
*/
let i = "3" + 2 + 4;
console.log(i);
i = 2 + 4 + "3";
console.log(i);

let p = "Spina" + " " + "School";
console.log(p);

const u = "7"
let o = 1 + 2 + Number(u) + 3;
console.log(o);

let d = "8"
console.log('out1' , d);
{
    console.log('out2' , d);
}
d = "6";
console.log('out3' , d);


{
    let s = "5"
console.log('out1' , s);
}
/*{
    console.log('out2' , s);
}
console.log('out3' , s);*/

//Booleans : 1-true 2-false
let q = true;
console.log(q);
let n = false;
console.log(n);

let s;
console.log(s);

const a = ""; //empty string

const arr = ["red", "blue", "black", "yellow", "pink"];
console.log(arr[1]);
const arr2 = ["=", "+=", "-=", "*=", "**=", "/=", "%="];
console.log(arr2[5]);
console.log(arr2[0]);

//object
const bio = {fname : "bita", age : "15", math : arr2};

const person = {
    firstName : "bita",
    lastName  : "ghorbani",
    age : 15
  };
  console.log("i am" + " " + person.firstName + " " + person.lastName + " " + person.age + " years old.");



  
//single or double quotes:
let example1 = "Hi i'm bita";
let example2 = "i am '15' years old.";
let example3 = 'i am learning "programming"';
  console.log(example1, example2, example3);

// String Length:
const one = "programming with Spina School";
const O = one.length;
console.log('O', O);

const fullName = "Bita Ghorbani";
const F = fullName.length;
console.log('F', F);

// backslash:
const a1 = "if you want it.\"work\" for it.";
console.log('a1:', a1);

const a2 = 'it\'s sunny today.'
console.log('a2:', a2);

const a3 = "The character \\ is called backslash."
console.log('a3:', a3);

//Breaking Long Code Lines:
const break1 = "Hello \
Bita!";
console.log(break1);

const break2 = "Hello " +
"Bita!";   //روش بهتر برای شکستن خط
console.log(break2);

/* const break3 = \
"Hello Bita!";
نمی توان با \ یک خط کد را جدا کنیم.
*/

//Strings as Objects:
const type = {
 X : "School",
// Y is an object:
 Y : new String("Spina")
}
console.log("X:" + typeof type.X + "  " + "Y:" + typeof type.Y);

const W = "welcome";
const Z = new Number("5")
console.log(W==Z);

const W1 = "welcome";
const Z1 = new String("bita")
console.log(W1==Z1);
console.log("Z1:",typeof Z1);

//String Methods:
const fruit = "Apple, ‌Banana, Strawberry, Apple";
console.log(fruit.slice(0,5));
console.log(fruit.slice(6,17));
console.log(fruit.slice(16));

console.log(fruit.substring(1,6));
console.log(fruit.substring(-2)); // مقدار های کمتر از 0 را همان 0 در نظر میگیرد.

console.log(fruit.substr(2,4));

const fruit2 = fruit.replace("Apple", "Orange");
console.log("fruit2: ", fruit2);
/* const fruit3 = fruit.replace("APPLE", "Orange");  ==>   replace method is case sensitive.
console.log("fruit3: ", fruit3);*/   
const fruit3 = fruit.replace(/APPLE/i, "Peach");
console.log("fruit3: ", fruit3);

const fruit4 = fruit.replace(/Apple/g, "Orange");
console.log("fruit4: ", fruit4);

//replaceAll:
const work = "If you want It.work for It.";
console.log(work.replaceAll("It", "it"));

console.log("toUpperCase:  ", work.toUpperCase()); // تبدیل به حروف بزرگ
console.log("toLowerCase:  ", work.toLowerCase()); // تبدیل به حروف کوچک

//String concat():
const text0 = "Hello";
const text1 = "World";
console.log(text0.concat(" ", text1)); // ==>  text = "Hello" + " " + "World";

//String trim:
const trim0 = "    Bita     ";
console.log(trim0.length);
const trim1 = text0.trim();
console.log("trim:", trim1.length);
console.log("trimStart:", trim0.trimStart().length);
console.log("trimEnd:", trim0.trimEnd().length);

const At = "SpinaSchool";
console.log(At.length);
console.log("charAt(3):", At.charAt(3));
console.log(At.charCodeAt(3)); /* یونیکد یک کاراکتر را در موقعیت مشخص بر می گرداند
 که در UTF-16(یک عدد صحیح بین 0 و 65535)را بر می گرداند*/
console.log("Property Access:", At[0]);

//String can be converted to an array:
let cart0 = "a, b, c, d, e";
const myArray = cart0.split("");
console.log(myArray[6]);

const of = "Spina school.  is a programming school.";
console.log(of.indexOf("school")); //از کاراکتر 6ام شروع میشه.
console.log(of.lastIndexOf("school"));
console.log(of.search("programming")); // programming از کجا شروع میشه؟
console.log(of.startsWith("Spina"));

const myNeme = `Bita`; // به جای ""از back-tics می توان استفاده کرد.
console.log(myNeme);

const myName1 = `my name is
Bita`;
console.log(myName1);

let math = 4.14759;
console.log(
  math.toFixed(0) + " " +
  math.toFixed(1) + " " +
  math.toFixed(2)
  );

const cars = new Array ("BMW, Volvo, Saab");
console.log("cars:", cars);