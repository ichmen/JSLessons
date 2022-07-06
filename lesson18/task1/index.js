/* enlist-disable*/

const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Ann', age: 17, email: 'ann@server.com' },
    { name: 'Tom', age: 19, email: 'ann@server.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({ message: `Dear ${name}! ${this.message}`, email }));
  },
};
console.log(event.getInvitations());
