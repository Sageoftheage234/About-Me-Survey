let myFirstName = prompt('What\'s your first name ?');
let myLastName = prompt('What\'s your Last Name?');
let myAge = confirm('Are you older than 21;');


let birthYear = prompt('What is your Birth Year?');
let birthMonth = prompt('What is your Birth Month?');
let birthDate = prompt('What is your Birth Date?');
let agree = confirm('So your Date of Birth is ' + birthMonth + '/'+ birthDate + '/' + birthYear + '?' );
let disagree = confirm('So your Date of Birth is NOT ' + birthMonth + '/'+ birthDate + '/' + birthYear + '?');
    if(agree == true); {
        alert( 'So your Date of Birth is ' + birthMonth + '/'+ birthDate + '/' + birthYear + '?' ); // if D.O.B is confirmed true, then begin
         };
    if (disagree == false);{
       alert('So your Date of Birth is NOT ' + birthMonth + '/'+ birthDate + '/' + birthYear + '?'); //if D.O.B. is not confirmed true, then is false, and trigger alert
        };
//D.O.B 21 y.o. age Validation    

let x = birthDate.getUTCDate()
let y =  birthMonth.getUTCMonth()
let z =  birthYear.getUTCFullYear()

while (birthMonth + '/'+ birthDate + '/' + birthYear); { 
        if (birthYear < z() - 21); {
             console.log(true);
                alert('Phew, you had me worried there');
        }
        if (birthYear > (z() - 21)); {
            console.log(false);
            alert('Wait...Hold up. If your birthday is ' + birthMonth + '/'+ birthDate + '/' + birthYear + ' then how are you 21?');   
        }
        if ((((birthYear == (z() - 21)) && birthMonth <= y() && birthDate <= x())));{
             console.log(true); 
                alert('Phew, you had me worried there');
        } 
         if ((((birthYear == (z() - 21)) && birthMonth >= y() && birthDate > (x() + 1) || birthYear > (z()-21)))); {
             console.log(false);
            alert('Wait...Hold up. If your birthday is ' + birthMonth + '/'+ birthDate + '/' + birthYear + ' then how are you 21?');    
        }   
};
let favGenre = prompt('What\'s your favorite genre of music?');
let favSeason = prompt('What\'s your favorite Season?');

console.log(myFirstName + myLastName);
console.log(myAge);
console.log(birthYear);
console.log(birthMonth);
console.log(birthDate);
console.log(birthMonth + '/'+ birthDate + '/' + birthYear);

console.log(favGenre);
console.log(favSeason);

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