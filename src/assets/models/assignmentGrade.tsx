// Class describes the assignmentGrade entity; properties & methds.
export default class AssignmentGrade {
        constructor(private assignmentId: string, private score: number){
            this.assignmentId = assignmentId;
            this.score = score;
        }

        set setAssignmentId(newId: string){
            this.assignmentId = newId;
        }

        set setScore(newScore: number){
            this.score = newScore
        }

        get getAssignmentId(){
            return this.assignmentId;
        }

        get getScore(){
            return this.score;
        }

        getAssignmentGrade(){
            return this;
        }

        toString(){
            return "id "+this.assignmentId+" score "+this.score;
        }
    }