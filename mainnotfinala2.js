let myFirstName = prompt('What\'s your first name ?'); // 'declare' myFirstName 'Variable' and 'assign' Prompt 'function' for  user to input the 'argument' with the 'string' as their First Name
// 'declare' myLastName 'Variable' and 'assign' Prompt 'function' for user to input 'argument' with the 'string' as their Last Name
let myLastName = prompt('What\'s your Last Name?'); 
// 'declare' nameFunc 'Variable' and 'assign' the 'function' that 1) Prints the 2)concatenated string of the variables myFirstName and myLastName 
// then to invoke the return function to present the function output as the Variables in a concatenated string
let myFullNameFunc = function() { 
    console.log(myFirstName + myLastName);
    return myFirstName + ' ' + myLastName;
};

//'declare' the fullNameFunc variable and 'assigns' the nameFunc function 
let fullNameFunc = myFullNameFunc();

// 'declare' the fullName variable and 'assigns' the confirm 'Function' to concatenate the text string with the fullNameFunc to create a boolean 'argument' output
let fullName = confirm('So your full name is '+ fullNameFunc + '?');
// 'declare' myAge Variable and 'assign' confirm function for user to select boolean 'conditional if == true or false' 'argument' output
let myAge = confirm('Are you older than 21;');

//
let myAgeFunc = function(){
    if(myAge === true){
        console.log('Yes');
        return 'Yes';
    }else{ 
        console.log('No')
        return 'No';
        };
};


//
let myAge1 = myAgeFunc();
//
let myAgeFunc2 = function(){
    if('Yes' === true){
        console.log('Yes');
        return 'Yes';
      
    }else {
            console.log('No');
            return 'No';
    };
};

//
let myAge2 = myAgeFunc2();

// 'declare' birthYear Variable and 'assign' Prompt function for user to input 'argument' with the 'number' as their birthYear
let birthYear = prompt('What is your Birth Year?'); 

//
let birthMonth = prompt('What is your Birth Month?');

//
let birthDate = prompt('What is your Birth Date?');
        
//   
let birthdayFunc = function(){
    console.log(birthMonth + birthDate  + birthYear );
    return birthMonth + birthDate + birthYear;
};

//
let birthday = birthdayFunc();

//concatenate all the birthday prompts into one string for confirm prompt
let entireBirthdayFunc = function(){
    console.log(birthMonth + '/'+ birthDate + '/' + birthYear + '?');
    return birthMonth + '/'+ birthDate + '/' + birthYear + '?';
 }; 

 //
let entireBirthDay = entireBirthdayFunc();

//
let agree = confirm( 'So your Date of Birth is ' + entireBirthDay + '?');

//let agree = confirm('So your Date of Birth is ' + callBirthday);
let validate1 = function(){
    console.log(agree); {
    if ((console.log(agree === true))) {
        // if D.O.B is confirmed true, then begin 
        alert( 'I\'m glad to see you were born on ' + entireBirthDay );
        console.log(true); 
        return 'true';
    }else {
        //if D.O.B. is not confirmed true, then is false, and trigger alert 
        alert('Then your Date of Birth is NOT ' + entireBirthDay); 
        console.log(false);
        return 'false';
        }; 
    };
    
};
//
let validation = validate1();

let validate2 = function(){
    ((console.log(validation))); {
    if((console.log('false'))){
            confirm('So your Date of Birth is NOT ' + entireBirthDay);
            console.log(true);
            return 'true';
        } 
        else {
            alert('Get your life together');
            console.log(false);
            return 'false';
        };
    };
};

let validation2 = validate2();
let validate3 = function(){
 if((((console.log(validation2))))); {
            if ((console.log('false'))) {
                alert('Then please refresh and enter your correct birthday');
                console.log(false);
                return 'false'; 
                    } 
                    else if ((console.log('false'))) {
                        alert('Now you\'re just wasting time')
                        console.log(false);
                        return 'false';
                        };
            };   
};        

let validation3 = validate3();


//
let favGenre = prompt('What\'s your favorite genre of music?');
//
let myGenre = confirm('Wow...your favorite genre is '+ favGenre + ' ?..That\'s so cool!');
//
let myGenre1func = function(){
    console.log(favGenre);
    return favGenre;
}
//
let myGenre1 = myGenre1func();


//
let favSeason = prompt('What\'s your favorite Season?');
//
let mySeason = confirm('What a coincidence! I like '+ favSeason + ' too!')

//
let mySeason1func = function(){
    console.log(favSeason);
    return favSeason;
}

//
let mySeason1 = mySeason1func();

console.log(myFirstName + " " + myLastName);
console.log(fullNameFunc);
console.log(myAge);
console.log(birthYear);
console.log(birthMonth);
console.log(birthDate);
console.log(birthday);
//console.log(fullValidate);

console.log(myGenre1);
console.log(mySeason1);



// declares the variable "element name" as function for document HTML id to  'string' 
let elName = document.getElementById('name'); 

// associates inner body HTML id with assigned JavaScript Variable
elName.innerHTML = fullNameFunc;

// prints the element name 
console.log(elName);

// declares the variable "element name" as function for document HTML id to  'string'
let elName2 = document.getElementById('age');

elName2.innerHTML = myAge2;

console.log(elName2);

//
let elName3 = document.getElementById('music');

elName3.innerHTML = myGenre1;

console.log(elName3);

//
let elName4 = document.getElementById('season');

elName4.innerHTML = mySeason1;

console.log(elName4);
















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




//let birthYearFunc= function(){
    // console.log(birthYear);
    // let birthYearx = Object{bMonth}
    
    // let birthYearNum = Array[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  
    // let birthMonthName = 
    //     if ( x <= 12 && x >= 1 && x != 0);{
    //         return true;
    //     } else { num === false }

//}

// 'declare' birthMonth Variable and 'assign' Prompt function for user to input 'argument' with the 'string' as their birthMonth
// let birthMonth = prompt('What is your Birth Month?'); 
//     //let birthMonthFunc =  function(){
    // console.log(birthMonth);
    // let birthMonthx = Object{bMonth}
    
    // let birthMonthNum = Array[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // let birthMonthString = Array["January" , "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December" ];
// 
    // let birthMonthName = 
    //     if ( x <= 12 && x >= 1 && x != 0);{
    //         return true;
    //     } else { num === false }
 
//'declare' birthDate Variable and 'assign' Prompt function for user to input 'argument' with the 'string' as their birthYear



//let birthDateFunc =  function(){
    // console.log(birthDate);
    // let birthDatex = Object{bMonth}
//let birthMonthName = 
        //     if ( x <= 31 && x >= 1 && x != 0);{
        //         return true;
    //     } else { num === false }

    
//let birthDate1 = birthDateFunc();














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



//
// let fullValidateFunc = function(){
//     console.log( validate1 + validate2)
//     return (validate1 + validate2)
// }

// //
// while(fullValidateFunc);{
//     if ((validate1 = true)) {
//         console.log(true)
//         return true;
//     } else if (validate1 = false) {
//         console.log(false)
//         return false;
    
//     }else if(((((validate1 = false) && (validate2 = true)))) || (((((validate1 = false) && (validate2 = false)))))){
//         console.log (false)
//         return false;   
//         };
// };

// //

// //
// let valConfFunc = function() {
//    if (validate1 + validate2 === true){
//      return true;
//    }
// }   

// //
// let fullValidate = valConfFunc();

// //
// let fullValidateFunctionConfirm = fullValidateFunc(); 






