const express = require('express')
var app = express()

const checkAccess = require('./checkAccess')

app.use(express.json())

app.get('/get-all-user', checkAccess(['admin', 'superadmin']), (req, res) => {
    res.status(200).json({'message': 'operation success/response to get'})
})

app.get('/global-country',  checkAccess(['staff', 'admin', 'superadmin']), (req, res) => {
    res.status(200).json({'message': 'operation success/response to get'})
})

// error handler
app.use((req, res, next) => {
    res.status(404).json({'message': 'route not found'})
});

app.listen(8000, () => {
    console.log('Server running on localhost:8000');
});