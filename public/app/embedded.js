import { reportConfig } from '../utils/reportConfig.js'
import { $, models, log, handleStatus } from '../utils/tools.js'
import { getToken } from '../utils/getToken.js'
import { userBinding } from '../utils/userBinding.js'

window.onload = async () => {

    const userInfo = await userBinding('raphael.pacheco', '12345')
        .then(user => user)
        .catch(error => log(error)),
    position = 0,
    reportInfo = userInfo.reports[position]
    
    const appToken = await getToken('app', userInfo, reportInfo)
        .then(result => result)
        .catch(error => log(error)),
    reportToken = await getToken('report', userInfo, reportInfo, appToken.access_token)
        .then(result => result)
        .catch(error => log(error))

	let rpContainer = $('.reportContainer'),
    report = powerbi.embed(rpContainer, reportConfig(models, userInfo, reportInfo, reportToken.token))

}