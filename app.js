// Conditionals
//if(this is the condition to be tested){
 //   this is the work that should happen based off the condition
//}
var x = 50
if(x == 100){
    console.log("Hello")
}
else if(x == 50){
    console.log("Good morning")
}
else{
    console.log("Goodbye")
}
// user should have a grade
// if usersGrade is greater than or equal to 90,console.log("You get an A")
var usergrade = 68
if(usergrade >= 90){
    console.log("You get a A")
}
else if (usergrade >= 80){
    console.log("You get B")
}
else if (usergrade >= 70){
    console.log("You get C")
}
else if (usergrade >=65){
    console.log("You get a D")

}
else  {usergrade <65
    console.log("you get F")
}

// if userGrade is greater than or equal to 80 and less than 90,console.log("you get a B")
// if userGrade is greater than or equal to 70 and less than 80,console.log("You get a C")
// if userGrade is greater than or equal to 65,console.log("you get a D"
//if Usergrade is less than 65,console.log("you get F")

// if userinput is positive
var userinput = 0
if (userinput > 0){
    console.log("Input number is positive")
}
// if userinput is zero
else if (userinput == 0){
    console.log("input number is zero")
}
// if userinput is negative
else {
    console.log("Input number is negative")
}