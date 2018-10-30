/**
 * class Lunchmeeting
 * creates a new Lunchmeeting class, which is an event with the following properties:
 * date, lunchspot, lunchPersonNames(a list of Names only)
 */

module.exports = class Lunchmeeting{
    constructor(date, selectedLunchspot, lunchPersonNames){
        this.date = date
        // lunchspot has to be an instance of Lunchspot
        this.selectedLunchspot = selectedLunchspot
        // lunchpersons is a list of PersonNames
        this.lunchPersonNames = lunchPersonNames

    }
}
  