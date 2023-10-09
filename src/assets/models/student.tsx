import AssignmentGrade from "./assignmentGrade";


// Class describes the student entity; properties & methds.
  export default class Student {
    constructor(private id: number, private firstName: string, private lastName: string, private assignmentGrade: AssignmentGrade[]){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.assignmentGrade = assignmentGrade;
    }

    set setId(newId: number){
        this.id = newId;
    }

    set setFirstname(newFirstname: string){
        this.firstName = newFirstname;
    }

    set setLastname(newLastname: string){
        this.lastName = newLastname;
    }

    get getId(){
        return this.id;
    }

    get getFirstname(){
        return this.firstName;
    }

    get getLastname(){
        return this.lastName;
    }

    get getAssignmentGrades(){
        return this.assignmentGrade;
    }

    getStudent(){
        return this;
    }

    getFullname(){
        return this.firstName+" "+this.lastName;
    }

    getAssignmentGrade(index: number){
        return this.assignmentGrade[index];
    }

    toString(){
        return "id: "+this.id+" firstName: "+this.firstName+" lastName: "+this.lastName+" getAssignmentGrades: "+this.getAssignmentGrades;
    }
  }

  let student = new Student(2, "Ronald", "Kato", []);


