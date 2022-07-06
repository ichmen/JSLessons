export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    this.interval = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed == 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {
    return `${this.minsPassed}:${String(this.secondsPassed + 100).slice(1)}`;
  },
  stopTimer() {
    clearInterval(this.interval);
  },
  resetTimer() {
    clearInterval(this.interval);
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};
