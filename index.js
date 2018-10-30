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

// interaction Person with Lunchmeeting
katrin.attendLunchmeeting(lunchWithAnna)
anna.attendLunchmeeting(lunchWithAnna)

katrin.addLunchspotToFavourites(cowei)


// save Data to a JSON file
Database.save(lunchWithAnna)

// read Data from JSON file
const loadedFile = Database.load()
console.log(loadedFile)