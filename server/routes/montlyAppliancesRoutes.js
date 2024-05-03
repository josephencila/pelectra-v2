const express = require('express')
const router = express.Router()
const zodMiddleware = require('../middleware/zodMiddleware')
const { monthlyAppliancesSchema } = require('../utils/schema/zodSchema')
const {
    createMonthlyAppliances,
    readMonthlyAppliances,
    readMonthlyAppliancesByYear,
    updateMonthlyAppliances,
    deleteMonthlyAppliances
} = require('../controllers/montlyAppliancesController')

router.post('/create', zodMiddleware(monthlyAppliancesSchema), createMonthlyAppliances)
router.post('/read/:skip/:take/:selectedAt', readMonthlyAppliances)
router.post('/read/:selectedAt', readMonthlyAppliancesByYear)
router.put('/update/:monthlyAppliancesId', zodMiddleware(monthlyAppliancesSchema), updateMonthlyAppliances)
router.delete('/delete/:monthlyAppliancesId', deleteMonthlyAppliances)

module.exports = router


 