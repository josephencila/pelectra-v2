const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const userId = "aN34jHNc4HWDjFyM6OL4GQsAluN2"


const createMonthlyExpenses = async (req, res) => {
    const {
        actualConsumption,
        actualBillExpense,
        selectedAt
    } = req.body

    try {
        await prisma.monthlyExpenses.create({
            data: {
                userId,
                actualConsumption,
                actualBillExpense,
                selectedAt
            }
        })

        return res.status(200).json({ message: 'Monthly Expense successfully created.' })
    } catch (error) {
        return res.status(400).json({ message: error.message ?? error })

    }
}

const readMonthlyExpenses = async (req, res) => {
    const { monthlyExpenseId } = req.params

    try {
        const AllMonthlyExpenses = await prisma.monthlyExpenses.findFirst({
            where: {
                userId,
                monthlyExpenseId
            },
            select: {
                monthlyExpenseId: true,
                userId: true,
                actualConsumption: true,
                actualBillExpense: true,
                selectedAt: true
            }
        })

        return res.status(200).json({ data: AllMonthlyExpenses })
    } catch (error) {
        return res.status(400).json({ message: error.message ?? error })

    }
}


const updateMonthlyExpenses = async (req, res) => {
    const { monthlyExpenseId } = req.params
    const {
        actualConsumption,
        actualBillExpense,
    } = req.body

    try {
        await prisma.monthlyExpenses.update({
            where: {
                userId,
                monthlyExpenseId
            },
            data: {
                actualConsumption,
                actualBillExpense,
            }
        })

        return res.status(200).json({ message: 'Monthly Expense successfully updated.' })
    } catch (error) {
        return res.status(400).json({ message: error.message ?? error })

    }
}

const deleteMonthlyExpenses = async (req, res) => {
    const { monthlyExpenseId } = req.params

    try {
        await prisma.monthlyExpenses.delete({
            where: {
                userId,
                monthlyExpenseId
            },
        })

        return res.status(200).json({ message: 'Monthly Expense successfully deleted.' })
    } catch (error) {
        return res.status(400).json({ message: error.message ?? error })

    }
}

module.exports = {
    createMonthlyExpenses,
    readMonthlyExpenses,
    updateMonthlyExpenses,
    deleteMonthlyExpenses
}