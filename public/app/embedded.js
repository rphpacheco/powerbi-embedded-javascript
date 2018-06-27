import { reportConfig } from '../utils/reportConfig.js'
import { $, models, log, handleStatus } from '../utils/tools.js'
import { getToken } from '../utils/getToken.js'
import { userBinding } from '../utils/userBinding.js'

window.onload = async () => {

    const userInfo = await userBinding('raphael.pacheco', '11111')
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
    
    // Interacting with the power bi embedded application
    report.config.settings.filterPaneEnabled = true
    report.config.settings.navContentPaneEnabled = false

    // add filters
    let filter = (table, column, value) => {

        let schemaFilter = {
            $schema: 'http://powerbi.com/product/schema#basic',
            target: {
                table: table,
                column: column
            },
            operator: "In",
            values: [value]
        }

        return schemaFilter

    }

    let filterBtn = $('#matriz')

    await filterBtn.addEventListener('change', () => {
        let value = filterBtn.value,
        filterConfig = filter('dimFlagsCompanies', 'Matriz', value)

        if(value === 'null'){
            report.removeFilters([null])
                .catch(error => log(error))
        }else{
            report.setFilters([filterConfig])
                .catch(error => error)
        }
        
    })

    // edit mode
    /*report.config.permissions = models.Permissions.All
    report.config.viewMode = models.ViewMode.Edit
    */

    //report.config.pageName = "Área de Atuação Unimed" // did not work
  
}