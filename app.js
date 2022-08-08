function sum(a, b){
let total = a + b;
return total;
}

function multiply(a, b = 0){
    console.log(b);
    let total = a * b;
    return total;
}

let eleven = multiply(5, 7);
console.log(eleven)

let fifteen = sum(7, 8);
let ninteen = sum(9, 10);

//LOOPS

//for loop

for (let i = 1; i <= 10; i++){
    console.log(i + ". I Will talk in class always!");
}

//WHILE LOOP

let num = 1;
while (num <= 10){
    console.log(num);

    num = num + 1
}

//DO.. WHILE LOOP?

let age = 1;
do{
    console.log(age + ". You can't vote");
    age++;
}
while(age < 18);

//ARRAY METHODS
let ages = [19, 26, 24, 18, 22, 35, 30, 33, 31, 29, 18];

for (let age of ages){
    console.log(age **2);
}

let marriage = ages.filter((num) => num > 25);
console.log(marriage)

let squares = ages.map((age) => age * age)
console.log(squares);

//find

let eighteen = ages.find((age) => age === 18);
console.log(eighteen);













































