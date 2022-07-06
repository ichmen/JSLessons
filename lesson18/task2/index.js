const wallet = {
  transactions: [32, 5, 56, 2, 3, 34, 465],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};
wallet.getMax();
