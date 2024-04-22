const express = require('express')
const router = express.Router()
const zodMiddleware = require('../middleware/zodMiddleware')
const { monthlyAppliancesSchema } = require('../utils/schema/zodSchema')
const { createMonthlyAppliances, readMonthlyAppliances,updateMonthlyAppliances } = require('../controllers/montlyAppliancesController')

router.post('/create', zodMiddleware(monthlyAppliancesSchema), createMonthlyAppliances)
router.post('/read', readMonthlyAppliances)
router.put('/update/:appliancesListId',zodMiddleware(monthlyAppliancesSchema), updateMonthlyAppliances)
module.exports = router
// router.put('/update/:appliancesId', zodMiddleware(appliancesSchema), updateAppliancesById)
// router.delete('/delete/:appliancesId', deleteAppliancesById)

