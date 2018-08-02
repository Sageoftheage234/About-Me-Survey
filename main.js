let myFirstName = prompt('What\'s your first name ? '); // 'declare' myFirstName 'Variable' and 'assign' Prompt 'function' for  user to input the 'argument' with the 'string' as their First Name
// 'declare' myLastName 'Variable' and 'assign' Prompt 'function' for user to input 'argument' with the 'string' as their Last Name
console.log(myFirstName);
let myLastName = prompt('What\'s your Last Name?'); 
// 'declare' nameFunc 'Variable' and 'assign' the 'function' that 1) Prints the 2)concatenated string of the variables myFirstName and myLastName 
// then to invoke the return function to present the function output as the Variables in a concatenated string
console.log(myLastName);
let myFullNameFunc = function() { 
    console.log(myFirstName + myLastName);
    return myFirstName + ' ' + myLastName;
};

//'declare' the fullNameFunc variable and 'assigns' the nameFunc function 
let fullNameFunc = myFullNameFunc();
console.log(fullNameFunc);

// 'declare' the fullName variable and 'assigns' the confirm 'Function' to concatenate the text string with the fullNameFunc to create a boolean 'argument' output
let fullName = confirm('So your full name is '+ fullNameFunc + '?');
// 'declare' myAge Variable and 'assign' confirm function for user to select boolean 'conditional if == true or false' 'argument' output
console.log(fullName)
let myAge = confirm('Are you older than 21?');
console.log(myAge)
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

console.log(myAge1);

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
console.log(myAge2);

// 'declare' birthYear Variable and 'assign' Prompt function for user to input 'argument' with the 'number' as their birthYear
let birthYear = prompt('What is your Birth Year? Format: ex 0000'); 
console.log(birthYear);

//
let birthMonth = prompt('What is your Birth Month? Format: ex 00');
console.log(birthMonth);
//
let birthDate = prompt('What is your Birth Date? ex 00');
console.log(birthDate);        
//   
let birthdayFunc = function(){
    console.log( birthYear + birthMonth + birthDate);
    return birthYear + birthMonth + birthDate;
};

//
let birthday = birthdayFunc();
console.log(birthday)

//concatenate all the birthday prompts into one string for confirm prompt
let entireBirthdayFunc = function(){
    console.log(birthMonth + '/'+ birthDate + '/' + birthYear + '?');
    return birthMonth + '/'+ birthDate + '/' + birthYear + '?';
 }; 

 //
let entireBirthDay = entireBirthdayFunc();
console.log (entireBirthDay);

//
let agree = confirm( 'So your Date of Birth is ' + entireBirthDay);
console.log ("so your birthdate is " + agree);

let validate3 = function(){
    alert('Then please refresh and enter your correct birthday');
   }        

let validate2 = function(){
    let notDOB = confirm('So your Date of Birth is NOT ' + entireBirthDay);
    if(notDOB === true){
        console.log(true);
        validate3();
        return 'true';
        } 
    else {
        alert('Get your life together');
        console.log(false);
        return 'false';
    }
}

//let agree = confirm('So your Date of Birth is ' + callBirthday);
let validate1 = function(){
    if (agree === true) {
        // if D.O.B is confirmed true, then begin 
        alert( 'I\'m glad to see you were born on ' + entireBirthDay );
        console.log(true); 
        return 'true';
    }else {
        //if D.O.B. is not confirmed true, then is false, and trigger alert 
        validate2();
        return 'false';
        }    
    }
  
//
validate1();


let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();

if(dd < 10) {
    dd = '0' + dd
} 

if(mm < 10) {
    mm = '0' + mm
} 

let todaysDate = yyyy + mm + dd;

console.log('todays date is: ' +  todaysDate);

todaysDate = parseInt(todaysDate);
let year21Ago = todaysDate - 210000;
console.log(year21Ago);

// birthday is concatenated dob yearmonthdate
//   birthday
// // convert user dob to # 
let birthdayNum = parseInt(birthday);
console.log(birthdayNum);

console.log(year21Ago > birthdayNum);
if (year21Ago >= birthdayNum){
    alert('Phew, you had me worried there');
}
else {
    alert('Wait...Hold up. If your birthday is ' + birthMonth + '/'+ birthDate + '/' + birthYear + ', then how are you 21?');    
}



























//
let favGenre = prompt('What\'s your favorite genre of music?');
console.log(favGenre);
//
let myGenre = confirm('Wow...your favorite genre is '+ favGenre + ' ?..That\'s so cool!');
console.log(myGenre);
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


// declares the variable "element name" an assigning the variable of a 'function' call for the document HTML id to the 'string' 'argumenty
let elName = document.getElementById('name'); 
// associates inner body HTML id with assigned JavaScript Variable
elName.innerHTML = fullNameFunc;
// prints the element name 
console.log(elName);

// declares the variable "element name" as function for document HTML id to  'string'
let elName2 = document.getElementById('age');
//
elName2.innerHTML = myAge2;
//
console.log(elName2);
//

let elName3 = document.getElementById('music');

elName3.innerHTML = myGenre1;

console.log(elName3);

//
let elName4 = document.getElementById('season');

elName4.innerHTML = mySeason1;

console.log(elName4);

