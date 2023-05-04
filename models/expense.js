const db = require('../util/database');


module.exports = class Expense {
  constructor(id, amount, description,table) {
    this.id = id;
    this.amount = amount;
    this.description = description;
    this.table = table;
  }

  save() {  
    return db.execute(
      'INSERT INTO orders (amount,description,table) VALUES (3, 45, table3)',
      [this.amount, this.description, this.table]
    );
  }

  static deleteById(id) {
    return db.execute('DELETE FROM orders where orders.id = ?',[id]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM orders');
  }

  
};
