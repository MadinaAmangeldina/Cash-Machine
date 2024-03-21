const readlineSync = require('readline-sync');

let balance = 1000;

console.log('Welcome to Bank ATM.');

function userFunction (c) {
  
  let endProgram = "";
  let depositAmount = "";
  let withdrawalAmount = "";
  
  do {

    const operation = readlineSync.question(`Please type an operation you would like to perform(check balance/deposit/withdraw): `).toLowerCase();
    
    if (operation === 'check balance' || operation === 'check' || operation === 'balance') {

      console.log(`Your account balance is £${balance}`)
      endProgram = readlineSync.question(`Would you like to continue? (Y/N): `).toLowerCase();

    } else if (operation === 'deposit') {

      depositAmount = parseInt(readlineSync.question('Enter the deposit amount: ').toLowerCase());
      balance += depositAmount;
      console.log(`The deposit has been added to your account. Your balance is £${balance}`);
      endProgram = readlineSync.question(`Would you like to continue? (Y/N): `).toLowerCase();

    } else if (operation === 'withdraw') {

      withdrawalAmount = parseInt(readlineSync.question('Enter the withdrawal amount: ').toLowerCase());

        if (withdrawalAmount < balance) {

          balance -= withdrawalAmount;
          console.log(`Your account balance is now £${balance}`)
          endProgram = readlineSync.question(`Would you like to continue? (Y/N): `).toLowerCase();

        } else {
          endProgram = readlineSync.question(`You don\'t enough funds in your account. Would you like to continue? (Y/N): `).toLowerCase();
        }
    } else {

      console.log("Please enter a valid operation.")
      endProgram = readlineSync.question(`Would you like to continue? (Y/N): `).toLowerCase();
    }
    
  } while (endProgram === 'y' || endProgram ===  'yes');
}

userFunction();

console.log(`Thank you for using Bank ATM!`);