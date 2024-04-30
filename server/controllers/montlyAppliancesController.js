const { Prisma, PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { extractYearAndMonth } = require('../utils/helper')
const userId = "aN34jHNc4HWDjFyM6OL4GQsAluN2"

//NOTE: SELECTED DATE NEEDS TO BE ISO STRING
// desc create monthly appliances with userid
// route POST /api/v1/monthly-appliances/create
// private
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
        await prisma.monthlyAppliances.create({
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

// desc read all monthly appliances with userid
// route POST /api/v1/monthly-appliances/read/:skip/:take/:selectedAt
// private
const readMonthlyAppliances = async (req, res) => {
    const { skip, take, selectedAt } = req.params
    try {

        const query = {
            where: {
                userId,
                selectedAt: {
                    lte: new Date(selectedAt).toISOString(),
                    gte: new Date(selectedAt).toISOString()
                }
            },
            select: {
                monthlyAppliancesId: true,
                userId: true,
                appliancesId: true,
                appliancesName: true,
                consumptionPerHr: true,
                dailyUsage: true,
                daysInMonth: true,
                consumptionPerMonth: true,
                selectedAt: true,
            },
            orderBy:{
                selectedAt: 'asc'
            },
            skip: parseInt(skip),
            take: parseInt(take),
            
        }

        const [allMonthlyAppliances, count] = await prisma.$transaction([
            prisma.monthlyAppliances.findMany(query),
            prisma.monthlyAppliances.count({ where: query.where })
        ])

        return res.status(200).json({
            data: {
                count: count,
                appliances: allMonthlyAppliances
            }
        })

    } catch (error) {

        return res.status(400).json({ message: error.message ?? error })

    }
}

// desc update monthly appliances with userid and monthlyAppliancesId
// route PUT /api/v1/monthly-appliances/update/:monthlyAppliancesId
// private
const updateMonthlyAppliances = async (req, res) => {
    const { monthlyAppliancesId } = req.params
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
        await prisma.monthlyAppliances.update({
            where: {
                userId,
                monthlyAppliancesId
            },
            data: {
                appliancesId,
                appliancesName,
                consumptionPerHr,
                dailyUsage,
                daysInMonth,
                consumptionPerMonth,
                selectedAt
            }
        })

        return res.status(200).json({ message: 'Monthly Appliances successfully updated.' })
    } catch (error) {

        return res.status(400).json({ message: error.message ?? error })

    }
}


// desc delete monthly appliances with userid and monthlyAppliancesId
// route DELETE /api/v1/monthly-appliances/delete/:monthlyAppliancesId
// private
const deleteMonthlyAppliances = async (req, res) => {
    const { monthlyAppliancesId } = req.params

    try {
        await prisma.monthlyAppliances.delete({
            where: {
                userId,
                monthlyAppliancesId
            },
        })

        return res.status(200).json({ message: 'Monthly Appliances successfully deleted.' })
    } catch (error) {

        return res.status(400).json({ message: error.message ?? error })

    }
}

module.exports = {
    createMonthlyAppliances,
    readMonthlyAppliances,
    updateMonthlyAppliances,
    deleteMonthlyAppliances
}