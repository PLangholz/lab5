var data = require('../data.json');

exports.deleteFriend = function(req, res){
	console.log(data);
	res.render('deleteFriend', data);
	var friends = data["friends"];
	var length = friends.length
	for (var i = 0; i < length; i ++){
		if (friends[i]["name"] == unescape(req.query.name)) {
			friends.splice(i, 1);
			return;
		}
	}
	
};