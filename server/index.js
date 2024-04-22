const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
//routes
const appliancesRoutes = require('./routes/appliancesRoutes')
const monthlyAppliancesRoutes = require('./routes/montlyAppliancesRoutes')
const zodMiddleware = require('./middleware/zodMiddleware')
const { monthlyAppliancesSchema } = require('./utils/schema/zodSchema')
const userId = "aN34jHNc4HWDjFyM6OL4GQsAluN2"
require('dotenv').config()


const { NODE_PORT } = process.env

const app = express()

app.use(express.json())

app.use(cors({
    methods: [''],
    origin: ['POST', 'GET', 'PUT', 'DELETE']
}))

app.use(morgan('tiny'))

BigInt.prototype.toJSON = function () {
    return this.toString()
}


app.use('/api/v1/appliances', appliancesRoutes)

 app.use('/api/v1/montly-appliances', monthlyAppliancesRoutes)


app.listen(NODE_PORT, () => {
    console.log(`Server is running in port ${NODE_PORT}`)
})