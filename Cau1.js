let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
alert ("Trước khi hoán đổi: " + "a: " + a + " b: " + b);

let c = a;
a = b;
b = c;

alert("Sau khi hoán đổi: " + "a: " + a + " b: " + b);



