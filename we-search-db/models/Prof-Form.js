module.exports = function(sequelize, DataTypes) {
    var ProfForm = sequelize.define("ProfForm", {
	id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
	},
	min_gpa: {
	    type: DataTypes.FLOAT,
	    allowNull: false
	},
	min_year: {
	    type: DataTypes.STRING,
	    allowNull: false 
	},
	field: {
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
	help_get_in: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	hours_week: {
	    type: DataTypes.INTEGER,
	    allowNull: false
	},
	pay_position: {
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
	available: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	about: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	linkedin: {
	    type: DataTypes.STRING,
	    allowNull: false 
	},
     	uuid: {
	    type: DataTypes.INTEGER
	}
    }, {      
	classMethods: {
            associate: function(model) {
		Form.hasOne(model.Student, {
		});
            }
	}
    });			     
    return ProfForm;
};
