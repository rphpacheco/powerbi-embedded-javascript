const app = require('./config/server'),
port = 4000

app.listen(port, () => console.log(`Server is running on port ${port}, at http://localhost:${port}`))