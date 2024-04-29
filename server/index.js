const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//routes
const appliancesRoutes = require('./routes/appliancesRoutes')
const monthlyAppliancesRoutes = require('./routes/montlyAppliancesRoutes')
const montlyExpenses = require('./routes/montlyExpensesRoutes')

require('dotenv').config()


const { NODE_PORT } = process.env

const app = express()

app.use(express.json())

app.use(cors({
    origin : ['http://localhost:5000'],
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}))

app.use(morgan('tiny'))

app.use('/api/v1/appliances', appliancesRoutes)
app.use('/api/v1/montly-appliances', monthlyAppliancesRoutes)
app.use('/api/v1/monthly-expenses', montlyExpenses)

app.listen(NODE_PORT, () => {
    console.log(`Server is running in port ${NODE_PORT}`)
})

