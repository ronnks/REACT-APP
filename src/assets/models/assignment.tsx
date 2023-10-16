// Model Class describes the Assignment base functionality.
export default class Assignment {
  constructor(private id: string, private name: string, private pp: number) {
    this.id = id;
    this.name = name; // course name.
    this.pp = pp; // points possible.
  }

  set setId(newId: string) {
    this.id = newId;
  }

  set setName(newName: string) {
    this.name = newName;
  }

  set setPP(newPP: number) {
    this.pp = newPP;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getPP() {
    return this.pp;
  }

  getAssignment() {
    return this;
  }

  toString() {
    return "id: " + this.id + " name: " + this.name + " pp: " + this.pp;
  }
}
