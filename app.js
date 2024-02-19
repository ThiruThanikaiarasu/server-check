require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000 

app.get('/', (request, response) => {
    response.status(200).json({message: "It's working"})
})

app.listen(PORT, console.log(`Server is running at http://localhost:3500`))


