const Expense = require('../models/expense');
exports.getAddExpense = (req, res, next) => {
  Expense.findAll()
    .then((expenses) => {
      res.render('expense', {
        expenses: expenses,
        pageTitle: 'All Expenses',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};


exports.postAddExpense = (req, res, next) => {
  const amount = req.body.amount;
  const description = req.body.description;
  const category = req.body.category;
  Expense.create({
    amount: amount,
    description: description,
    category:category
  })
  .then(() => {
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err)
  })
};

exports.postDeleteExpense = (req,res,next) => {
  const expenseid = req.body.expenseId;

  Expense.findByPk(expenseid)
  .then((expense) => {
    expense.destroy();
    res.redirect('/');
  }) 
  .catch((err) => console.log(err));
}