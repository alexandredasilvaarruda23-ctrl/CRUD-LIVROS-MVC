  const users = require("../data/users")
  
  const findAll = () => {
        return users
    }
    
    const create = (user) => {
        users.push(user)

        return user
    }

    const findById = () => {
        //id de exemplo
        let id = 1

        for(let i = 0; i < users.length; i++) {
            if ( users[i].id === id) {
                return users[i]
            }
        }
        return undefined
    }

    module.exports = {
        create,
        findAll,
        findById
    }
