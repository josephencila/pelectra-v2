const express = require('express')
const router = express.Router()
const zodMiddleware = require('../middleware/zodMiddleware')
const {createAppliancesSchema} = require('../utils/schema/zodSchema')

const {
    createAppliances,
    readAppliances,
    updateAppliancesById,
    deleteAppliancesById
} = require('../controllers/appliancesController')


router.post('/create',zodMiddleware(createAppliancesSchema), createAppliances)
router.post('/read', readAppliances)
router.put('/update/:userId/:appliancesId', updateAppliancesById)
router.delete('/delete/:userId/:appliancesId', deleteAppliancesById)






module.exports = router