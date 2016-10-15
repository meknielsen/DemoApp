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
	        res.redirect('/demo/show/' + demo.id);
	    });
	},
	
	show: function(req, res, next) {
	    
	    Demo.findOne(req.param('id'), function foundDemo(err, demo) {
	        if (err) return next(err);
	        if (!demo) return next();
	        res.view({
	            demo: demo
	        });
	    });
	}
};

