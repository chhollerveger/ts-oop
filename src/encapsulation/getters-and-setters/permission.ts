export default class Permission {

  constructor(
    private _name: string,
    private _level: number
  ) { }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName: string) {
    this._name = newName;
  }

}