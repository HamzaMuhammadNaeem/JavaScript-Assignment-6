                            //Chapter # 21 to 25

//Task-1

// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name")
// var fullName = firstName + lastName
// document.write("Hello " + firstName + " " + lastName)


//Task-2

// var favMobileModel = prompt("Enter Your Favourite Mobile Phone");
// var stringLenght = favMobileModel.length
// document.write("My Favourite Phone is: " + favMobileModel + "<br>Lenght of string: " + stringLenght);


//Task-3

// var string = "Pakistani"
// var stringIndex = string.indexOf("n")
// document.write("String: "+ string +"<br>Index of 'n': " + stringIndex )


//Task-4

// var string = "Hello World"
// var stringIndex = string.lastIndexOf("l")
// document.write("String: "+ string +"<br>Last index of 'l': " + stringIndex )


//Task-5

// var string = "Pakistani"
// var stringIndex = string.charAt(3)
// document.write("String: "+ string +"<br>Character at index 3: " + stringIndex )


//Task-6

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(lastName);
// document.write("Hello " + firstName + " " + lastName)


//Task-7

// var city = "Hyderabad";
// var afterReplace = city.replace("Hyder", "Islam")
// document.write("City: " + city + "<br>After replacement: " + afterReplace)


//Task-8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var afterReplace = message.replace(/and/g, "&")
// document.write("Message Before Replacement: " + message + "<br>After replacement: " + afterReplace)


//Task-9

// var str = "472";
// var convertToNum = str.replace(str, 472)
// document.write("Value: " + str + "<br>Type: string" + "<br>Value: " + convertToNum + "<br>Type: number")


//Task-10

// var input = prompt("Enter Dry Fruit");
// var upperCase = input.toLocaleUpperCase(input)
// document.write("User input: " + input + "<br>Upper case: " + upperCase )

//Task-11

// var input = prompt("Enter Dry Fruit");
// var firstChar = input.slice(0,1);
// var firstChar = firstChar.toUpperCase();
// var otherChar = input.slice(1);
// otherChar = otherChar.toLowerCase();
// var title = firstChar + otherChar;

// document.write("User input: " + input + "<br>Title case: " + title )


//Task-12

// var num = 35.36 ;
// var str = num.toString();
// var removeDot = str.replace(".","");
// document.write(removeDot)

// Task-13

// var userName = prompt("User's Name");
// var numChars = userName.length;
// for (var i = 0; i < numChars; i++) {
//     if(userName.slice(i, i + 2) === "@"){
//         alert("Please Enter a valid user's name")
//     }
// }

// Task-14

// var searchItem = prompt("Welcome to ABC Bakery, What do youu want to order sir/ma'am?");
// var firstChar = searchItem.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = searchItem.slice(1);
// otherChar = otherChar.toLowerCase();

// var searchItems = firstChar+otherChar;
// console.log(searchItem)


// var itemsList = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// for(var i = 0; i < itemsList.length; i++){
//     if(itemsList[i] === searchItem ){
//         document.write(searchItem + " is <b>available</b> at index " + " in our bakery")
//     }else{ document.write("We are sorry. " + searchItem + " is <b>not available</b> in our bakery" )}
//     break;
// }



// Task-15

//var pass = prompt("Enter Your Password")


// Task-16

// var university = "University of Karachi";
// var i = university.split(", ");
// var firstChar = i.slice(0)
// document.write(firstChar+ "\n" + firstChar);


// Task-17

// var string = prompt();
// var lastChar = string.slice();
// var stringIndex = string.charAt();

// document.write("User input: "+ string +"<br>Last character of input: " + stringIndex )



// Task-18

// var text = "The quick brown fox jumps over the lazy dog.";


                            //Chapter # 21 to 25

//Task-1

// var int = prompt("Enter Positive Integer");
// var roundOffValue = Math.round(int);
// var floorValue = Math.floor(int);
// var ceilValue = Math.ceil(int);
// document.write("number: " + int + "<br>round off value: " + roundOffValue + "<br>floor value: " + floorValue + "<br>ceil value: " + ceilValue);

//Task-2

// var int = prompt("Enter Negative Integer");
// var roundOffValue = Math.round(int);
// var floorValue = Math.floor(int);
// var ceilValue = Math.ceil(int);
// document.write("number: " + int + "<br>round off value: " + roundOffValue + "<br>floor value: " + floorValue + "<br>ceil value: " + ceilValue);


//Task-3

// var int = prompt("Enter Negative Integer");
// var absValue = Math.abs(int);
// document.write("The absolute value of " + int + " is " + absValue);


//Task-4

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfDice = Math.floor(improvedNum);

// document.write("random dice value: "+numberOfDice);



//Task-5


// var toss = Math.random() * 2 + 1;
// var floor = Math.floor(toss);

// if(floor === 2){
//     document.write(floor + "<br>random coin value: Heads" )
// }else{document.write(floor + "<br>random coin value: Tails" )
// }



//Task-6


// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 100) + 1;
// var numberOfDice = Math.floor(improvedNum);

// document.write("random number between 1 and 100: "+ numberOfDice);


//Task-7

// var weight = prompt("Enter you weight in kilograms");
// var cont = weight.fixed(2);
// console.log(cont);
// document.write("The weight of user is " + weight + " kilograms");



//Task-8

// var inputNum = prompt("Enter a number between 1 and 10");

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 10) + 1;
// var numberOfDice = Math.floor(improvedNum);
// if(inputNum === numberOfDice){
//     alert("Congratulation!")
// }else{ alert("Try Again")}


                            //Chapter # 31 to 34

//Task-1

// var date = new Date();
// document.write(date);

//Task-2

// var monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
// var now = new Date();
// var theMonth = now.getMonth()
// var nameOfMonth = monthNames[theMonth];

// document.write(nameOfMonth);


//Task-3


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// alert(nameOfToday);


// Task-4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if(nameOfToday === "Sat" || "Sun"){
//     document.write("It's Fun day")
// }else{
//     document.write(nameOfToday);    
// }

//Task-5

// var dateNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21", "22", "23", "24", "25", "26", "27", "28", "29", "30",];
// var now = new Date();
// var theDay = now.getDate();
// var nameOfToday = dateNames[theDay];
// if(nameOfToday < 16){
//     document.write("First fifteen days of the month");
// }else{document.write("Last fifteen days of the month")}



//Task-6

// var date = new Date("Jan 1, 1970");
// var dateMili = date.getTime();
// var today = new Date();
// var todayMili = today.getTime();
// var accuTimeMili = Math.floor(todayMili/1000*60*60*24*365);
// var accuTimeMin = Math.floor(todayMili/60*24*365);
// document.write("Current Date: "+ date + "<br>Elapsed milliseconds since January 1, 1970: " + accuTimeMili + "<br>Elapsed Minutes since January 1, 1970: " + accuTimeMin);


//Task-7

// var timeNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21", "22", "23", "24"];
// var now = new Date();
// var theTime = now.getTime();
// var nameOfTime = timeNames[theTime];
// if(nameOfTime < 13){
//     document.write("It's AM");
// }else{document.write("It's PM")}


//Task-8

// var date = new Date();
// date.setTime(0000);
// date.setDate(31);
// date.setMonth(11);
// date.setFullYear(2020);

// document.write("Later date: " + date);

// Task-9

// var date = new Date("June 18, 2015");
// date = date.getDate();
// var today = new Date();
// today = today.getDay();
// var i = day - date

// var accuDays = Math.floor(i);

// document.write(accuDays +  " days have passed since 1st Ramadan, 2015");

// Task-10


// var date = new Date( );
// var since = new Date("Jan 1, 2020");
// var i = date -since 
// // var accuDays = Math.floor(i);
// var result = i/60*24*365;

// document.write("on reference date " + date + ",<br>" + result);


// Task-11

// var date = new Date();
// var hourAgo = new Date(1);
// var result = date - hourAgo;
// document.write("current date: " + date + ",<br>" + "1 hour ago, it was " + result);


//Task-12



//Task-13

 

//Task-14




                            //Chapter # 21 to 25

//Task-1



//Task-2


//Task-3


//Task-4


//Task-5


//Task-6


//Task-7


//Task-8



