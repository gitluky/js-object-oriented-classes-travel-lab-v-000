class Driver {
  constructor (name, joinDate) {
    this.name = name;
    this.startDate = new Date(joinDate);
  }

  yearsExperienceFromBeginningOf (year) {
    const dateYear = new Date(year)
    debugger;
    return Math.abs(this.startDate - dateYear);
  }

}

class Route {


}
