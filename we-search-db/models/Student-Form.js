module.exports = function(sequelize, DataTypes) {
    var StudentForm = sequelize.define("StudentForm", {
	id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
	},
	gpa: {
	    type: DataTypes.FLOAT,
	    allowNull: false
	},
	year: {
	    type: DataTypes.STRING,
	    allowNull: false 
	},
	major: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	university: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	student_status: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	university_switch: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	hours_week: {
	    type: DataTypes.INTEGER,
	    allowNull: false
	},
	need_pay: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	ta: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	research_interest: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	location:  {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	career: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	about: {
	    type: DataTypes.TEXT('long'),
	    allowNull: false
	},
	linkedin: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	website: {
	    type: DataTypes.STRING,
	    allowNull: true
	},
	resume: {
	    type: DataTypes.BLOB('long'),
	    allowNull: false
	},
	uuid: {
	    type: DataTypes.INTEGER,
	    allowNull: false
	}
    }, {      
	classMethods: {
            associate: function(model) {
		StudentForm.hasOne(model.User, {
		});
            }
	}
    });			     
    return StudentForm;
};
