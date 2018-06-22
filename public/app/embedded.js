import { reportConfig } from '../utils/reportConfig.js'
import { $, models, log } from '../utils/tools.js'
import { getToken } from '../utils/getToken.js'

window.onload = async () => {

    const appToken = await getToken('app')
        .then(result => result)
        .catch(error => log(error))

    const reportToken = await getToken('report', appToken.access_token)
        .then(result => result)
        .catch(error => log(error))

	let rpContainer = $('.reportContainer'),
    report = powerbi.embed(rpContainer, reportConfig(models, reportToken.token))

}