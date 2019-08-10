class Driver {
  constructor (name, joinDate) {
    this.name = name;
    this.startDate = new Date(joinDate);
  }

  yearsExperienceFromBeginningOf (year) {
    const dateYear = new Date(year)
    return Math.floor(Math.abs(this.startDate - dateYear)/31536000000);
  }

}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


}
