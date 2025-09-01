// Importera och konfigurera Express
import express, { } from 'express'
import type { Express, Request } from 'express'

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

// Endpoint: "/counter"
app.get('/counter', (req, res) => {
	counter++
	res.send(`Jag har tagit emot ${counter} request.`)
})
// Data för endpoint
let counter = 0


// Resursen "/cars"
// Resursens data:
let cars: string[] = []

// Endpoint GET /cars
app.get('/cars', (req, res) => {
	console.log('GET /cars')
	res.send(cars)
})

// Endpoint POST /cars/:model
type CarParam = {
	model: string;
}
app.post('/cars/:model', (req: Request<CarParam>, res) => {
	console.log('POST /cars/:model')
	const model: string = req.params.model
	cars.push(model)
	res.sendStatus(201)  // 201 Created
})




// Start servern
app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})
