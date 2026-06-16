  const users = require("../data/users")
  
  const findAll = () => {
        return users
    }
    
    const create = (user) => {
        users.push(user)

        return user
    }

    module.exports = {
        create,
        findAll
    }
