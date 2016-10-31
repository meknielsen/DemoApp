/**
 * DemosController
 *
 * @description :: Server-side logic for managing demos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    'new': function(req, res) {
        res.view();
    },
	
	create: function(req, res, next) {
	    Demo.create(req.params.all(), function demoCreated(err, demo) {
	        if (err) return next(err);
	        res.redirect('/demo/shownew/' + demo.id);
	    });
	},
	
	shownew: function(req, res, next) {
	    
	    Demo.findOne(req.param('id'), function foundDemo(err, demo) {
	        
	        if (err) return next(err);
	        if (!demo) return next();
	        res.view({
	            demo: demo
	        });
	    });
	},
	
	listdemos: function(req, res, next) {
		Demo.find(function foundDemos(err, demos) {
			if (err) return next(err);
			res.view({
				demos: demos
			})
		});
	}
};

