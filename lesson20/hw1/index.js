'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
// export
class Order {
  constructor(price, city, type) {
    this.price = Number(price);
    this.city = String(city);
    this.type = String(type);
    this.isConfirmed = false;
    this.id = String(Math.ceil(Math.random() * 1000));
  }

  checkPrice = () => this.price > 1000;
  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }
  isValidType = () => this.type === 'Buy' || this.type === 'Sell';

  // put your code here
}

let newOrder = new Order(27, 'dfs', 'Sell');
