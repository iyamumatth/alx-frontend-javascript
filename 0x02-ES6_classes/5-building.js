export default class Building() {
  /* eslint-disable */
  constructor(sqft) {
    if (
      this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error(
	'Class extending Building must override evacuationWarningMessage',
      );
    }

    this._sqft = sqft;
  }

  // getter
  get sqft() {
    return this._sqft;
  }
}
