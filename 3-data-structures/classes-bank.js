class BankAccount {
  constructor(fullName, address, id, accountType, associatedAccount) {
    this.fullName = fullName;
    this.address = address;
    this.id = id;
    this.balance = 0;
    this.accountType = accountType || "checking"; // TODO: savings?
    this.transactionHistory = [];
    this.associatedAccount = associatedAccount;
  }

  // the # makes this a private method that can't be accessed from outside the class definition
  #getNumber(num) {
    if (typeof num === "number" && num >= 0) {
      return num;
    }
    throw new Error(`${num} is not a valid number`); // TODO: make this more legible
  }

  checkBalance() {
    console.log(`Current balance: ${this.balance}`);
  }

  deposit(amount) {
    try {
      this.balance += this.#getNumber(amount);
      this.transactionHistory.push({
        // TODO: make Transaction class
        type: "deposit",
        amount,
        date: new Date(),
        balance: this.balance,
      });
    } catch (error) {
      console.error(`Deposit failed: ${error.message}`);
    }
  }

  withdraw(amount) {
    // TODO: overdraft fee
    // TODO: overdraft from savings
    // this.associatedAccount.withdraw();
    try {
      amount = this.#getNumber(amount);
      if (amount > this.balance) {
        console.log("Insufficient Funds");
      } else {
        this.balance -= amount;
        this.transactionHistory.push({
          type: "withdrawal",
          amount,
          date: new Date(),
          balance: this.balance,
        });
      }
    } catch (error) {
      console.error(`Withdrawal failed: ${error.message}`);
    }
  }
}

// TODO: print transaction history method

mySavings = new BankAccount(
  "Danny Burrow",
  "123 Main St",
  "Oregon A123465",
  "savings"
);

console.log(mySavings);

const me = new BankAccount(
  "Danny Burrow",
  "123 Main St",
  "Oregon A123465",
  null,
  mySavings
);
me.deposit(100);
me.withdraw(70);
console.log(me);
me.checkBalance();

// me.#getNumber(80); // SyntaxError: Private field '#getNumber' must be declared in an enclosing class
