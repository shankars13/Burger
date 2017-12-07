// Require express
var express = require("express");

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Setting router
var router = express.Router();

// Create all our routes and set up logic within those routes where required.

// Get list of burgers in the table
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
		  burgers: data
		};
		console.log(hbsObject);
		res.render("index",hbsObject);
	});
});
// Update when devoured
router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition ", condition);
	console.log("req.body ", req.body);

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function(result) {
	  if (result.changedRows == 0) {
	  	// If no rows were changed, then the ID must not exist, so 404
	  	return res.status(404).end();
	  } else {
	  	res.status(200).end();
	  }
	});
});

// Add new burger 
router.post("/api/burgers", function(req, res) {
	burger.insertOne([
		"burger_name","devoured"
	], [
		req.body.burger_name, JSON.parse(req.body.devoured)
	], function(result) {
	  // Send back the ID of the new burger
	  res.json({ id: result.insertId });
	});
});



// Export routes for server.js to use
module.exports = router;