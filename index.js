const Person = require('./person')
const Lunchspot = require('./lunchspot')
const Lunchmeeting = require('./lunchmeeting')
const FavouriteLunchspots = require('./favouriteLunchspots')
const Database = require('./database')


// instances of Person
const katrin = new Person('Katrin', 10, 'vietnamese', 'none')
const anna = new Person('Anna', 15, 'pizza', 'vegetarian')
const peter = new Person('Peter', 8, 'soup', 'none')

// instances of Lunchspot
const takafishhouse = new Lunchspot('TAKA Fisch House','Kreuzberg', 'fish', [5,16], [11,20], 'lactosefree')
const cowei = new Lunchspot('Cowei','Mitte', 'vietnamese', [3,11], [12,22], ['lactosefree','vegetarian','vegan','glutenfree'])

// instances of Lunchmeeting
const lunchWithAnna = new Lunchmeeting(new Date(2018,10,15),takafishhouse)
const lunchWithPeter = new Lunchmeeting(new Date(2018,10,19),cowei)
const lunchWithPeterAnna = new Lunchmeeting(new Date(2018,10,22),cowei)


// interaction Person with Lunchmeeting
katrin.attendLunchmeeting(lunchWithAnna)
anna.attendLunchmeeting(lunchWithAnna)
peter.attendLunchmeeting(lunchWithPeter)
katrin.attendLunchmeeting(lunchWithPeter)
katrin.attendLunchmeeting(lunchWithPeterAnna)


katrin.addLunchspotToFavourites(cowei)

// save Data to a JSON file
Database.save([lunchWithAnna,lunchWithPeter,lunchWithPeterAnna])

// read Data from JSON file
const loadedFile = Database.load()
// const firstLunch = Lunchmeeting.create(loadedFile[0])
// const secondLunch = Lunchmeeting.create(loadedFile[1])

// map all data to create Lunchmeeting objects
const convertedFile = loadedFile.map(Lunchmeeting.create)

console.log(convertedFile)