const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// desc create appliances with userid
// route POST /api/v1/appliances/create/:userId
// private
const createAppliances = async (req, res) => {
    const { appliancesName, consumptionPerHr } = req.body
    
    const userId = "aN34jHNc4HWDjFyM6OL4GQsAluN2"
    try {
        await prisma.appliances.create({
            data: {
                userId,
                appliancesName,
                consumptionPerHr
            }
        })
        return res.status(200).json({ message: 'Appliances successfully created.' })
    } catch (error) {
        return res.status(400).json({ message: error.message ?? error })
    }
}

// desc read all appliances related to userid
// route POST /api/v1/appliances/read/:userId
// private
const readAppliances = async (req, res) => {
    const userId = "aN34jHNc4HWDjFyM6OL4GQsAluN2"
    try {
        const allAppliances = await prisma.appliances.findMany({
            where: {
                userId,
            },
            select: {
                userId: true,
                appliancesName: true,
                consumptionPerHr: true
            }
        })
        return res.status(200).json({ message: allAppliances })
    } catch (error) {
        return res.status(400).json({ message: error.message ?? error })
    }
}
// desc update appliances using userid and appliancesid
// route PUT /api/v1/appliances/update/:userId/:appliancesId
// private
const updateAppliancesById = async (req, res) => {
    const { userId, appliancesId } = req.params
    const { appliancesName, consumptionPerHr } = req.body

    if (!userId || !appliancesId) {
        return res.status(400).json({ message: 'Incomplete data' })
    }
    try {
        const allData = await prisma.appliances.update(
            {
                where: {
                    userId,
                    appliancesId
                },
                data: {
                    appliancesName,
                    consumptionPerHr
                }
            }
        )
        return res.status(200).json({ message: allData })
    } catch (error) {
        return res.status(400).json({ message: error.message ?? error })
    }
}

// desc delete appliances using userid and appliancesid
// route DELETE /api/v1/appliances/delete/:userId/:appliancesId
// private
const deleteAppliancesById = async (req, res) => {
    const { userId, appliancesId } = req.params
    if (!userId || !appliancesId) {
        return res.status(400).json({ message: 'Incomplete data' })
    }
    try {
        const allData = await prisma.appliances.delete(
            {
                where: {
                    appliancesId: appliancesId,
                },

            }
        )
        return res.status(200).json({ message: allData })
    } catch (error) {
        return res.status(400).json({ message: error.message ?? error })
    }
}


module.exports = {
    createAppliances,
    readAppliances,
    updateAppliancesById,
    deleteAppliancesById,
}