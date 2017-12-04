// Import the ORM to create function that will interact with the database
var orm = require("../config/orm.js")

var burger = {
	selectAll: function(callBack) {
		orm.selectAll("burgers",function(res) {
			callBack(res);
		});
	},

	updateOne: function(objColVals, condition, callBack) {
		orm.updateOne("burgers",objColVals,condition, function(res) {
			callBack(res);
		});
	},

	// The variables column and value are arrays.
	insertOne: function(column, value, callBack) {
		orm.insertOne("burgers",column,value, function(res) {
			callBack(res);
		});
	}
};

// Export the database functions for the controller (burgers_controller.js)
module.export=burger;