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


const main = async() =>{
    await Database.saveData([lunchWithAnna,lunchWithPeter,lunchWithPeterAnna])
    await console.log('waitforeverything')
    const loadedFile = await Database.readData()
    await console.log(loadedFile)
    await console.log('end')
}

main()
