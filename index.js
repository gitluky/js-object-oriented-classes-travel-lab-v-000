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
  constructor (start, end) {
    this.start = start;
    this.end = end;
  }

  blocksTravelled () {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    const blocksGoingEastOrWest = Math.abs(eastWest.indexOf(this.start.horizontal) - eastWest.indexOf(this.end.horizontal))
    const blocksGoingNorthOrSouth = Math.abs(Integer.parseInt(this.start.vertical) - Integer.parseInt(this.end.vertical));
    return blocksGoingEastOrWest + blocksGoingNorthOrSouth;
  }


}
