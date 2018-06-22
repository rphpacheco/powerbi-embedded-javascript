export const $ = params => document.querySelector(params)

export const models = window['powerbi-client'].models

export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.statusText)

export const log = param => {
    console.log(param)
    return param
}