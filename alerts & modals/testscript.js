//find in array
//const arr = [1,2,3,4];
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Martha'},
    {id:3, name: 'Kyle'},
    
];

const user = {
      id: 1,
      name: 'John',
      age:20};

//const checkIfArray  = Array.isArray(arr);
//console.log(checkIfArray);

//function forFind(num)
//{
 //   return num > 3;
//}

//const finded = arr.find(forFind);
//console.log(finded);

//foreach test
// arr.forEach(el => {
//     console.log(el);
// })

const names = users.map(el => { //if we put foreach here it doesent work cuz foreach doesent return 
   // console.log(el.name);
   return el.name;
})
console.log(names);

for(let key in user) {
    //console.log(x);
    console.log(user[key]);
}


// const person = {
//     name: 'Jhon',
//     age: 23,
//     getBirthday: function() {
//         return 2020 - 23;
//     }
// }

// person.getBirthdayPlusOne = function() {
//     return person.getBirthday() + 1;
// }
// //Add key value pair to obj
// person.gender = 'male';
// //Add key value pair to obj this will create a new obj
// person2 = {...person, status : 'married'};

// console.log(person.getBirthday());
// console.log(person.getBirthdayPlusOne());
// console.log(person);
// console.log(person2);



