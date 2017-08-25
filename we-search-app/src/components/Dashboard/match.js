import Algorithmia from 'algorithmia';
let studentArr, professorArr, studentObj, professorObj;

const match = {
    sortStudents: (students) => {
	console.log(students);
	/*studentArr = students.map( (el) => {
	    studentObj = {};
	    studentObj.interests = el.research_interest.split(",");;
	    studentObj.gpa = el.gpa;
	    studentObj.university = el.university;
	    studentObj.year = el.year;
	});
	console.log(studentArr);*/
	return students;
    },

    sortProfessors: (professors) => {
	console.log(professors);
	professorArr = professors.map( (el) => {
	    professorObj = {};
	    professorObj.interests = el.research_interest.split(",");;
	    professorObj.gpa = el.min_gpa;
	    professorObj.university = el.university;
	    professorObj.year = el.min_year;
	});
	console.log(professorArr);
	return professorArr;
    },
    
    findMatch: (students, professors) => {
    let input = {
	"scoring_weights": {
	    "interests": 2,
	    "gpa": 0,
	    "university": 8,
	    "year": 3
	},
	"group1": [
	    students
	],
	"group2": [
	    professors
	]
    };


	Algorithmia.client("sim6PoydDBLnItzi82APiluLGIU1")
	.algo("algo://matching/DatingAlgorithm/0.1.2")
	    .pipe(input)
	    .then(function(output) {
		console.log(output);
	    });
    }
};

export default match;
