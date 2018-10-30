/**
 * class Lunchmeeting
 * creates a new Lunchmeeting class, which is an event with the following properties:
 * date, lunchspot, lunchPersons
 */

module.exports = class Lunchmeeting{
    constructor(date, selectedLunchspot){
        this.date = date
        // lunchspot has to be an instance of Lunchspot
        this.selectedLunchspot = selectedLunchspot
        // lunchpersons is a list of PersonNames
        this.lunchPersons = []
    }
}
  