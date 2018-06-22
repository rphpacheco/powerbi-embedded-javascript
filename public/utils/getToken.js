import { handleStatus, log } from './tools.js'

const API = {
    app : '/tokenGenerate?type=app',
    report : '/tokenGenerate?type=report'
}

export const getToken = async (type, user, report, token) => {

    const headers = {
        headers : {
            'x-app-id-report' : !report ? null : report.id,
            'x-app-id-group' : !report ? null : report.group_id,
            'x-app-token' : token,
            'x-app-user' : !user ? null : user.username,
            'x-app-password' : !user ? null : user.password
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