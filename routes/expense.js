const path = require('path');

const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

router.get('/', expenseController.getAddExpense);

router.post('/', expenseController.postAddExpense);

router.post('/delete-expense', expenseController.postDeleteExpense);


module.exports = router;
