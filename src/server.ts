// Importera och konfigurera Express
import express, { } from 'express'
import type { Express } from 'express'

const app: Express = express()
const port = 1337


// Resurser / endpoints
// Resurs = något som finns på servern, t.ex. "/films" för att komma åt filmresursen på Studo Ghibli API
// Endpoint = en URL som servern hanterar
// Jämför med event listener:
// element.addEventListener('click', () => {})

app.get('/', (req, res) => {
	console.log('Du har frågat efter resursen "/". Men du får inget!!')
	res.send('No data :(')
})

// Resurs: "/fruits"
app.get('/fruits', (req, res) => {
	console.log('Inkommande request frågar efter /fruits. Vi skickar tillbaka en lista.')

	const data = [
		{ id: 1, name: 'banan', price: 10 },
		{ id: 2, name: 'päron', price: 7 }
	]
	res.send(data)
})


// Start servern
app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})
