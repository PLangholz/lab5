var data = require("../data.json");

exports.addFriend = function(req, res) {   
	res.render('add', data); 
	var name = req.query.name
	var desc = req.query.description
	var new_friend = {
		"name" : name,
		"description" : desc,
		"imageURL" : "http://lorempixel.com/500/500/people"
	};
	data["friends"].push(new_friend);
	// Your code goes here
 }