// 1.

function sum(...numbers){
    let numberSum = 0
    for (let item of numbers){
        if (item > 0){
        numberSum = numberSum + item;
    }}



console.log(numberSum);
}

sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);


// 2.

function sum(...numbers){
    let numberSum = 0
    for(let item of numbers){
        numberSum = numberSum + item;
    }
    console.log(numberSum);
}

sum(10, 50, 6, 7, 8, 11, 6, 3, 9);


// 3.

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

function person(object){
    if (object.isloggedin){
        return object.firstname + " " + object.lastname;
    }
    return false;
}
let result = person(user);

console.log(result);


// 4.

function maxNumber(numbers){
    let x = 0;
    for (let i = 0; i < numbers.length; i++) {
        let array = numbers[i];

        if(array > x) {
            x = array;
        }
        
    }
    return x;
}

console.log(maxNumber([15, 29, 32, 9, 10, 260]));


// 5.

let array=[1,2,4,10,34,5,7,87];

for (let i = 0; i<array.length; i++){
    if (array[i] > 0 && array[i] < 10){
        console.log(array[i]);
    }
}


// 6.

let numbers=[1,2,3,4,5,6,7,8,9,10];

for (let i=0; i<numbers.length;i++){
    if (numbers[i] == 5){
       break;
    }
   console.log(numbers[i]); 
}