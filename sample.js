//veriable declaration
var n1=22;
let n2=56;
const n3=97;
console.log(n1);
console.log(n2);
console.log(n3);

//printing statement
console.log("any javascript progarm")

//sample progarm
var a,b,c;
a=172;
b=876;
c=a+b;
console.log(c);


//find the variable type
var a=23;
let name="kowshik";
let n=8.98;
console.log(typeof(a));
console.log(typeof(name));
console.log(typeof(n));


//exponantial
const num=8.9e9;
console.log(num);


//infinity value
const i=Infinity;
const i1=-Infinity;
console.log("This is plus "+i);
console.log("This is minus "+i1);


//min & max Integer
const num1=Number.MIN_SAFE_INTEGER;
console.log(num1);
const num2=Number.MAX_SAFE_INTEGER;
console.log(num2);


//string
let str="This is string";
let str1="Welcome to my 'javascript' programming";
let str2="Welcome to  my \"javascript\" programming";
console.log(str);
console.log(typeof(str));
console.log(str1);
console.log(str2);

//multiline string
let str3="Welcome to \n\javascript programming";
let str4=`Welcome to 
javascript programming`;
let str5="Welcome to \t javascript programming";
console.log(str3);
console.log(str4);
console.log(str5);

//Arithmetic operators
//Addition
var a1,b1,c1;
a1=50;
b1=30;
c1=a1+b1;
console.log("sum of a1+b1 :"+c1);

//subtraction
var a2,b2,c2;
a2=60;
b2=20;
c2=a2-b2;
console.log("sub of a1-b1 :"+c2);

//multiply
var a2,b2,c2;
a2=10;
b2=20;
c2=a2*b2;
console.log("multiplying of a1*b1 :"+c2);

//division
var a2,b2,c2;
a2=10;
b2=20;
c2=b2/a2;
console.log("divid b1/a1 :"+c2);

//modulus
var a2,b2,c2;
a2=10;
b2=24;
c2=b2%a2;
console.log("modulus of b1%a1 :"+c2);

//exponential
var a2,b2,c2;
a2=6;
b2=2;
c2=b2**a2;
console.log("power of b1^a1 :"+c2);

//increment & decreament
var a2=60;
a2++;     //a2=60+1
console.log(a2); //a2=61
a2--;    //a2=61-1
console.log(a2);//a2=60

//string operator
let string1="welcome to"
let string2="javascript programming"
let string3=string1+string2;
let string4=string1+" "+string2;
string1+="\'javascript\'";
console.log(str3);
console.log(string4);
console.log(string1);

//adding string & number
let room="room no"+5;
console.log(room);
//Boolean operators
var Bool1=true;
var Bool2=false;
console.log(typeof(Bool1));
console.log(typeof(Bool2));
//comparison operator
var no1=5;
var no2=10;
console.log(no1==no2);
console.log(no1===no2);
console.log(no1!=no2);
console.log(no1>no2);
console.log(no1>=no2);
console.log(no1<no2);
console.log(no1<=no2);

//Control Statements
//condition statements
//if condition
var number1,number2;
number1=220;
number2=470;
if (number1 < number2) {
    console.log("number2 is high value");
}
//if else statement
var number1,number2;
number1=500;
number2=700;
if (number1 > number2) {
    console.log("number1 is high value");
}
else{
    console.log("number2 is high value")
}
//else if statement
var number1=70;
var number2=100;
var number3=40;
if (number1 > number2 && number1 > number3) {
    console.log("number1 is high value");
}
else if(number2 > number1 && number2 > number3){
    console.log("number2 is high value");
}
else{
    console.log("number3 is high value")
}
//switch case statement
var stuname="Balasurya";
switch (stuname) {
    case "Balasurya":
        console.log("Studentname :"+stuname);
        break;
        case "kishor":
            console.log("Studentname :"+stuname);
            break;
        case "abines":
            console.log("Studentname :"+stuname);
            break;
        default:
            console.log("Student name isn\'t found");
            break;
}

