const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = [{
    name : 'Dison59160758',
    phoneNumber : '0639596145'
},
{
    name : 'Sasiprapa59160902',
    phoneNumber : '0900164853'
},
{
    name : 'Suchada59160700',
    phoneNumber : '0863472758'
},
{
    name : 'Sutarinee59160524',
    phoneNumber : '0639596145'
}]

app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts
app.get('/contacts',(req,res) => {
    res.json(contacts)
})


/// TODO: Develop POST /contacts
app.post('/contacts',(req,res) => {
    let newContacts = req.body
    contacts.push(newContacts)
    res.json(newContacts)
})


app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
