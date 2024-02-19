require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.status(200).json({message: "It's working"})
})

app.listen(process.env.PORT)


