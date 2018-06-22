import { handleStatus, log } from './tools.js'

const API = {
    app : '/tokenGenerate?type=app',
    report : '/tokenGenerate?type=report'
}

export const getToken = async (type, token) => {

    const headers = {
        headers : {
            'x-app-token' : token
        }
    }

    return await fetch(API[type], headers)
        .then(handleStatus)
        .then(result => JSON.parse(result))
        .catch(error => {
            log(error)
            return Promise.reject('Token not found!')
        })
}