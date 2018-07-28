// 'declare' myFirstName 'Variable' and 'assign' Prompt 'function' for  user to input the 'argument' with the 'string' as their First Name
let myFirstName = prompt('What\'s your first name ?'); 
// 'declare' myLastName 'Variable' and 'assign' Prompt 'function' for user to input 'argument' with the 'string' as their Last Name
let myLastName = prompt('What\'s your Last Name?'); 
// 'declare' nameFunc 'Variable' and 'assign' the 'function' that 1) Prints the 2)concatenated string of the variables myFirstName and myLastName 
// then to invoke the return function to present the function output as the Variables in a concatenated string
let nameFunc = function() { 
    console.log(myFirstName + myLastName);
    return myFirstName + ' ' + myLastName
    };
//declare the fullName variable and 'assigns' the nameFunc function
let fullNameFunc = nameFunc();

// 'declares the fullNameFunction 
let fullName = confirm('So your full name is '+ fullNameFunc + '?');

// 'declare' myAge Variable and 'assign' confirm function for user to select boolean 'conditional if == true or false' 'argument' 
let myAge = confirm('Are you older than 21;'); 

// 'declare' birthYear Variable and 'assign' Prompt function for user to input 'argument' with the 'number' as their birthYear
let birthYear = prompt('What is your Birth Year?'); 


// 'declare' birthMonth Variable and 'assign' Prompt function for user to input 'argument' with the 'string' as their birthMonth
let birthMonth = prompt('What is your Birth Month?'); 
    //let birthMonth = function();{
       // return =  num 
           //if ( x <= 31 && x >= 1 && x != 0);{
               //} else { num === false }
    //}
 
 
//'declare' birthDate Variable and 'assign' Prompt function for user to input 'argument' with the 'string' as their birthYear
let birthDate = prompt('What is your Birth Date?');

let birthdayFunc = function(){
    console.log(birthMonth + + birthDate  + birthYear );
    return birthMonth + birthDate + birthYear;
}

let birthday = birthdayFunc

//concatenate all the birthday prompts into one string for confirm prompt
let entireBirthdayFunc = function(){
    console.log(birthMonth + '/'+ birthDate + '/' + birthYear + '?');
    return birthMonth + '/'+ birthDate + '/' + birthYear + '?';
 }; 

 //
let entireBirthDay = entireBirthdayFunc();


//
let agree = confirm( 'So your Date of Birth is ' + entireBirthDay);

//let agree = confirm('So your Date of Birth is ' + callBirthday);
let validate1 = function(){
    if(agree === true) {
        // if D.O.B is confirmed true, then begin 
        alert( 'So your Date of Birth is ' + entireBirthDay ); 
    }else {
        //if D.O.B. is not confirmed true, then is false, and trigger alert 
        alert('So your Date of Birth is NOT ' +entireBirthDay); 
        };
    };

//
let validate2 = function(){
        if (agree != true) {
        confirm('So your Date of Birth is NOT ' + entireBirthDay);
        if (true){
            return birthDate;

        }else{ 
            alert( ' Come on...So your Date of Birth is ' + entireBirthDay );
        };
    };
};


//
let fullValidateFunc = function(){
    console.log( validate1 + validate2)
    return validate1 + validate2;
}
let fullValidate = fullValidateFunc();        

//D.O.B 21 y.o. age Validation    

//let x = birthDate.getUTCDate()
//let y =  birthMonth.getUTCMonth()
//let z =  birthYear.getUTCFullYear()

// let uhh = alert('Wait...Hold up. If your birthday is ' + birthMonth + '/'+ birthDate + '/' + birthYear + ' then how are you 21?');
// let nice = alert('Phew, you had me worried there');
// let nice = function();{
//     return console.log(true); 
// };
// let uhh = function();{
//     console.log(false);
//     return 
// }

// while (birthMonth + '/'+ birthDate + '/' + birthYear); { 
//         if (birthYear < getUTCFullYear(num) - 21) {
//              console.log(true);
//              return 
//                 alert('Phew, you had me worried there');
        
//             }else if{ (birthYear > (getUTCFullYear(num) - 21))
//                 console.log(false);
//             alert('Wait...Hold up. If your birthday is ' + birthMonth + '/'+ birthDate + '/' + birthYear + ' then how are you 21?');   
        
//         if ((((birthYear == (getUTCFullYear(num) - 21)) && birthMonth <= getUTCMonth() && birthDate <= getUTCDate()))){
//              console.log(true); 
//                 alert('Phew, you had me worried there');
//             } 
//          else((((birthYear == (getUTCFullYear(num) - 21)) && birthMonth >= getUTCMonth(num) && birthDate > (getUTCDate(num) + 1) || birthYear > (getUTCFullYear(num)-21)))); {
//              console.log(false);
//             alert('Wait...Hold up. If your birthday is ' + birthMonth + '/'+ birthDate + '/' + birthYear + ' then how are you 21?');    
//             }   
//     };


let favGenre = prompt('What\'s your favorite genre of music?');
let myGenre = confirm('Wow...your favorite genre is '+ favGenre + ' ?..That\'s so cool!');
let myGenre1func = function(){
    console.log(favGenre);
    return favGenre;
}
let myGenre1 = myGenre1func();

let favSeason = prompt('What\'s your favorite Season?');
let mySeason = confirm('What a coincidence! I like '+ favSeason + ' too!')
let mySeason1func = function(){
    console.log(favSeason);
    return favSeason;
}
let mySeason1 = mySeason1func();

console.log(myFirstName + myLastName);
console.log(fullNameFunc);
console.log(myAge);
console.log(birthYear);
console.log(birthMonth);
console.log(birthDate);
console.log(fullValidate);

console.log(myGenre1);
console.log(mySeason1);

//let year = 
//const months = ["January" , "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December" ]
// 
//if(myAge) { 
 //console.log ('Hello ' + myName + 'I\'m older than 30 too');
//} else {
///  ('Hello ' + myName + 'you\'re so young');
//}
// if(agree=== true){
//    alert('So your name is: ' +myFirstName + myLastName + '?');
//}else {
///alert('So your entire name is not ' + myFirstName + myLastName '?');

///(agree2)


// declares the variable "element name" as function for document HTML id to  'string' 
let elName = document.getElementById('name'); 

// associates inner body HTML id with assigned JavaScript Variable
elName.innerHTML = fullName;

// prints the element name 
console.log(elName);

// declares the variable "element name" as function for document HTML id to  'string'
let elName2 = document.getElementById('age');

elName2.innerHTML = myAge;

console.log(elName2);

//
let elName3 = document.getElementById('music');

elName3.innerHTML = myGenre1;

console.log(elName3);

//
let elName4 = document.getElementById('season');

elName4.innerHTML = mySeason;

console.log(elName4);

