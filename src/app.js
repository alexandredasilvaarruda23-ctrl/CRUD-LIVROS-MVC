const express = require("express")

const userController = require("./controllers/userController")

const app = express()

app.get("/", (request, response) => {
    response.send("teste")
})

module.exports = app

app.use(express.json())

app.post("/users", userController.createUser)
