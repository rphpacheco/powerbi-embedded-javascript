const request = require("request")

const tokenGenerate = async (req, res) => {

  const type = req.query.type,
  appIdReport = req.headers['x-app-id-report'] || null,
  appIdGroup = req.headers['x-app-id-group'] || null,
  appToken = req.headers['x-app-token'] || null,
  appUserName = req.headers['x-app-user'] || null,
  appUserPassword = req.headers['x-app-password'] || null

  const options = {
    app : { 
      method: 'POST',
      url: 'https://login.microsoftonline.com/common/oauth2/token',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded' },
      form: { 
        accessLevel: 'view',
        grant_type: 'password',
        scope: 'openid',
        resource: 'https://analysis.windows.net/powerbi/api',
        client_id: '2fa55e2e-ef05-43b5-b159-5c028bb7ab2a',
        username: appUserName,
        password: appUserPassword
      } 
    },
    report : { 
      method: 'POST',
      url: `https://api.powerbi.com/v1.0/myorg/groups/${appIdGroup}/reports/${appIdReport}/GenerateToken`,
      headers: {
        authorization: `Bearer ${appToken}`,
        'content-type': 'application/x-www-form-urlencoded' 
      },
      form: { 
        accessLevel: 'view' 
      }
    }
  }

  await request(options[type], (error, response, body) => {

      if (error) throw new Error(error)

      res.json(body)

  })  

}

module.exports = { tokenGenerate }