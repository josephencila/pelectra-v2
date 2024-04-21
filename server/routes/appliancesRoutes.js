const express = require('express')
const router = express.Router()
const {
    createAppliances,
    readAppliances,
    updateAppliancesById,
    deleteAppliancesById
} = require('../controllers/appliancesController')


router.post('/create/:userId', createAppliances)
router.post('/read/:userId', readAppliances)
router.put('/update/:userId/:appliancesId', updateAppliancesById)
router.delete('/delete/:userId/:appliancesId', deleteAppliancesById)






module.exports = router