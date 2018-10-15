
/**
 * class Lunchspot
 * creates a new Lunchspot class with the following properties:
 * name, neighbourhood, cuisine, min_price, max_price, opening_hours, dietary
 */
var Lunchspot = class{
  constructor(name, neighbourhood, cuisine, price_range, opening_hours, dietary){
    this.name = name
    this.neighbourhood = neighbourhood
    this.cuisine = cuisine
    this.price_range = price_range // [minprice, maxprice]
    this.opening_hours = opening_hours // [open,close]
    this.dietary = dietary
  }
}

/**
 * class FavouriteLunchspots
 * creates a new FavouriteLunchspots which is a list of faviourite lunchspots
 */
var FavouriteLunchspots = class{
  constructor(){
    this.favouriteLunchspotlist = []
  }
}

/**
 * class Person
 * creates a new Person class with the following properties:
 * name, budget, taste, dietary, history
 */
var Person = class{
  constructor(name, budget, taste, dietary){
      this.name = name
      this.budget = budget
      this.taste = taste
      this.dietary = dietary
      this.history = []
  }

  attendLunchmeeting(lunchmeeting) {
      this.history.push(lunchmeeting)
  }

  addLunchspotToFavourites(lunchspot){
      this.favouriteLunchspotlist.push(lunchspot)
  }
}

/**
 * class Lunchmeeting
 * creates a new Lunchmeeting class, which is an event with the following properties:
 * date, lunchspot, members
 */
var Lunchmeeting = class{
  constructor(date, selectedLunchspot, lunchPerson){
    this.date = date
    // lunchspot has to be an instance of Lunchspot
    this.selectedLunchspot = selectedLunchspot
    // lunchperson has to be an instance of Person
    this.lunchPerson = lunchPerson
  }
}


// instances of Person
var katrin = new Person('Katrin', 10, vietnamese, none)
var anna = new Person('Anna', 15, pizza, vegetarian)
var peter = new Person('Peter', 8, soup, none)

// instances of Lunchspot
var takafishhouse = new Lunchspot('TAKA Fisch House','Kreuzberg', 'fish', [5,16], [11,20], lactosefree)
var cowei = new Lunchspot('Cowei','Mitte', 'vietnamese', [3,11], [12,22], [lactosefree,vegetarian,vegan,glutenfree])

// instances of Lunchmeeting
var lunchWithAnna = new Lunchmeeting(new Date(2018,10,15),takafishhouse,anna)


// interaction Person with Lunchmeeting
katrin.attendLunchmeeting(lunchWithAnna)
katrin.addLunchspotToFavourites(cowei)
