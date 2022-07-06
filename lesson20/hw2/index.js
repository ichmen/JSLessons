/* eslint-disable max-classes-per-file */

class User {
  // put your code here
  // #id;
  // #name;
  // #sessionId;
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  // #users;
  constructor(users) {
    this._users = users;
    Object.freeze(this._users);
    // this.users.push(25);
  }
  get users() {
    return this._users;
  }
  getUserNames() {
    return this._users.map(({ name }) => name);
  }
  getUserIds() {
    return this._users.map(({ id }) => id);
  }
  getUserNameById(userId) {
    return this._users.filter(({ id }) => id == userId).map(({ name }) => name)[0];
  }
}

// examples
const user1 = new User('1', 'Tom', 'session-id');
const user2 = new User('2', 'Bob', 'session-id');
const user3 = new User('3', 'Ann', 'session-id');

const users = new UserRepository([user1, user2, user3]);
// получить свойства можем
console.log(user1.id); // ===> '1'
console.log(user2.name); // ===> 'Tom'
console.log(user3.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
