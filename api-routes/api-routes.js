var db  = require('../we-search-db/models');
var express = require('express');
var router  = express.Router();
var session = require("express-session");
var passport = require("../we-search-db/config/passport");
var isAuthenticated = require("../we-search-db/config/middleware/isAuthenticated");
var userId, studProf, first_name, last_name;


router.get('/api/test', function(req, res){
    res.json('it works');
});
// login authenticate
router.post("/login", passport.authenticate("local"), function(req, res, err) {
    if(err){
	console.log(err);
    }
    userId = (req.user.id).toString();
    studProf = (req.user.studentOrProf);
    first_name = (req.user.first_name);
    last_name = (req.user.last_name);
    res.json({user: {
	first_name: first_name,
	last_name: last_name,
	userId: userId,
	studProf: studProf
    }
    });
});

// user signout
router.get("/signout", function(req,res) {
    console.log("signing out");
    req.logout();
});

// register a new user
router.post("/signup", function(req,res) {
    db.User.findOrCreate({
	where: {email: req.body.user.email}, defaults:
	{
	    first_name: req.body.user.first_name,
	    last_name: req.body.user.last_name,
	    email: req.body.user.email,
	    password: req.body.user.password,
	    studentOrProf: req.body.user.studProf
	}
    }).then(function(newUser) {
	userId = (newUser[0].id).toString();
	studProf = (newUser[0].studentOrProf);
	res.json({
	    userId: userId,
	    studProf: studProf
	});
	// res.send('ok');
    }).catch(function(err) {
	console.log(err);
	res.send(err);
    });
});


// save student form
router.post("/api/newstudentform", function(req,res) {
    db.StudentForm.create({
        gpa: req.body.studentForm.gpa,
	year: req.body.studentForm.year,
	major: req.body.studentForm.major,
	university: req.body.studentForm.university,
	student_status: req.body.studentForm.student_status,
	university_switch: req.body.studentForm.university_switch,
	hours_week: req.body.studentForm.hours_week,
	need_pay: req.body.studentForm.need_pay,
	ta: req.body.studentForm.ta,
	research_interest: req.body.studentForm.interest,
        location: req.body.studentForm.location,
	career: req.body.studentForm.career,
        about: req.body.studentForm.about,
	linkedin: req.body.studentForm.linkedin,
	website: req.body.studentForm.website,
	resume: req.body.studentForm.resume,
	cover_letter: req.body.studentForm.cover_letter,
	uuid: req.body.studentForm.uuid
    }).then(function(newStudentForm) {
	res.send('ok');
    }).catch(function(err) {
	console.log(err);
        res.json(err);
    });
});

// save professor form
router.post("/api/newprofessorform", function(req,res) {
    db.ProfForm.create({
        min_gpa: req.body.profForm.min_gpa,
	min_year: req.body.profForm.min_year,
	field: req.body.profForm.field,
	university: req.body.profForm.university,
	student_status: req.body.profForm.student_status,
	help_get_in: req.body.profForm.help_get_in,
	hours_week: req.body.profForm.hours_week,
	pay_position: req.body.profForm.pay_position,
	ta: req.body.profForm.ta,
	research_interest: req.body.profForm.interest,
        location: req.body.profForm.location,
	available: req.body.profForm.available,
	about: req.body.profForm.about,
	linkedin: req.body.profForm.linkedin,	
	uuid: req.body.profForm.uuid
    }).then(function(newProfForm) {
	res.send('ok');
    }).catch(function(err) {
	console.log(err);
        res.json(err);
    });
});

router.get("/api/user", isAuthenticated, function(req, res) {
    console.log(req.body);
    db.User.findOne({
	where: {email: req.body.email} 
    }).then(function(user) {
	console.log(user);
	//userId = (newUser.dataValues.id).toString();
	res.send(user);
	//res.send('ok');
    }).catch(function(err) {
	console.log(err);
	res.send(err);
    });
});


router.get("/api/studentform", isAuthenticated, function(req, res) {
    db.StudentForm.findOne({
	where: {uuid: req.user.id}
    }).then(function(studForm) {
	res.json(studForm);
    }).catch(function(err) {
	console.log(err);
	res.send(err);
    });
});

router.get("/api/professorform", isAuthenticated, function(req, res) {
    db.ProfForm.findOne({
	where: {uuid: req.user.id}
    }).then(function(profForm) {
	res.json(profForm);
    }).catch(function(err) {
	console.log(err);
	res.send(err);
    });
});

router.put("/api/updateuser", isAuthenticated, function(req, res) {
    console.log(req.body);
    db.User.update({
	first_name: req.body.user.first_name,
	last_name: req.body.user.last_name,
	email: req.body.user.email
    }, {
	where: {id: req.body.user.uuid}
    }).then(function(updateUser) {
	res.json(updateUser);
    }).catch(function(err) {
	console.log(err);
    });
});

// update student form
router.put("/api/updatestudentform", function(req,res) {
    db.StudentForm.update({
        gpa: req.body.studentForm.gpa,
	year: req.body.studentForm.year,
	major: req.body.studentForm.major,
	university: req.body.studentForm.university,
	student_status: req.body.studentForm.student_status,
	university_switch: req.body.studentForm.university_switch,
	hours_week: req.body.studentForm.hours_week,
	need_pay: req.body.studentForm.need_pay,
	ta: req.body.studentForm.ta,
	research_interest: req.body.studentForm.interest,
        location: req.body.studentForm.location,
	career: req.body.studentForm.career,
        about: req.body.studentForm.about,
	linkedin: req.body.studentForm.linkedin,
	website: req.body.studentForm.website,
	resume: req.body.studentForm.resume,
	cover_letter: req.body.studentForm.cover_letter
    }, { where: 
	 {uuid: req.body.studentForm.uuid}
    }).then(function(newStudentForm) {
	res.send('ok');
    }).catch(function(err) {
	console.log(err);
        res.json(err);
    });
});

// upate professor form
router.put("/api/updateprofessorform", function(req,res) {
    db.ProfForm.update({
        min_gpa: req.body.profForm.min_gpa,
	min_year: req.body.profForm.min_year,
	field: req.body.profForm.field,
	university: req.body.profForm.university,
	student_status: req.body.profForm.student_status,
	help_get_in: req.body.profForm.help_get_in,
	hours_week: req.body.profForm.hours_week,
	pay_position: req.body.profForm.pay_position,
	ta: req.body.profForm.ta,
	research_interest: req.body.profForm.interest,
        location: req.body.profForm.location,
	available: req.body.profForm.available,
	about: req.body.profForm.about,
	linkedin: req.body.profForm.linkedin
    }, { where:
	 {uuid: req.body.profForm.uuid}
    }).then(function(newProfForm) {
	res.send('ok');
    }).catch(function(err) {
	console.log(err);
        res.json(err);
    });
});

router.get("/api/allprofessors", function(req, res) {
    db.ProfForm.findAll({
    }).then(function(allProfessors) {
	res.send(allProfessors);
    }).catch(function(err) {
	console.log(err);
        res.json(err);
    });
    
});

router.get("/api/allstudents", function(req, res) {
    db.StudentForm.findAll({
    }).then(function(allStudents) {
	res.send(allStudents);
    }).catch(function(err) {
	console.log(err);
        res.json(err);
    });
});

module.exports = router;
