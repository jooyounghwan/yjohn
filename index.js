const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mds:!wndudghks96@cluster0-h5xye.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false}).then(()=> console.log('MonggoDB Connected....'))
    .catch(err => console.log(err))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

mongodb+srv://mds:mds123@cluster0-h5xye.mongodb.net/test?retryWrites=true&w=majority