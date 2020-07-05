const express = require('express')

const app = express()

const { User } = require('./app/models')

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))


app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// app.get('/users', (req, res) => { })

// app.post('/users', (req, res) => { })

// app.get('/users/:id', (req, res) => { })

// app.put('/users/:id', (req, res) => { })

// app.delete('/users/:id', (req, res) => { })



app.listen(3000)