const express = require('express');

const app = express();

require('./db/config');

const cors = require('cors');

const user = require('./db/users');
const users = require('./db/users');

// middleware
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res)=>{

    let user = new users(req.body);
    let result = await user.save();
    res.send(result);
})

app.listen(5000);