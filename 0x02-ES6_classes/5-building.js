export default class Building() {
  /* eslint-disable */
  constructor() {
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw Error('Class extending Building must override evacuationWarningMessage');

    this._sqft = sqft;
  }

  // getter 
  get sqft() {
    return this.sqft;
  }
}
