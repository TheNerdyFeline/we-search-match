// used to encrypt password in database
var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
// create new user in table
	var User = sequelize.define("User", {
		id: {
	        type: DataTypes.INTEGER,
	        autoIncrement: true,
	        primaryKey: true
		},
		first_name: {
		    type: DataTypes.STRING,
		    allowNull: false,
		    validate: {
			len: [3]
		    }
		},
		last_name: {
		    type: DataTypes.STRING,
		    allowNull: false,
		    validate: {
			len: [2]
		    }
		},
		email:  {
		    type: DataTypes.STRING,
		    allowNull: false,
		    validate: {
			isEmail: true
		    }
		},
		password: {
		    type: DataTypes.STRING,
		    allowNull: false
		},
		studentOrProf: {
		    type: DataTypes.STRING,
		    allowNull: false
	    }
	},
	{
		hooks: {
			beforeCreate: function(user, options) {
				user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
			}
		}
	});
	User.prototype.validPassword = function(password) {
		return bcrypt.compareSync(password, this.password);
	}
	return User;
};			     
