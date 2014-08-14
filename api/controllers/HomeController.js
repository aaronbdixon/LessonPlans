var HomeController = {
	index: function(req, res) {
		return res.view({
			description: "This is a Sails.js / Angular.js application"
		});
	}
};

module.exports = HomeController;
