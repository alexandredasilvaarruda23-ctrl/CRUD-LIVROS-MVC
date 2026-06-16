const userModel = require("../models/userModel")

const getAllusers = (req, res) =>{
    const users = userModel.findAll()

    return res.json()
}

const createUser = (req, res) => {
    const { name } = req.body

    const newUser = {
    id: Date.now(),
    name: name
    }

    const createdUser = userModel.create(newUser)

    return res.status(201).json(createdUser)
}

module.exports = {
    createUser,
    getAllusers
}
