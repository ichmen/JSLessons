class Wallet {
  balance = 0;
  getBalance() {
    return this.balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance < amount) {
      console.log('Not enough funds');
      return;
    }
    this.balance -= amount;
  }
}
