import { log, handleStatus } from './tools.js'

export const userBinding = async (username, password) => {
    const appUser = { username, password }
    let user
    const users = await fetch('/users')
            .then(handleStatus)
            .then(users => users)
            .catch(error => {
                log(error)
                return Promise.reject('User not found!')
            })

    user = users.filter((value) => {
        if(value.username === username || value.password === password)
            return value
    })

    return user[0].powerbi
}