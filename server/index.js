const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//routes
const appliancesRoutes = require('./routes/appliancesRoutes')
require('dotenv').config()


const { NODE_PORT
} = process.env
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


app.use('/api/v1/appliances',appliancesRoutes)

app.listen(NODE_PORT, () => {
    console.log(`Server is running in port ${NODE_PORT}`)
})