//  Loops are used to execute a piece of code again & again



//  Simple For Loop
 
// First Condition ==>   Initailize Condition  ( let i = 0; ) 
// Second Condition ==>  Stoping Condition     ( i < 10; )
// Third Condition ==>  Updation Condition     ( i++ )

// for(let i = 0; i < 10; i++){
//     console.log("Hello JavaScript");    //10 Hello JavaScript
// }



//  For Loop with variable

// let num = 5;
// for(let i = 0; i < num; i++){
//     console.log("Hello JavaScript");     // 5 Hello JavaScript
    
// }



//  For Loop with Promot("Enter Number")

// let num = prompt("Enter the Number");
// for(let i = 0; i < num; i++){
//     console.log("Hello JavaScript");
    
// }


//  Print even numbers from 2 to 10

// for(let i = 2; i <= 10; i += 2){
//     console.log(i);               //  2 4 6 8 10
// }



//  Loops through ana Array

// const fruits = ["Apple", "Banana", "Mango",];

// for(let i = 0; i < fruits.length; i++){
//     co5nsole.log(fruits[i]);              //  Apple  Banana  Mango
    
// }


//  CountDown from 5 to 1

// for(let i = 5; i >= 1; i--){
//     console.log(i);           //   5 4 3 2 1 
    
// }



//  skip even numbers (use continue)

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0) continue;
//     console.log(i);          //   1 3 5 7 9
    
// }


 //  skip odd numbers (use continue)

// for(let i = 1; i <= 10; i++){
//     if(i % 2 !== 0) continue;
//     console.log(i);            // 2 4 6 8 10
// }



//  Stop Loop at a specific value (use break)

// for(let i = 1; i <= 10; i++){
//     if(i === 6) break;
//     console.log(i);        //  1 2 3 4 5 
// }



// Math Table

// let number = prompt("Enter the Number");
// for(let i = 1; i <= 10; i++){
//     console.log(`${number} x ${i} = ${number * i}`);
    
// }