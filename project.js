/*
1.Deposit some money.
2.Determine number of lines to bet on.
3.Collect the bet amount.
4.Spin the slot machine.
5.Check if the user won.
6.Give the user their won prize.
7.Play again.
8.Exit the game. 
*/

//1.Deposit some money.
const prompt =require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT={//This means that there are 2 occurrences of A, 4 occurrences of B, 6 occurrences of C, and 8 occurrences of D.
  A:2,
  B:4,
  C:6,
  D:8,
};
const SYMBOL_VALUE={// This means their worth; A is worth 5 units, B is worth 4 units, C is worth 3 units, and D is worth 2 units.
  A:5,
  B:4,
  C:3,
  D:2,
};


const deposit=()=>{
   while (true) {
   const depositAmount =prompt ("Enter deposit amount: ");
   const numberDeposit = Number(depositAmount);
     if (isNaN(numberDeposit)||numberDeposit<=0)
      console.error("Invalid deposit amount, try again..");
   else{
       console.log(`Valid Amount Deposit: ${numberDeposit}`);
       return numberDeposit;
      }
    }  
};
//2.Determine number of lines to bet on.
const getNumberLine =()=>{
  while (true) {
    const lines =prompt ("Enter the number of line to bet(1-3): ");
    const numberOfLines = Number(lines);
      if (isNaN(numberOfLines)||numberOfLines<=0||numberOfLines>3)
       console.error("Invalid bet lines, try again..");
    else{
        console.log(`Line Selected: ${numberOfLines}`);
        return numberOfLines;
       }
     }  
};

//3.Collect the bet amount.
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.error("Invalid bet, try again.");
    } else {
      
      return numberBet;
    }
  }
};



//4.Spin Slot Machine
const spin=()=>{
 const symbols=[];
 for (const [symbol,count] of Object.entries(SYMBOL_COUNT)) {//const [symbol, count] uses array destructuring to assign the key to symbol and the value to count for each entry.
  for (let i = 0; i < count; i++) {//
    symbols.push(symbol);
  }

 }


//4.1] Rows & Coloumns
const reel=[];
for (let i = 0; i < COLS; i++) {
  reel.push([]);
  const reelSymbols=[...symbols];
  for (let j = 0; j < ROWS; j++) {
    const randomIndex = Math.floor(Math.random()*reelSymbols.length);
    const selectSymbol=reelSymbols[randomIndex];
    reel[i].push(selectSymbol);
    reelSymbols.splice(randomIndex,1);
    
  }
  
}
return reel;
};
const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};
//Print in proper rows
const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};
//Winnings
const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};
const game = () => {
  let balance = deposit();

  while (true) {
    console.log("You have a balance of $" + balance);
    const numberOfLines = getNumberLine();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("You won, $" + winnings.toString());

    if (balance <= 0) {
      console.log("You ran out of money!");
      break;
    }

    const playAgain = prompt("Do you want to play again (y/n)? ");

    if (playAgain != "y") break;
  }
};

game();
