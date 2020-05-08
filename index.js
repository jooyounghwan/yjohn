const express = require('express')
const app = express()
const port = 5000
const {User} = require("./models/User");
const bodyParser = require('body-parser');
const config = require("./config/key");
// www이런식으로 된 url들을 가져올수있게 해준다
app.use(bodyParser.urlencoded({extended: true}));

//json형식을 가져오게 해준다
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,
    {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false}).then(()=> console.log('MonggoDB Connected....'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello Worldasd!@#!@#!@#!@#!@#asasd!'))

app.post('/register', (req, res) => {

//회원 가입 할때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다

// {
//  id:'asd',
//  password: "123"
// }  원래 이런식으로 해야하는데 바디파서 떄문에 간단하게 할수있다
    const user = new User(req.body)

    user.save((err, doc) => {
        if (err) return res.json ({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



