/*let name = "John";
let surname = "Doe";
console.log(name);
console.log(surname);
console.log(21+21);
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4 + 6 + 9)/77);
let a = 10;
console.log(a);
console.log(9 * a);
let b = 7 * a;
console.log(b);
let max = 57;
let actual = max - 13;
let percentage = actual / max;*/

function add7(num){
    return(num + 7);
}

function multiply(num1, num2){
    return(num1 * num2);
}

function capitalize(str){
    return(str.toUpperCase());
}

function lastLetter(str){
    return(str[str.length - 1]);
}

console.log(add7(5));
console.log(multiply(12, 2));
console.log(capitalize("i am very loud"));
console.log(lastLetter(`hehe`));
