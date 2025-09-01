// Importera och konfigurera Express
import express, { } from 'express'
import type { Express, Request, Response } from 'express'

const app: Express = express()
const port = 1337


// Middleware - funktioner som utökar funktionaliteten för Express
app.use(express.json()) // for parsing application/json



// Resurser / endpoints
// Resurs = något som finns på servern, t.ex. "/films" för att komma åt filmresursen på Studo Ghibli API
// Endpoint = en URL som servern hanterar
// Jämför med event listener:
// element.addEventListener('click', () => {})

app.get('/', (req, res) => {
	console.log('Du har frågat efter resursen "/". Men du får inget!!')
	res.send('No data :(')
})

// Resursen "/fruits"
// Resursens data:
interface Fruit {
	id: number;
	name: string;
	price: number;
}
let fruits: Fruit[] = [
	{ id: 1, name: 'banan', price: 10 },
	{ id: 2, name: 'päron', price: 7 }
]

// Endpoint: GET /fruits
app.get('/fruits', (req, res: Response<Fruit[]>) => {
	console.log('Inkommande request frågar efter /fruits. Vi skickar tillbaka en lista.')

	res.send(fruits)
})

// Endpoint: POST /fruits  (data i body)
app.post('/fruits', (req: Request<{}, void, Fruit>, res) => {
	const newFruit: Fruit = req.body
	// TODO: använd Zod för att validera body. Lita inte blint på req.body utan prova allt!! Om newFruit inte är ett korrekt frukt-objekt, skicka statuskod 400 Bad Request.
	fruits.push(newFruit)
	res.sendStatus(201)
})

/* Exempel: användaren fyller i en ny frukt i ett frontend-formulär (kiwi) och skickar det till API:et
fetch('/fruits', {
	method: 'POST',
	body: { id: 55, name: 'kiwi', price: 500 }
})
*/






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
