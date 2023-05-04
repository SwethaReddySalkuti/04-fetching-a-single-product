const db = require('../util/database');


module.exports = class Expense {
  constructor(id, amount, description) {
    this.id = id;
    this.amount = amount;
    this.description = description;
  }

  save() {
    return db.execute(
      'INSERT INTO expenses (amount,description) VALUES (?, ?)',
      [this.amount, this.description]
    );
  }

  static deleteById(id) {
    return db.execute('DELETE FROM expenses where expenses.id = ?',[id]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM expenses');
  }

  
};
