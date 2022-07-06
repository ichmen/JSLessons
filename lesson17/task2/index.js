const callbackPrompt = {
  message: 'Input',
  showPrompt() {
    console.log(prompt(this.message));
  },
  showDeferredPrompt(delay) {
    setTimeout(this.showPrompt.bind(callbackPrompt), delay);
  },
};

const user = callbackPrompt;
