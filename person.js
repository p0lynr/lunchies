/**
 * class Person
 * creates a new Person class with the following properties:
 * name, budget, taste, dietary, history, myfavouriteLunchspots
 */

module.exports = class Person{
  constructor(name, budget, taste, dietary){
      this.name = name
      this.budget = budget
      this.taste = taste
      this.dietary = dietary
      // this.history = []
      this.myfavouriteLunchspots = []
  }

  attendLunchmeeting(lunchmeeting) {
       lunchmeeting.lunchPersons.push(this)
  }

  addLunchspotToFavourites(lunchspot){
       this.myfavouriteLunchspots.push(lunchspot)
  }

  static create(obj){
    return new Person(obj.name, obj.budget, obj.taste, obj.dietary)
  }
}