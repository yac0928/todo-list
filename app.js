const express = require('express')
const app = express()
const port = 3000

const db = require('./models')
const Todo = db.Todo

const { engine } = require('express-handlebars')

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/todos', (req, res) => {
	return Todo.findAll()
		.then((todos) => res.send({ todos }))
		.catch((err) => res.status(422).json(err))
})

app.get('/todos/new', (req, res) => {
	res.send('create todo')
})

app.post('/todos', (req, res) => {
	res.send('add todo')
})

app.get('/todos/:id', (req, res) => {
	res.send(`get todo: ${req.params.id}`)
})

app.get('/todos/:id/edit', (req, res) => {
	res.send(`get todo edit: ${req.params.id}`)
})

app.put('/todos/:id', (req, res) => {
	res.send('modify todo')
})

app.delete('/todos/:id', (req, res) => {
	res.send('delete todo')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})