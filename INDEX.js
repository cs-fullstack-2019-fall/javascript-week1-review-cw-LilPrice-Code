// Problem 1
// Asks the user to enter 1 for 'count down' and 2 for 'count up'. Keep ask them them to do that until they enter 'q' to quit. If they enter 1, ask them what they want to count down to. Start from 0 and count down to that number by ones. If they enter 2, ask them what they want to count up to. Start from 0 and count up to the number by ones.

// var count1 = 0;
// var count2 = 0;
//
// while (0===0){
//     var Opt = prompt("Enter (1) to count down. Enter (2) to count up. Enter (q) to quit.");
//     if (Opt === "q" || Opt === "Q"){
//         break;
//     }
//     else if (Opt === "1") {
//         var userNum1 = parseInt(prompt("Enter a negative number to count down to."));
//         if (userNum1 < 0){
//             while (count1 >= userNum1){
//                 console.log(count1);
//                 count1 = count1 - 1;
//             }
//         }
//         else {
//             alert("Invalid Answer")
//         }
//
//     }
//     else if (Opt === "2"){
//         var userNum2 = parseInt(prompt("Enter a number to count to."));
//         if (userNum2 > 0){
//             while (count2 <= userNum2){
//                 console.log(count2);
//                 count2++;
//             }
//         }
//         else{
//             alert("invalid answer")
//         }
//
//     }
//     else {
//         alert("Invalid Answer")
//     }
// }

//     Challenge
// Asks the user to enter their name and keep asking them until they enter 'quit' to quit. If they enter Kevin say 'What's up Kevin'. If they enter Kenn say 'Hi Kenn'. If they enter Autumn say 'Good morning Autumn'. If they don't enter any of those names say 'Hello [NAME]'.

while( 0===0){
    var userName = prompt("What your name?");
    if (userName === "Kevin"){
        alert("What's up Kevin.")
    }
    else if (userName === "Kenn"){
        alert("Hi Kenn")
    }
    else if (userName === "Autumn"){
        alert("Good Morning Autumn")
    }
    else if (userName === "quit"){
        break;
    }
    else {
        alert("Hello " + userName)
    }
}