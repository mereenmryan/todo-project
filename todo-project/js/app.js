var username = prompt ("inter your name please" );
console.log( username );

var usergender  = prompt("inter your gender please ");

if (usergender === "female") {
    console.log(usergender);
   
} else if (usergender ===" male") {
    console.log(usergender);
} else {
    console.log("inter your gender correctly please");
}

var userage = prompt ("inter your age please" );
if( userage <= 0 )
console.log( "age should be greater than 0");
else
console.log( userage );


var useranswer =confirm ("do you wants to skip the welcoming message");
console.log( useranswer );
  
var title  ;
if (usergender ==="female"){
console.log("Ms");
title="Ms";}
else if  (usergender ==="male"){
 console.log("Mr"); 
 title="Mr"}
else 
console.log("you should inter your gender correctly ");


alert (`welcome ${title} ${username}`);
