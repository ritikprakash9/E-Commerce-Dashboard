const express = require('express');

const app = express();

require('./db/config');

const user = require('./db/users');
const users = require('./db/users');

app.use(express.json());
app.post("/register", async (req, res)=>{

    let user = new users(req.body);
    let result = await user.save();
    res.send(result);
})

app.listen(5000);