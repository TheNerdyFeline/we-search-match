let axios = require("axios");
let potentialProf = [];
let currentStudent = [];
let yearArr = ["High School Senior", "College Freshmen", "College Sophmore", "College Junior", "College Senior", "College Super Senior(5+ years)", "Grad School", "Doctorate"];

function makeProfArr(professors) {
    for(var i = 0; i < professors.length; i++) {
	potentialProf.push(professors[i].dataValues);
	potentialProf[i].totalScore = 0;
	
    }
};

/*function makeStudentArr(student) {
    for(var key in student) {
	if(student.hasOwnProperty(key)) {
	    currentStudent.push(key);
	}
    }
};*/

const matchProf = {  
    findMatches(user, professors) {
	currentStudent = JSON.parse(user.studentForm);
	//makeStudentArr(user.studentForm);
	console.log("curr student ", currentStudent);
	console.log("curr gpa ", currentStudent.gpa);
	makeProfArr(professors);
	
	for(var i = 0; i < potentialProf.length; i++) {
		if(currentStudent.gpa === potentialProf[i].min_gpa || currentStudent.gpa > potentialProf[i].min_gpa) {
		    potentialProf[i].totalScore += 5;
		    console.log("prof gpa", potentialProf[i].min_gpa);
		    console.log("prof score ", potentialProf[i].totalScore);
		}
		/*if(currentStudent.year === potentialProf.min_year || currentStudent.year > potentialProf.min_year)
		    totalScore += 5;*/
	}
	//console.log("match arr ", potentialProf);
    }
};

module.exports = matchProf;
