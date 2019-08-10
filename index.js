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

  blocksTravelled (start, end) {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    const blocksGoingEastOrWest = Math.abs(eastWest.indexOf(start.horizontal) - eastWest.indexOf(end.horizontal))
    const blocksGoingNorthOrSouth = Math.abs(Integer.parseInt(start.vertical) - Integer.parseInt(end.vertical));
    return blocksGoingEastOrWest + blocksGoingNorthOrSouth;
  }


}
