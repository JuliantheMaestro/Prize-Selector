let prize = prompt("Select a number between 0 - 10");

let numPrompt = Number(prize); 

let outputMess = console.log(`My selection: ${prize} `);

switch(numPrompt) {

    case 0:
    case 1:
    case 2:
    case 3:        
        console.log("We regret to inform you that you did not win the prize");
        break;
    case 4:
    case 5:
        console.log("Hey you won a goldfish!");
        break;
    case 6:
    case 7:
        console.log("Holy cow! You won a cow!");
        break;
    case 8:
    case 9: 
        console.log("Holy Moly! You won a giant mole!");
        break;
    case 10:
        console.log("Righteous!! You won the island of Madagascar!");
        break;
    default:
        console.log("Come on, please enter in a valid number");
}

