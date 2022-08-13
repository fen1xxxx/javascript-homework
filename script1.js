// დავალება 1

var user = {
    firstName: 'Giorgi',
    lastName: 'Smith',
    Age: 25,
    studentStatus: 'active'
};
console.log(user.studentStatus);

//დავალება 2

var names = [ 'harry', 'weasley', 'snape', 'draco', 'dumbledore'  ]
 
for (var item of names)
 {console.log(item)}

 //დავალება 3

 var numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
 
 for(var item = 0; item < numbers.length; item++)
 if (numbers [item] > 5 )
 {console.log (numbers [item])}

 //დავალება 4

 var user = {
    name: 'Giorgi',
    age: 20,
    studentStatus: 'active'
}
if (user.Age < 18 && user.studentStatus == 'active'){
    console.log('hello');
}else if (user.name == 'Levani'){
    console.log('hello Giorgi');
}else if(user.studentStatus == 'active' || user.age < 25){
    console.log('hello world');
}else{
    console.log('error');
}

// დავალება 5

let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
for (item=0; item<array.length; item++){
    if (typeof array[item] == 'string'){
        console.log(array[item]);
    }
}
 
