const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const userId = "aN34jHNc4HWDjFyM6OL4GQsAluN2"

//NOTE: SELECTED NEEDS TO BE ISO STRING
const createMonthlyAppliances = async (req, res) => {
    const {
        appliancesId,
        appliancesName,
        consumptionPerHr,
        dailyUsage,
        daysInMonth,
        consumptionPerMonth,
        selectedAt
    } = req.body


    try {
        await prisma.monthlyListOfAppliances.create({
            data: {
                userId,
                appliancesId,
                appliancesName,
                consumptionPerHr,
                dailyUsage,
                daysInMonth,
                consumptionPerMonth,
                selectedAt
            }
        })

        return res.status(200).json({ message: 'Appliances successfully added.' })
    } catch (error) {

        return res.status(400).json({ message: error.message ?? error })

    }
}

const readMonthlyAppliances = async (req, res) => {

    try {
        const allMonthlyAppliances = await prisma.monthlyListOfAppliances.findMany({
            where: {
                userId,
            },
            select: {
                monthlyAppliancesId: true,
                appliancesName: true,
                consumptionPerHr: true,
                dailyUsage: true,
                daysInMonth: true,
                consumptionPerMonth: true,
            }
        })

        return res.status(200).json({ data: allMonthlyAppliances })
    } catch (error) {

        return res.status(400).json({ message: error.message ?? error })

    }
}


const updateMonthlyAppliances = async (req, res) => {
    const { appliancesId } = req.params
    const {
        appliancesName,
        consumptionPerHr,
        dailyUsage,
        daysInMonth,
        consumptionPerMonth,
    } = req.body
    try {
        const allMonthlyAppliances = await prisma.monthlyListOfAppliances.update({
            where: {
                userId,
                appliancesId
            },
            data: {
                appliancesName,
                consumptionPerHr,
                dailyUsage,
                daysInMonth,
                consumptionPerMonth,
            }
        })

        return res.status(200).json({ data: allMonthlyAppliances })
    } catch (error) {

        return res.status(400).json({ message: error.message ?? error })

    }
}

module.exports = {
    createMonthlyAppliances,
    readMonthlyAppliances,
    updateMonthlyAppliances,

}