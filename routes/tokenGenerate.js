const request = require("request")

const tokenGenerate = async (req, res) => {

  const type = req.query.type
  const appToken = req.headers['x-app-token']

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
        client_id: '<client_id>',
        username: '<username>',
        password: '<password>' 
      } 
    },
    report : { 
      method: 'POST',
      url: 'https://api.powerbi.com/v1.0/myorg/groups/<group_id>/reports/<report_id>/GenerateToken',
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