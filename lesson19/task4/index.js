const user = {
  firstName: '',
  lastName: '',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(strFullName) {
    [this.firstName, this.lastName] = strFullName.split(' ');
  },
};
export default user;
