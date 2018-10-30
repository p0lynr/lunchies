/**
 * class Lunchspot
 * creates a new Lunchspot class with the following properties:
 * name, neighbourhood, cuisine, min_price, max_price, opening_hours, dietary
 */

module.exports = class Lunchspot{
  constructor(name, neighbourhood, cuisine, price_range, opening_hours, dietary){
    this.name = name
    this.neighbourhood = neighbourhood
    this.cuisine = cuisine
    this.price_range = price_range // [minprice, maxprice]
    this.opening_hours = opening_hours // [open,close]
    this.dietary = dietary
  }
}