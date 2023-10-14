import { TeacherTitle } from "./model_lists/enums/teacher_title_enum";

// Class describes the teacher entity; properties & methds.
  export default class Teacher {
    constructor(private title: TeacherTitle, private firstname: string, private lastname: string, private TNS = 0, private TNC = 0){
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        this.TNS = TNS || 0; // total number of students taught.
        this.TNC = TNC || 0; // total number of courses taught.
    }

    set setTitle(newTitle: TeacherTitle){
        this.title = newTitle;
    }

    set setFirstname(newFirstname: string){
        this.firstname = newFirstname;
    }

    set setLastname(newLastname: string){
        this.lastname = newLastname;
    }

    set setTNS(newTNS: number){
        this.TNS = newTNS;
    }

    set setTNC(newTNC: number){
        this.TNC = newTNC;
    }

    get getTitle(){
        return this.title;
    }

    get getFirstname(){
        return this.firstname;
    }

    get getLastname(){
        return this.lastname;
    }

    get getTNS(){
        return this.TNS;
    }

    get getTNC(){
        return this.TNC;
    }
    getTeacher(){
        return this;
    }
    // New number of students to be added to the current total.
    // NAT: NEW ADDITIONAL TOTAL, to be added to the current total.
    addToTNS(NAT: number){
        this.TNS += NAT;
    }
    // New number of courses to be added to the current total.
    // NAT: NEW ADDITIONAL TOTAL, to be added to the current total.
    addToTNC(NAT: number){
        this.TNC += NAT;
    }

    getFullname(){
        return this.firstname+" "+this.lastname;
    }

    toString(){
        return "title: "+this.title+" firstname: "+this.firstname+" lastname: "+this.lastname+" TNS: "+this.TNS+" TNC: "+this.TNC;
    }
  }
