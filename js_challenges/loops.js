let today="Saturday"
/*
This challenge file was created so I could write code off my heart without
code references.
*/

//how to write a for loop that prints my name 10 times
for(let i = 0; i <10; i++){
    console.log("Adam")
}

let count=0;


//how to write a while loop that prints my surname 10 times
while (count < 10){
    console.log("Omar") 
    count++
}

//how to show what I do throughout the week using switch
switch (today) {
    case "Saturday":
      console.log("Come to coding class.")  
        break;

        case "Sunday":
      console.log("You can rest.")  
        break;

        case "Monday":
      console.log("Go to school.")  
        break;

        case "Tuesday":
      console.log("Go football today.")  
        break;

        case "Wednesday":
      console.log("Go tuition.")  
        break;

        case "Thursday":
      console.log("Visit your friends.")  
        break;

        case "Friday":
      console.log("Go to the cinema.")  
        break;


        case "holiday":
      console.log("do what you want.")  
        break;





    default:
        console.log("That isn't a day of the week")
        break;
}

//write a do while loop which prints the word noor 10 times
do {
  console.log("noor")
    count++  
} while (count<10);