const express = require('express')
const router = express.Router()
const zodMiddleware = require('../middleware/zodMiddleware')
const {
    monthlyExpensesSchema,
    readMonthlyExpensesSchema,
    updateMonthlyExpensesSchema
} = require('../utils/schema/zodSchema')
const {
    createMonthlyExpenses,
    readMonthlyExpenses,
    updateMonthlyExpenses,
    deleteMonthlyExpenses
} = require('../controllers/montlyExpensesController')


router.post('/create', zodMiddleware(monthlyExpensesSchema), createMonthlyExpenses)
router.post('/read/:monthlyExpenseId', zodMiddleware(readMonthlyExpensesSchema), readMonthlyExpenses)
router.put('/update/:monthlyExpenseId', zodMiddleware(updateMonthlyExpensesSchema), updateMonthlyExpenses)
router.delete('/delete/:monthlyExpenseId', zodMiddleware(readMonthlyExpensesSchema), deleteMonthlyExpenses)


module.exports = router