require('dotenv').load()

const users = [
    {
        id : '1',
        username : 'raphael.pacheco',
        password : '11111',
        powerbi : {
            username : process.env.USERNAME,
            password : process.env.PASSWORD,
            reports : [
                {
                    name : 'Unimed - Mercado',
                    id : '26733f94-6c31-4293-be88-fb8ba7cba2af',
                    group_id : '516ada34-178d-4d9c-b998-5ddd1c85ff63'
                },
                {
                    name : 'Report Jira',
                    id : 'c0009bab-0b89-4f16-a057-6725b1b90176',
                    group_id : '7b80fe6e-3950-414d-870e-6a0df0a21174'
                }
            ]
        }
    },
    {
        id : '2',
        username : 'gustavo.trevisan',
        password : '22222',
        powerbi : {
            username : process.env.USERNAME,
            password : process.env.PASSWORD,
            reports : [
                {
                    name : 'Empresas do Brasil',
                    id : '1729ca6c-bff4-464e-85e0-37212be90c27',
                    group_id : '516ada34-178d-4d9c-b998-5ddd1c85ff63'
                },
                {
                    name : 'Telefonica - Erbs',
                    id : '2f7065ee-0185-4463-8453-b25d55ee659d',
                    group_id : '516ada34-178d-4d9c-b998-5ddd1c85ff63'
                }
            ]
        }
    },
    {
        id : '3',
        username : 'esequiel.virtuoso',
        password : '33333',
        powerbi : {
            username : process.env.USERNAME,
            password : process.env.PASSWORD,
            reports : [
                {
                    name : 'Auditoria_APPS',
                    id : 'afa9d307-910e-40b4-b387-95404f100e43',
                    group_id : '516ada34-178d-4d9c-b998-5ddd1c85ff63'
                },
                {
                    name : 'QMC_Performance_Tasks',
                    id : '68059ed5-5715-455e-b0be-451ef69c5c97',
                    group_id : '516ada34-178d-4d9c-b998-5ddd1c85ff63'
                }
            ]
        }
    },
    {
        id : '4',
        username : 'ismael.virtuoso',
        password : '44444',
        powerbi : {
            username : process.env.USERNAME,
            password : process.env.PASSWORD,
            reports : [
                {
                    name : 'BI Lider_1986-2014',
                    id : '1f347ac7-33d0-407b-b165-c7112ba21421',
                    group_id : '530c1560-a193-4d0e-ab46-c18a4759c085'
                },
                {
                    name : 'BI Lider_2015-2018',
                    id : '1f347ac7-33d0-407b-b165-c7112ba21421',
                    group_id : '530c1560-a193-4d0e-ab46-c18a4759c085'
                }
            ]
        }
    }
]

module.exports = app => {
    app.get('/users', (req, res) => res.json(users))
}