const Expense = require('../models/expense');
exports.getAddExpense = (req, res, next) => {
  Expense.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('expense', {
        expenses: rows,
        pageTitle: 'All Expenses',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};


exports.postAddExpense = (req, res, next) => {
  const amount = req.body.amount;
  const description = req.body.description;
  const expense = new Expense(null, amount,description);
  expense
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.postDeleteExpense = (req,res,next) => {
  const expenseid = req.body.expenseId;
  console.log(expenseid);
  Expense.deleteById(expenseid)
  .then(() => {
    res.redirect('/');
  }) 
  .catch((err) => console.log(err));
}