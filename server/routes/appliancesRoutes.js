const express = require('express')
const router = express.Router()
const zodMiddleware = require('../middleware/zodMiddleware')
const { appliancesSchema } = require('../utils/schema/zodSchema')

const {
    createAppliances,
    readAppliances,
    updateAppliancesById,
    deleteAppliancesById
} = require('../controllers/appliancesController')


router.post('/create', zodMiddleware(appliancesSchema), createAppliances)
router.post('/read', readAppliances)
router.put('/update/:appliancesId', zodMiddleware(appliancesSchema), updateAppliancesById)
router.delete('/delete/:appliancesId', deleteAppliancesById)






module.exports = router