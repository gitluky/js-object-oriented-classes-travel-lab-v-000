class Driver {
  constructor (name, joinDate) {
    this.name = name;
    this.joinDate = joinDate;
  }

  startDate () {
    return newDate(this.joinDate)
  }

  yearsExperienceFromBeginningOf (year) {
    const dateYear = new Date(year)
    return Math.abs(startDate() - dateYear);
  }

}

class Route {


}
