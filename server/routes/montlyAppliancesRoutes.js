const express = require('express')
const router = express.Router()
const zodMiddleware = require('../middleware/zodMiddleware')
const { monthlyAppliancesSchema } = require('../utils/schema/zodSchema')
const {
    createMonthlyAppliances,
    readMonthlyAppliances,
    updateMonthlyAppliances,
    deleteMonthlyAppliances
} = require('../controllers/montlyAppliancesController')

router.post('/create', zodMiddleware(monthlyAppliancesSchema), createMonthlyAppliances)
router.post('/read', readMonthlyAppliances)
router.put('/update/:monthlyAppliancesId', zodMiddleware(monthlyAppliancesSchema), updateMonthlyAppliances)
router.delete('/delete/:monthlyAppliancesId', deleteMonthlyAppliances)

module.exports = router


